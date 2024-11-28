import React from 'react';
import { View, Linking, Button, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ButtonRoute from '../components/buttonsRotas';
import { FontAwesome } from "@expo/vector-icons"; // Importa a biblioteca de ícones

const sobreAutor = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>SOBRE</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/autor-photoaidcom-cropped.png')}
          style={styles.image}
        />
      </View>
      <Text style={[styles.text, styles.centeredText]}>
        Howdy! Meu nome é Flora :3 {"\n\n"}
        Tenho 20 anos e sou formanda do curso de Sistemas para Internet pelo IFAC. Também sou técnica em Redes de Computadores e atuo como programadora web full-stack, formada pelo projeto Web Academy em parceria com a UFAC e Motorola.

        Caso queira conhecer meu trabalho, aqui está meu GitHub e LinkedIn: 
      </Text>
        <View style={styles.containerIcons}>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/FloraOFF/")}>
            <FontAwesome name="github" size={40} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/flora-frança-827030266/")}>
            <FontAwesome name="linkedin" size={40} color="#0A66C2" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/cropped_image.png')}
            style={styles.image}
          />
        </View>
      <ButtonRoute
        navigation={navigation}
        id={0}
        text="Início"
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  centeredText: {
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 14,
    borderColor: 'white',
    borderWidth: 5,
    lineHeight: 20,
    padding: 10
  },
  scrollViewContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
  },
  icon: {
    marginHorizontal: 10,
  },
  containerIcons: {
    flexDirection: "row", // Muda para coluna para os itens ficarem empilhados
    justifyContent: "space-between", // Coloca o espaço entre os itens
    alignItems: "center", // Alinha os itens ao centro
    marginVertical: 10,
    height: 50
  }
});

export default sobreAutor;
