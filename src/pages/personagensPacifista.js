import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CharacterItem from '../components/characterItem';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const personagensPacifista = ({ navigation }) => (
  <View style={ styles.container }>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        <ResponsiveHeader
          backgroundImage={require('../../assets/images/logoPersonagens.png')}
          textImage={require('../../assets/images/logoTextoPersonagens.png')}
        />
      </View>

      <Text style={styles.sectionTitle}>Humanos</Text>
      <LinearGradient
        colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']}
        style={styles.contentContainer}
      >
        <View style={styles.contentContainer}>
          <View style={styles.imageContainerInformation}>
              <CharacterItem
                image={require('../../assets/images/frisk.png')}
                name={'Frisk'}
              />
              <CharacterItem
                image={require('../../assets/images/almasHumanas.png')}
                name={'Almas'}
              />
          </View>
                
          <Text style={[styles.text, styles.textInformation]}>
            Frisk
            {"\n\n"}
            Protagonista de Undertale
            Cai no Underground, o mundo dos monstros
            Suas ações determinam o destino do jogo
            {"\n\n"}
            Almas Humanas
            {"\n\n"}
            Sete cores: Vermelho, Azul, Verde, Roxo, Amarelo, Laranja, Ciano
            Essenciais para quebrar a barreira do Underground
            Muito mais poderosas que almas de monstros
            A alma de Frisk (vermelha) é a sétima necessária
            {"\n\n"}
            As escolhas de Frisk e o poder das almas humanas são centrais para a história e os múltiplos finais de Undertale.
          </Text>
        </View>
      </LinearGradient>
      <Text style={styles.sectionTitle}>Monstros</Text>
      <LinearGradient
        colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']}
        style={styles.contentContainer}
      >
        <View style={styles.contentContainer}>
            <View style={styles.imageContainerInformation}>
              <CharacterItem
                image={require('../../assets/images/flowey.png')}
                name={'Flowey'}
              />
              <CharacterItem
                image={require('../../assets/images/toriel.png')}
                name={'Toriel'}
              />
              <CharacterItem
                image={require('../../assets/images/sans.png')}
                name={'Sans'}
              />
              <CharacterItem
                image={require('../../assets/images/papyrus.png')}
                name={'Papyrus'}
              />
              <CharacterItem
                image={require('../../assets/images/undyne.png')}
                name={'Undyne'}
              />
              <CharacterItem
                image={require('../../assets/images/alphys.png')}
                name={'Alphays'}
              />
              <CharacterItem
                image={require('../../assets/images/mettaton1.png')}
                name={'Mettaton Normal'}
              />
              <CharacterItem
                image={require('../../assets/images/mettaton2.png')}
                name={'Mettaton Ex'}
              />
              <CharacterItem
                image={require('../../assets/images/asgore.png')}
                name={'Asgore'}
              />
              <CharacterItem
                image={require('../../assets/images/asriel1.png')}
                name={'Asriel Criança'}
              />
              <CharacterItem
                image={require('../../assets/images/asriel2.png')}
                name={'Asriel "Deus da Hipermorte"'}
              />
          </View>  
          <Text style={[styles.text, styles.textInformation]}>
            Flowey
            {"\n\n"}
            Flowey é uma flor falante que o jogador encontra no início do jogo
  Inicialmente parece amigável, mas revela-se manipulador e malévolo. É um dos principais antagonistas, com uma história profundamente conectada ao passado do Subterrâneo.
            {"\n\n"}
            Toriel
            {"\n\n"}
            Toriel é uma criatura semelhante a uma cabra que encontra Frisk logo após ele cair no Subterrâneo. Ela age como uma figura maternal, protegendo Frisk dos perigos
  Gentil, mas firme, ela deseja manter Frisk seguro e longe das garras de Asgore.
            {"\n\n"}
            Sans
            {"\n\n"}
            Sans é um esqueleto descontraído e irmão de Papyrus
  Conhecido por suas piadas e atitude relaxada, ele esconde uma natureza complexa e misteriosa. Apesar de sua aparente indiferença, Sans está ciente de eventos que transcendem o tempo e espaço, fazendo dele um dos personagens mais enigmáticos.
            {"\n\n"}
            Papyrus
            {"\n\n"}
            Papyrus é o irmão de Sans e um aspirante a membro da Guarda Real. Entusiasmado e confiante, tem um coração enorme apesar de sua obsessão por capturar um humano.
            {"\n\n"}
            Undyne
            {"\n\n"}
            Undyne é a chefe da Guarda Real e uma guerreira feroz. Determinada e corajosa, inicialmente persegue Frisk com a intenção de capturá-lo. Apesar de sua postura ameaçadora, Undyne valoriza a justiça e pode se tornar uma aliada leal.
            {"\n\n"}
            Alphays
            {"\n\n"}
            Alphys é a cientista real do Subterrâneo, tímida e nervosa. Responsável pela criação dos "Amalgamates", ela carrega um profundo sentimento de culpa. Nutre sentimentos por Undyne e é apaixonada por animes.
            {"\n\n"}
            Mettaton
            {"\n\n"}
            Mettaton é um robô estrela de TV criado por Alphys. Com um ego enorme, adora estar no centro das atenções e desafia Frisk em batalhas extravagantes. Inicialmente, Mettaton é uma simples máquina, mas revela sua forma EX, glamourosa e humanóide, durante o jogo.
            {"\n\n"}
            Asgore
            {"\n\n"}
            Asgore é o rei do Subterrâneo e pai de Asriel. Governa com firmeza, mas é profundamente triste e bondoso. Deseja libertar os monstros do Subterrâneo, mas para isso precisa da alma de humanos, o que o coloca em conflito com Frisk.
            {"\n\n"}
            Asriel
            {"\n\n"}
            Asriel é o filho de Asgore e Toriel, central para a trama de Undertale. Inicialmente uma criança gentil, torna-se Flowey após uma tragédia, perdendo sua forma física e coração. Na rota pacifista, retorna à sua forma infantil e expressa arrependimento. Como Deus da Hipermorte, assume uma forma celestial e poderosa, representando o auge de seu desejo de poder, mas também sua luta interna por redenção.
            {"\n\n"}
            Esses personagens são fundamentais para a narrativa de Undertale, explorando temas de poder, amor, e redenção, cada um com suas complexas motivações.
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.buttonView}>
        <ButtonRoute
          navigation={navigation}
          id={1}
          text="Historia"
        />
        <ButtonRoute
          navigation={navigation}
          id={7}
          text="Ver rotas"
        />
        <ButtonRoute
          navigation={navigation}
          id={8}
          text="Diferenças Rota"
        />
        </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  textInformation: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 4,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 2,
    marginTop: 15,
    marginHorizontal: 10,
    textAlign: 'center',
    lineHeight: 20
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  imageContainerInformation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    fontFamily: 'PressStart2P',
    color: "white",
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: "black",
    borderRadius: 2,
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  buttonView: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
});

export default personagensPacifista;