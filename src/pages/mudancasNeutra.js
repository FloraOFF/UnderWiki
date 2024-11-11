import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CharacterItem from '../components/characterItem';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const mudancasNeutra = ({ navigation }) => (
  <View style={ styles.container }>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        <ResponsiveHeader
          backgroundImage={require('../../assets/images/mudancaNeutra.png')}
          textImage={require('../../assets/images/impactoEscolhasRotas.png')}
        />
      </View>
      <LinearGradient
        colors={['#4a4e69', '#6c5b7b', '#c9ada7']}
        style={styles.contentContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Resumo</Text>
            <Text style={[styles.text, styles.textInformation]}>
              A rota Neutra é a mais variável, dependendo das escolhas do jogador, especialmente em relação a quem o jogador decide poupar ou matar. Como resultado, essa rota pode ter vários desfechos, que variam de um final moderadamente positivo a um desfecho sombrio. Diferentes personagens podem assumir papéis de antagonistas dependendo das mortes ou poupanças feitas pelo jogador. Embora não seja tão otimista quanto a rota Pacifista, essa rota oferece insights sobre o impacto das ações do jogador e as consequências de decisões ambíguas ou contraditórias.
            </Text>
          <Text style={styles.sectionTitle}>Exclusividade e mundanças</Text>
            <Text style={[styles.text, styles.textInformation]}>
            Omega Flowey: Dependendo das ações do jogador, Flowey pode assumir a forma de Omega Flowey, um chefe final horripilante que só aparece na rota Neutra. Ele representa a culminação de um jogo sem decisões pacifistas completas.
            {"\n\n"}
            Mettaton EX: Mettaton pode ser enfrentado em sua forma EX, mas ele pode ser derrotado de várias maneiras, o que influencia o desfecho da história.
            {"\n\n"}
            Variabilidade: Na rota Neutra, o final depende de quem o jogador poupa ou mata. Por exemplo:
            {"\n\n"}
              <Text style={[styles.text, styles.bulletPoint]}>
                • Se o jogador poupar Papyrus, ele pode enviar uma mensagem esperançosa no final.
              </Text>
              {"\n\n"}
              <Text style={[styles.text, styles.bulletPoint]}>
                • Se o jogador mata Undyne mas poupa Sans, Sans pode confrontar o jogador com uma luta opcionalmente desafiadora.
              </Text>
              {"\n\n"}
              <Text style={[styles.text, styles.bulletPoint]}>
                • O jogador pode ter diferentes interações e resultados dependendo de como trata cada personagem, gerando uma grande diversidade de finais.
              </Text>
            </Text>
            <View style={styles.imageContainerInformation}>
                <CharacterItem
                  image={require('../../assets/images/omegaFlowey.png')}
                  name={'Omega Flowey'}
                />
                <CharacterItem
                  image={require('../../assets/images/mettaton2.png')}
                  name={"Mettaton EX"}
                />
                <CharacterItem
                  image={require('../../assets/images/diversidadeUndertale.png')}
                  name={'Diversidade Undertale'}
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
          id={5}
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
  },
  bulletPoint: {
    fontSize: 14,
    marginVertical: 4,
  },

});

export default mudancasNeutra;