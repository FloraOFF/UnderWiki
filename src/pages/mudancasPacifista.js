import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CharacterItem from '../components/characterItem';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const mudancasPacifista = ({ navigation }) => (
  <View style={ styles.container }>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        <ResponsiveHeader
          backgroundImage={require('../../assets/images/mudancaPacifista.png')}
          textImage={require('../../assets/images/impactoEscolhasRotas.png')}
        />
      </View>
      <LinearGradient
        colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']}
        style={styles.contentContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Resumo</Text>
          <Text style={[styles.text, styles.textInformation]}>
            Na rota Pacifista, o jogador evita matar qualquer personagem, optando por resolver conflitos de maneira pacífica, seja por meio de diálogos, atos ou fugindo das batalhas. Essa abordagem revela o lado mais humano e emocional dos personagens, permitindo ao jogador conhecer melhor suas histórias e desenvolver laços com eles. O final desta rota é o mais otimista, onde o protagonista e os habitantes do Subsolo encontram uma solução para escapar juntos, promovendo uma mensagem de redenção, perdão e união.
          </Text>
          <Text style={styles.sectionTitle}>Exclusividade e mundanças</Text>
          <Text style={[styles.text, styles.textInformation]}>
              Asriel Dreemurr: O verdadeiro Asriel só aparece na rota Pacifista, onde ele é revelado como o vilão final após a derrota de Flowey. O jogador descobre sua trágica história, o que oferece um encerramento emocional ao enredo do jogo, mostrando sua redenção.
              {"\n\n"}
              True Lab: Nesta rota, o jogador tem acesso ao True Lab, onde descobre o passado de Alphys e as origens dos monstros "Amalgamates". Isso não ocorre nas outras rotas.
          </Text>
            <View style={styles.imageContainerInformation}>
                <CharacterItem
                  image={require('../../assets/images/asriel1.png')}
                  name={'Asriel Crinça'}
                />
                <CharacterItem
                  image={require('../../assets/images/asriel2.png')}
                  name={"Asriel 'Deus da Hipermorte'"}
                />
                <CharacterItem
                  image={require('../../assets/images/verdadeiroLab.png')}
                  name={'Verdadeiro Lab'}
                />
                <CharacterItem
                  image={require('../../assets/images/monstrosLab.png')}
                  name={"'Amalgamates' monstros Verdadeiro Lab"}
                />
            </View> 
          </View>    
        </LinearGradient>
      <View style={styles.buttonView}>
        <ButtonRoute
          navigation={navigation}
          id={3}
          text="Historia"
        />
        <ButtonRoute
          navigation={navigation}
          id={7}
          text="Ver rotas"
        />
        <ButtonRoute
          navigation={navigation}
          id={4}
          text="Personagens"
        />
        <ButtonRoute
          navigation={navigation}
          id={11}
          text="Curiosidades e Mistérios"
        />
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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

export default mudancasPacifista;