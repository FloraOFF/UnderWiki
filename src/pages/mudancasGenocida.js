import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CharacterItem from '../components/characterItem';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const mudancasGenocida = ({ navigation }) => (
  <View style={ styles.container }>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        <ResponsiveHeader
          backgroundImage={require('../../assets/images/mudancaGenocida.png')}
          textImage={require('../../assets/images/impactoEscolhasRotas.png')}
        />
      </View>
      <LinearGradient
        colors={['#d83f3e', '#f26b38', '#f5a623']}
        style={styles.contentContainer}
      >
        <View style={styles.contentContainer}>
                    <Text style={styles.sectionTitle}>Resumo</Text>
            <Text style={[styles.text, styles.textInformation]}>
              Na rota Genocida, o jogador opta por eliminar todos os inimigos que encontra, incluindo os chefes principais. Esse caminho transforma o protagonista em uma figura aterrorizante, mudando drasticamente a atmosfera do jogo. Personagens que antes eram amigáveis se tornam desesperados ou vingativos, culminando em batalhas intensas e desafiadoras, como a luta contra Undyne the Undying e Sans. O final dessa rota é sombrio e devastador, refletindo a destruição e a perda de esperança que acompanham a violência indiscriminada.
            </Text>
          <Text style={styles.sectionTitle}>Exclusividade e mundanças</Text>
            <Text style={[styles.text, styles.textInformation]}>
              Undyne the Undying: Nesta rota, ao eliminar todos os inimigos, incluindo personagens principais, Undyne assume uma forma mais poderosa chamada Undyne the Undying, como uma última tentativa desesperada de salvar o Subsolo.
              {"\n\n"}
              Sans: Sans também se torna um chefe final extremamente difícil nesta rota. Ele representa o último obstáculo e julgamento do jogador por todas as mortes cometidas.
              {"\n\n"}
              Toriel, Papyrus, Asgore, etc.: Muitos dos personagens que normalmente têm histórias complexas e interações prolongadas em outras rotas, são mortos rapidamente na rota Genocida, com diálogos curtos e sem chance de redenção.
              {"\n\n"}
              Chara: No final da rota Genocida, o jogador é confrontado por Chara, o espírito de uma criança que representa a destruição total, com quem o jogador fez um pacto ao escolher esse caminho de violência.
            </Text>
            <View style={styles.imageContainerInformation}>
                <CharacterItem
                  image={require('../../assets/images/undyneImortal.png')}
                  name={'Undyne a Imortal'}
                />
                <CharacterItem
                  image={require('../../assets/images/sans.png')}
                  name={"Sans"}
                />
                <CharacterItem
                  image={require('../../assets/images/fimGenocida.png')}
                  name={'Fim Genocida'}
                />
                <CharacterItem
                  image={require('../../assets/images/chara.png')}
                  name={"Chara"}
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
          id={6}
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
  }
});

export default mudancasGenocida;