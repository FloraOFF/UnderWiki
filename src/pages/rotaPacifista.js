import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const rotaPacifista = ({navigation}) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        <ResponsiveHeader
          backgroundImage={require('../../assets/images/logoPacifista.png')}
          textImage={require('../../assets/images/Rota_Pacifista.png')}
        />
      </View>
      <Text style={styles.text}>História</Text>
      <Text style={[styles.text, styles.textInformation]}>A rota Pacifista em Undertale é marcada por uma jornada de compaixão e empatia, onde o jogador escolhe resolver conflitos sem derramamento de sangue. Desde o início, o protagonista, Frisk, cai no Subsolo, um mundo habitado por monstros. Embora seja possível lutar contra os inimigos, na rota Pacifista, o jogador opta por poupar todos, criando laços com os personagens em vez de eliminá-los.
  {"\n\n"}
  Ao longo da jornada, Frisk encontra personagens-chave como Toriel, Sans, Papyrus, Undyne, Alphys, e Asgore. Em vez de confrontá-los violentamente, o jogador interage de maneiras que levam a resultados pacíficos, construindo relacionamentos e revelando as histórias e motivações por trás de cada personagem.
  {"\n\n"}
  Um dos pontos mais emocionantes da rota Pacifista é o confronto final, onde Frisk demonstra o poder da amizade e do perdão. Ao poupar todos os inimigos, Frisk ajuda a unir os monstros e traz paz ao Subsolo. O final dessa rota é o mais otimista, com os monstros finalmente se libertando e tendo a chance de viver na superfície, lado a lado com os humanos.
  {"\n\n"}
  Essa rota enfatiza a ideia de que as escolhas pacíficas e a empatia têm o poder de mudar o destino, não só do protagonista, mas de todos ao seu redor.</Text>

      <View style={styles.buttonView}>
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
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: 'center',
    padding: 10
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
    backgroundColor: "#EDB060",
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
  buttonView: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
});

export default rotaPacifista;