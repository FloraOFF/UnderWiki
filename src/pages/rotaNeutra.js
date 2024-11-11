import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const rotaNeutra = ({navigation}) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        <ResponsiveHeader
          backgroundImage={require('../../assets/images/logoNeutra.png')}
          textImage={require('../../assets/images/Rota_Neutra.png')}
        />
      </View>
      <Text style={styles.text}>História</Text>
      <Text style={[styles.text, styles.textInformation]}>
      A rota Neutra em Undertale é uma jornada onde as escolhas do jogador misturam atos de misericórdia e violência, resultando em um final que varia dependendo de quem foi poupado ou morto ao longo do caminho. Ao contrário das rotas Pacifista e Genocida, a rota Neutra é flexível e pode ter vários desfechos diferentes.

  Na rota Neutra, o protagonista, Frisk, pode optar por lutar contra alguns inimigos enquanto poupa outros. Essa combinação de escolhas leva a uma experiência de jogo única, onde as ações do jogador têm consequências variadas. Os encontros com personagens como Toriel, Sans, Papyrus, Undyne, Alphys, e Asgore podem terminar de várias maneiras, dependendo das decisões tomadas.

  O final da rota Neutra reflete as ações de Frisk durante o jogo. Flowey aparece no final para comentar sobre o que aconteceu e, em alguns casos, pode sugerir que Frisk tente alcançar um final melhor. Essa rota pode terminar de maneira ambígua, otimista ou trágica, mas nunca alcança a paz completa da rota Pacifista ou a devastação total da rota Genocida.

  A rota Neutra é uma exploração da complexidade moral, mostrando que as escolhas intermediárias nem sempre levam a uma resolução clara, e muitas vezes deixam o destino do Subsolo incerto.
      </Text>
      <View style={styles.buttonView}>
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
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
  },
  textInformation: {
    backgroundColor: "#AFB9CC",
    padding: 10,
    borderRadius: 2,
    marginTop: 15,
    marginHorizontal: 10,
    textAlign: 'center',
    lineHeight: 20
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
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

export default rotaNeutra;