import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CharacterItem from '../components/characterItem';
import ButtonRoute from '../components/buttonsRotas';
import ResponsiveHeader from '../components/responsiveHandleTittle';

const personagensNeutra = ({ navigation }) => (
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
        colors={['#4a4e69', '#6c5b7b', '#c9ada7']}
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
        colors={['#4a4e69', '#6c5b7b', '#c9ada7']}
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
                image={require('../../assets/images/omegaFlowey.png')}
                name={'Omega Flowey'}
              />
          </View>  
          <Text style={[styles.text, styles.textInformation]}>
            Flowey
            {"\n\n"}
            Uma flor falante e manipuladora, revelada como Asriel, que busca poder e controla eventos no Subterrâneo.
            {"\n\n"}
            Toriel
            {"\n\n"}
            Figura maternal que protege Frisk e deseja mantê-lo longe de Asgore, lutando entre o dever e o amor. Na rota Neutra, o destino de Toriel varia dependendo das escolhas de Frisk, mas seu papel como protetora e guia inicial é sempre significativo.
            {"\n\n"}
            Sans
            {"\n\n"}
            Sans é um esqueleto descontraído que gosta de fazer piadas, mas na rota Neutra ele observa atentamente as ações de Frisk. Ele é consciente do impacto das escolhas de Frisk e pode confrontá-lo com um discurso sério sobre o destino dos monstros e o significado das ações do jogador.
            {"\n\n"}
            Papyrus
            {"\n\n"}
            Papyrus, o irmão de Sans, é otimista e determinado a capturar um humano. Na rota Neutra, ele mantém seu espírito entusiasta e busca amizade com Frisk, mas suas interações com o jogador podem levar a diferentes desfechos, dependendo das ações tomadas.
            {"\n\n"}
            Undyne
            {"\n\n"}
            Undyne é a chefe determinada da Guarda Real que persegue Frisk com grande fervor. Na rota Neutra, sua determinação e coragem são destacadas, e sua relação com Frisk pode terminar em uma batalha feroz ou em um reconhecimento de respeito mútuo.
            {"\n\n"}
            Alphays
            {"\n\n"}
            Alphys é a cientista real do Subterrâneo, tímida e insegura. Na rota Neutra, ela se preocupa profundamente com as consequências de suas ações, especialmente em relação aos Amalgamates e sua relação com Undyne, que pode florescer ou ficar não resolvida.
            {"\n\n"}
            Mettaton
            {"\n\n"}
            Mettaton é um robô com uma grande paixão por estar no centro das atenções. Na rota Neutra, ele se transforma em Mettaton EX, uma versão glamourosa de si mesmo. Ele desafia Frisk em batalhas que são tanto shows quanto confrontos, buscando aplausos e validação.
            {"\n\n"}
            Asgore
            {"\n\n"}
            Asgore é o rei do Subterrâneo que deseja libertar os monstros, mas para isso precisa coletar almas humanas. Na rota Neutra, ele é forçado a lutar contra Frisk, com a batalha sendo marcada por uma melancolia profunda, refletindo seu pesar por ter que seguir esse caminho.
            {"\n\n"}
            Omega Flowey
            {"\n\n"}
            Flowey, na rota Neutra, assume sua forma mais poderosa como Omega Flowey (também chamado de Photoshop Flowey). Ele se torna um ser monstruoso e distorcido após absorver as seis almas humanas, enfrentando o jogador em uma batalha final cheia de caos e imprevisibilidade.
            {"\n\n"}
            Esses personagens são fundamentais para a narrativa de Undertale, explorando temas de poder, sacrifício e as consequências das escolhas, cada um com suas motivações complexas e sua importância na trama.
          </Text>
        </View>  
      </LinearGradient> 
      <View style={styles.buttonView}>
      <ButtonRoute
        navigation={navigation}
        id={2}
        text="Historia"
      />
      <ButtonRoute
        navigation={navigation}
        id={7}
        text="Ver rotas"
      />
      <ButtonRoute
        navigation={navigation}
        id={9}
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

export default personagensNeutra;