import Carrosel from './components/carrosel';
import DetalhesJogoModal, {JogoDetalhe} from './components/detalhesJogoModal';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListaJogos from './components/listaJogos';

export default function App() {

  const[modalVisivel, setModalVisivel] = useState(false);
  const [jogoSelecionado, setJogoSelecionado] = useState<JogoDetalhe | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./imagens/logo.jpg')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>

      <Carrosel/>

      <View style={styles.conteudo}>
          
          <View style={styles.conteudo}>
                <ListaJogos
                    onSelecionar={(jogo) => {
                        setJogoSelecionado(jogo);
                        setModalVisivel(true);
                    }}
                />
            </View>

            <DetalhesJogoModal
                visivel={modalVisivel}
                onFechar={() => setModalVisivel(false)}
                jogo={jogoSelecionado}
            />

        </View>

      <View style={styles.footer}>
        {/*<Text style={styles.texto}>Rodapé</Text>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  header: {
    height: 80,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },

  conteudo: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  texto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  logo: {
    width: 220,
    height: 50, 
    marginTop: 30
  }
});
