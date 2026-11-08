
import { inserirJogosIniciais } from "../repository/jogosInsercao";
import { buscarJogos } from "../repository/jogosRepository";
import { JogoDetalhe } from "./detalhesJogoModal";

import {
    View,
    Text,
    Image,
    FlatList,
    Pressable,
    StyleSheet,
    ImageSourcePropType,
    ActivityIndicator
} from 'react-native';

import { useEffect, useState } from "react";

interface JogoBanco {
    id: number;
    nome: string;
    descricao: string;
    desenvolvedora: string;
    genero: string;
    data_lancamento: string;
}

const imagensPorJogo: Record<string, ImageSourcePropType> = {
    'God of War Ragnarok': require('../imagens/GodofWar.jpg'),
    'Resident Evil Village': require('../imagens/residentEvil.jpg'),
    'The Last of Us Part II': require('../imagens/theLastofUs.jpg')
};

interface Props {
    onSelecionar: (jogo: JogoDetalhe) => void;
}

export default function ListaJogos({ onSelecionar }: Props) {

    const [jogos, setJogos] = useState<JogoDetalhe[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {

        async function carregarJogos() {

            try {
                // Insere os jogos iniciais no banco
                await inserirJogosIniciais();

                // Consulta os jogos cadastrados
                const resultado = await buscarJogos() as JogoBanco[];

                // Acrescenta a imagem a cada jogo
                const jogosComImagem: JogoDetalhe[] = resultado
                    .filter(jogo => imagensPorJogo[jogo.nome] !== undefined)
                    .map(jogo => ({
                        ...jogo,
                        imagem: imagensPorJogo[jogo.nome],
                    }));

                setJogos(jogosComImagem);

            } catch (error) {
                console.error('Erro ao carregar jogos:', error);

            } finally {
                setCarregando(false);
            }
        }

        carregarJogos();

    }, []);

    return (
        <View style={styles.container}>

            {carregando ? (
                <ActivityIndicator size="large" />
            ) : (
                <FlatList
                    data={jogos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.card}
                            onPress={() => onSelecionar(item)}
                        >
                            <Image
                                source={item.imagem}
                                style={styles.imagem}
                                resizeMode="cover"
                            />

                            <View style={styles.informacoes}>
                                <Text style={styles.titulo} numberOfLines={1}>
                                    {item.nome}
                                </Text>

                                <Text
                                    style={styles.descricao}
                                    numberOfLines={4}
                                    ellipsizeMode="tail"
                                >
                                    {item.descricao}
                                </Text>
                                <Text style={styles.indicacao}>
                                    Toque para ver detalhes
                                </Text>
                            </View>
                        </Pressable>
                    )}
                />
            )}

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    card: {
        flexDirection: 'row',
        width: '100%',
        height: 135,
        backgroundColor: '#E5E7EB',
        borderRadius: 12,
        marginBottom: 12,
        overflow: 'hidden',
        elevation: 3,
    },

    imagem: {
        width: 115,
        height: '100%',
    },

    informacoes: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
        justifyContent: 'center',
        gap: 7,
    },

    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
    },

    descricao: {
        fontSize: 13,
        color: '#444444',
        lineHeight: 18,
    },

    indicacao: {
        fontSize: 11,
        color: '#6B7280',
    },
});
