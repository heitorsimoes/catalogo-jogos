import { View, Image, FlatList, StyleSheet, Dimensions} from 'react-native';
import {useRef, useEffect } from 'react';

const imagens = [
    require('../imagens/GodofWar.jpg'),
    require('../imagens/residentEvil.jpg'),
    require('../imagens/theLastofUs.jpg')
];

const larguraTela = Dimensions.get('window').width;

export default function Carrosel() {

    const listaRef = useRef<FlatList>(null);

    let indiceAtual = 0;

    useEffect(() => {
        const intervalo = setInterval(() => {
            indiceAtual = (indiceAtual+1) % imagens.length;

            listaRef.current?.scrollToIndex({
                index:indiceAtual,
                animated: true
            });
        }, 3000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
            ref={listaRef}
            data={imagens}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
                <Image
                source={item}
                style={styles.imagem}
                resizeMode='cover'
                />
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: larguraTela
    },

    imagem: {
        width: larguraTela,
        height: 220,
    }
});