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
          backgroundImage={require('../../assets/images/misteriosImage.png')}
          textImage={require('../../assets/images/curiosidades_e_misterios.png')}
        />
      </View>

      <LinearGradient
        colors={['black', '#A97AE0', '#AF8CD9', '#A488D5', '#9A84D1', '#9080CD', '#867BC9', '#8079C5', '#7875ED', '#7A77C1']}
        style={styles.contentContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Alguns Exemplos</Text>
           <View style={styles.imageContainerInformation}>
              <CharacterItem
                image={require('../../assets/images/wdGaster.png')}
                name={'W D Gaster'}
              />
              <CharacterItem
                image={require('../../assets/images/temmieArm.png')}
                name={'Armadura Temmie'}
              />
              <CharacterItem
                image={require('../../assets/images/labSwnoding.png')}
                name={'Snowding'}
              />
              <CharacterItem
                image={require('../../assets/images/chara.png')}
                name={'Chara Dreemur'}
              />
              <CharacterItem
                image={require('../../assets/images/humanosMonstros.png')}
                name={'Humanos e Monstros'}
              />
          </View> 
          <Text style={[styles.text, styles.textInformation]}>
            W. D. Gaster: Ele é um personagem misterioso que parece ter sido um importante cientista no Underground, mas foi removido da linha do tempo de alguma forma. Há várias pistas espalhadas no jogo que sugerem a existência de Gaster, como diálogos enigmáticos, itens com referências a ele e até mesmo uma música que carrega seu nome. Muitos fãs especulam sobre o background de Gaster e o que pode ter acontecido com ele, mas o jogo nunca revela detalhes concretos sobre esse personagem misterioso.
            {"\n\n"}
            Armadura da Temmie: Este é um item único no jogo, obtido apenas através de um processo complexo e quase impossível de ser descoberto naturalmente. Para obter a armadura, o jogador precisa realizar uma série de ações específicas, como fazer várias compras na loja da Temmie, pagar um "imposto" alto e depois retornar à loja. Acredita-se que a armadura da Temmie tenha um poder impressionante, mas o jogo não revela detalhes sobre suas propriedades exatas. Muitos jogadores consideram a obtenção da armadura da Temmie como um dos desafios mais difíceis e recompensadores do jogo.
            {"\n\n"}
            Quebra-cabeça do Labirinto: No jogo, existe um labirinto complexo que pode ser resolvido de diversas maneiras. No entanto, há uma solução "secreta" extremamente difícil de descobrir, que envolve uma série de etapas não intuitivas. Rumores sugerem que a solução secreta do labirinto pode revelar informações sobre o mundo de Undertale ou até mesmo desbloquear um final oculto. Muitos jogadores dedicam horas tentando decifrar esse intrincado quebra-cabeça, tornando-o um dos mistérios mais desafiadores do jogo.
            {"\n\n"}
            Irmãos Snowdrake: Em uma das áreas do jogo, é possível encontrar dois Snowdrakes - uma mãe e seu filho. No entanto, existem pistas sutis que sugerem que esses Snowdrakes podem estar ligados a algum evento trágico do passado. Alguns fãs teorizam que há uma história sombria envolvendo esses personagens, talvez até mesmo relacionada às origens do personagem principal. Infelizmente, o jogo nunca revela detalhes concretos sobre a conexão entre esses Snowdrakes, deixando os jogadores com muitas perguntas.
            {"\n\n"}
            O Significado do Nome "Undertale": O título do jogo, "Undertale", é um nome carregado de significado e simbolismo. Muitos fãs especulam sobre o significado oculto por trás desse título, sugerindo que ele pode se referir a algo mais profundo sobre a narrativa ou a natureza do mundo de Undertale. Algumas teorias apontam que o nome pode estar relacionado à jornada do personagem principal, às raízes do mundo subterrâneo ou até mesmo a uma "história por baixo da história" que o jogador precisa desvendar. O significado exato do nome "Undertale" continua sendo um mistério que os jogadores buscam desvendar.
            {"\n\n"}
            A Origem dos Monstros: A história do mundo de Undertale envolve a divisão entre humanos e monstros, mas os detalhes sobre a origem e a natureza dos monstros permanecem obscuros. Há pistas espalhadas pelo jogo que sugerem que os monstros podem ter uma conexão profunda com a magia e as almas, mas pouco se sabe sobre suas origens exatas. Muitos fãs especulam sobre se os monstros sempre existiram no Underground ou se eles foram criados de alguma forma, levantando diversas teorias sobre suas raízes. Desvendar a verdadeira origem dos monstros é um dos grandes mistérios que intrigam a comunidade de Undertale.
            {"\n\n"}
            O Destino de Chara: Chara é um personagem enigmático no jogo, que parece ter uma conexão importante com o protagonista. Ao longo da narrativa, existem pistas sobre o passado sombrio e as motivações de Chara, mas muitos de seus detalhes permanecem ambíguos. Há diferentes interpretações sobre o papel de Chara na história, com algumas teorias sugerindo que eles podem ser um antagonista, uma vítima ou até mesmo uma entidade mais complexa. O verdadeiro destino e a natureza de Chara continuam sendo um ponto de intenso debate e especulação entre os fãs de Undertale.
            {"\n\n"}
            A Natureza da Linha do Tempo: O jogo revela que o mundo de Undertale pode ser afetado por manipulações na linha do tempo, com o protagonista sendo capaz de retroceder e alterar eventos. No entanto, os detalhes sobre a natureza exata dessa linha do tempo, suas regras e limites, permanecem obscuros. Há teorias que sugerem que a linha do tempo pode ser influenciada por forças misteriosas ou até mesmo por entidades conscientes fora do controle do jogador. Entender plenamente a natureza dessa mecânica da linha do tempo é outro dos grandes enigmas que fascinam os jogadores de Undertale.
            {"\n\n"}
            Essas são apenas algumas das muitas curiosidades e mistérios envolvendo o rico universo de Undertale. O jogo é repleto de elementos enigmáticos e profundos que instigam a imaginação e a análise da comunidade de fãs.
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.buttonView}>
        <ButtonRoute
          navigation={navigation}
          id={0}
          text="inicio"
        />
        <ButtonRoute
          navigation={navigation}
          id={7}
          text="Ver rotas"
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
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Borda com efeito de "vidro"
    borderRadius: 2,
    backgroundColor: "#683CA0",
    padding: 10,
    marginTop: 15,
    marginHorizontal: 2,
    textAlign: 'center',
    lineHeight: 20
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  imageContainerInformation: {
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Borda com efeito de "vidro"
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 30,
    backgroundColor: "#6F54BD",
  },
  sectionTitle: {
    fontFamily: 'PressStart2P',
    color: "white",
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: "transparent",
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