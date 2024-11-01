import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CharacterItem from '../components/characterItem';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const personagensGenocida = ({ navigation }) => (
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
        colors={['#d83f3e', '#f26b38', '#f5a623']}
        style={styles.contentContainer}
      >
        <View style={styles.contentContainer}>
          <View style={styles.imageContainerInformation}>
              <CharacterItem
                image={require('../../assets/images/FriskRecort.png')}
                name={'Frisk'}
              />
              <CharacterItem
                image={require('../../assets/images/chara.png')}
                name={'Chara'}
              />
              <CharacterItem
                image={require('../../assets/images/almasHumanas.png')}
                name={'Almas'}
              />
          </View> 
          <Text style={[styles.text, styles.textInformation]}>
            Frisk
            {"\n\n"}
            Protagonista jogável
            Cai no Underground
            Ações determinam o rumo da história
            {"\n\n"}
            Chara
            {"\n\n"}
            Primeiro humano a cair no Underground
            Adotado pela família real de monstros
            Papel crucial na história de fundo e na rota genocida
            {"\n\n"}
            Almas Humanas
            {"\n\n"}
            Sete cores com diferentes atributos
            Essenciais para quebrar a barreira
            Mais poderosas que almas de monstros
            {"\n\n"}
            Frisk, Chara e as almas humanas são fundamentais para os múltiplos enredos e finais de Undertale.
          </Text>
        </View>    
      </LinearGradient>
      <Text style={styles.sectionTitle}>Monstros</Text>
      <LinearGradient
        colors={['#d83f3e', '#f26b38', '#f5a623']}
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
                image={require('../../assets/images/undyneImortal.png')}
                name={'Undyne, a Imortal'}
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
                image={require('../../assets/images/mettatonNeo.png')}
                name={'Mettaton Neo'}
              />
              <CharacterItem
                image={require('../../assets/images/asgore.png')}
                name={'Asgore'}
              />
          </View>  
          <Text style={[styles.text, styles.textInformation]}>
            Flowey
            {"\n\n"}
            Uma flor que observa e comenta as ações genocidas do jogador. Inicialmente esperançoso em encontrar um aliado, Flowey se torna cada vez mais assustado e desesperado à medida que a destruição avança.
            {"\n\n"}
            Toriel
            {"\n\n"}
            Figura maternal que protege Frisk e deseja mantê-lo longe de Asgore, lutando entre o dever e o amor. É uma das primeiras a cair na rota Genocida. Sua natureza protetora é impotente diante da determinação do jogador em exterminar todos os habitantes do Subterrâneo.
            {"\n\n"}
            Sans
            {"\n\n"}
            Esqueleto descontraído com um lado misterioso, ciente de eventos além do tempo e espaço, podendo ser tanto aliado quanto oponente. Nessa rota, torna-se um dos últimos e mais difíceis desafios na rota Genocida. Ele revela a extensão de suas habilidades para tentar parar o jogador.
            {"\n\n"}
            Papyrus
            {"\n\n"}
            Irmão otimista de Sans, aspirante a herói da Guarda Real, conhecido por sua bondade e entusiasmo. Mesmo na rota Genocida, Papyrus tenta acreditar na bondade do jogador. No entanto, sua ingenuidade não o salva, e ele é rapidamente derrotado
            {"\n\n"}
            Undyne
            {"\n\n"}
            Guerreira feroz e chefe da Guarda Real, inicialmente inimiga, mas valoriza a justiça e pode se tornar uma aliada leal.
            {"\n\n"}
            Undyne, a Imortal
            {"\n\n"}
            Undyne se transforma em "Undyne, a Imortal", uma versão extremamente determinada e poderosa de si mesma. Ela é impulsionada pelo desejo de proteger o Subterrâneo, tornando-se um dos oponentes mais difíceis do jogo.
            {"\n\n"}
            Alphays
            {"\n\n"}
            Cientista tímida e nervosa, criadora dos "Amalgamates", apaixonada por animes e carrega um profundo sentimento de culpa. Embora menos presente diretamente, sente o caos e a destruição causados pelo jogador. Ela é uma vítima colateral dos eventos devastadores.
            {"\n\n"}
            Mettaton/Mettaton Neo
            {"\n\n"}
            Mettaton, que em outras rotas busca fama e glamour, enfrenta o jogador na forma de Mettaton NEO. Apesar de sua aparência impressionante, ele é derrotado rapidamente, mostrando a futilidade da resistência na rota Genocida.
            {"\n\n"}
            Asgore
            {"\n\n"}
            Rei do Subterrâneo, dividido entre libertar os monstros e sua natureza pacífica, em conflito com Frisk. O mesmo enfrenta o jogador com a resignação de alguém que sabe que sua morte é inevitável. Ele representa a última esperança do Subterrâneo, que é esmagada na rota Genocida.
            {"\n\n"}
            Esses personagens, que normalmente têm motivações complexas, são reduzidos a obstáculos trágicos na rota Genocida, refletindo os temas de destruição, perda e a futilidade da resistência contra um destino implacável.
            </Text>
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
          id={10}
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

export default personagensGenocida;