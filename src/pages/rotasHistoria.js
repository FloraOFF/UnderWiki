// src/Page2.js

import React from 'react';
import { View, Button, Text, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView  } from 'react-native';
import RedirectImage from "../components/rotasNav";
import ButtonRoute from '../components/buttonsRotas';

const rotasHistoria = ({ navigation }) => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.content}>
        <Text style={[styles.text, {marginTop: 30}]}>Rotas</Text>
        <Text style={[styles.text, {margin: 20}]}>Escolha uma rota para prosseguir!</Text>
        <View style={styles.rotas}>
          <RedirectImage
            navigation={navigation}
            imageSource={require('../../assets/images/pacifista.png')}
            id={1}
            text="Pacifista"
          />
          <RedirectImage
            navigation={navigation}
            imageSource={require('../../assets/images/neutra.png')}
            id={2}
            text="Neutra"
          />
          <RedirectImage
            navigation={navigation}
            imageSource={require('../../assets/images/genocida.png')}
            id={3}
            text="Genocida"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonRoute
          navigation={navigation}
          id={0}
          text="Voltar"
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1, 
    justifyContent: 'space-between', 
  },
  rotas: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  footer: {
    margin: 20,
    alignItems: 'center', // Center the button horizontally
  },

})

export default rotasHistoria;