import { Modal, View, Text, Image, Pressable, ScrollView, StyleSheet, ImageSourcePropType } from "react-native";

export interface JogoDetalhe {
    id: number,
    nome: string;
    descricao: string;
    desenvolvedora: string;
    genero: string;
    data_lancamento: string;
    imagem: ImageSourcePropType;
}

interface Props {
    visivel: boolean;
    onFechar: () => void;
    jogo: JogoDetalhe | null;
}

export default function DetalhesJogoModal({visivel, onFechar, jogo,}: Props) {
    return (
        <Modal
        visible={visivel && jogo !== null}
        transparent={true}
        animationType="slide"
        onRequestClose={onFechar}
        statusBarTranslucent={true}
        >
            <View style={styles.overlay}>
                {jogo && (
                    <View style={styles.modal}>
                        <Pressable
                        style={styles.botaoFechar}
                        onPress={onFechar}
                        >
                            <Text style={styles.textoFechar}>
                                X
                            </Text>
                        </Pressable>

                        <ScrollView>
                            <Image
                            source={jogo.imagem}
                            style={styles.imagem}
                            resizeMode="cover"
                            />

                            <View style={styles.informacoes}>
                                <Text style={styles.titulo}>{jogo.nome}</Text>

                                <Text style={styles.descricao}>
                                    <Text style={styles.destaque}>Descrição</Text>
                                    {"\n"}
                                    {jogo.descricao}
                                    </Text>

                                <Text style={styles.texto}>
                                    <Text style={styles.destaque}>Desenvolvedora</Text>
                                    {"\n"}
                                    {jogo.desenvolvedora}
                                    </Text>

                                <Text style={styles.texto}>
                                    <Text style={styles.destaque}>Genêro</Text>
                                    {"\n"}
                                    {jogo.genero}
                                    </Text>

                                <Text style={styles.texto}>
                                    <Text style={styles.destaque}>Data lançamento</Text>
                                    {"\n"}
                                    {jogo.data_lancamento}
                                    </Text>
                            </View>

                        </ScrollView>

                    </View>
                )}
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modal: {
    width: '100%',
    maxHeight: '85%',
    backgroundColor: '#CBD5E1',
    borderRadius: 25,
    overflow: 'hidden',
  },

  botaoFechar: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoFechar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  imagem: {
    width: '100%',
    height: 200,
  },

  informacoes: {
    padding: 20,
    gap: 12,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 16,
  },

  texto: {
    fontSize: 15,
  },

  destaque: {
    fontSize: 19,
    fontWeight: "condensed"
  }

});