import React from 'react';
import { View, Button, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ButtonRoute from '../components/buttonsRotas';

const sobreAutor = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>SOBRE</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/cropped_image.png')}
          style={styles.image}
        />
      </View>
      <Text style={[styles.text, styles.centeredText]}>
        Howdy! Meu nome é Flora :3 {"\n\n"}
        Tenho 20 anos e sou formanda do curso de Sistemas para Internet pelo IFAC. Também sou técnica em Redes de Computadores e atuo como programadora web full-stack, formada pelo projeto Web Academy em parceria com a UFAC e Motorola.
      </Text>
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
});

export default sobreAutor;
