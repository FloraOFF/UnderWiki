import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const rotaGenocida = ({navigation}) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.imageContainer}>
        <ResponsiveHeader
          backgroundImage={require('../../assets/images/logoGenocida.png')}
          textImage={require('../../assets/images/Rota_Genocida.png')}
        />
      </View>
      <Text style={styles.text}>História</Text>
      <Text style={[styles.text, styles.textInformation]}>
        A rota Genocida em Undertale é a mais sombria e brutal, onde o jogador toma a decisão consciente de eliminar todos os monstros do Subsolo, sem deixar ninguém para trás. Desde o início, o protagonista, Frisk, não apenas derrota os inimigos que encontra, mas também caça todos os monstros em cada área, esgotando completamente a presença deles.

    À medida que Frisk avança pela rota Genocida, o mundo do jogo começa a mudar drasticamente. A música torna-se mais tensa e assombrosa, os personagens que antes eram amigáveis ou neutros ficam aterrorizados ou decididos a parar Frisk. Personagens como Papyrus, que antes tentavam poupar Frisk, são derrotados sem piedade. Undyne se transforma em "Undyne the Undying", uma versão mais poderosa e desesperada de si mesma, mas mesmo ela sucumbe ao poder de Frisk.

    O momento culminante da rota Genocida é o confronto com Sans, o personagem que se torna o maior obstáculo para Frisk. A batalha contra Sans é uma das mais difíceis do jogo, e sua derrota marca o caminho para o verdadeiro fim sombrio.

    No final, Frisk encontra Chara, o primeiro humano a cair no Subsolo, que se revela como uma entidade que representa a destruição total. Chara reconhece as ações de Frisk e, dependendo da escolha final do jogador, pode "apagar" o mundo, resultando em um final devastador onde nada resta, e o jogo é alterado permanentemente para refletir essa destruição.

    A rota Genocida é um comentário sobre o poder e as consequências da violência desenfreada, deixando uma marca indelével no mundo do jogo e no próprio jogador.
      </Text>
      <View style={styles.buttonView}>
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
    backgroundColor: "#F16E5D",
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

export default rotaGenocida;