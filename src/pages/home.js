// src/Page1.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = ({ navigation }) => (
  <View style={ styles.container }>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={[styles.text, styles.wiki]}>Wiki</Text>
        <Image
          source={require('../../assets/images/heartLogo.png')}
          style={styles.heartImage}
          resizeMode="contain"
        />
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('rotasHistoria')}
    >
      <Text style={[styles.text, styles.textButton]}>Prossiga com determinação</Text>
    </TouchableOpacity>

      <Text style={[styles.text, styles.wiki]}>No mundo de undertale suas escolhas importam
      </Text>
      <View style={styles.sobre}>
        <TouchableOpacity
        onPress={() => navigation.navigate('sobreAutor')} style={styles.sobreButton}>
          <Text style={styles.text}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('galeriaCreditos')} style={styles.sobreButton}>
          <Text style={styles.text}>Créditos</Text>
        </TouchableOpacity>
        <Text style={[styles.text, {fontSize: 12, padding: 5}]}>V01.01</Text>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#FF0000",
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 70,
    marginTop: 25,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: "center",
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: -55,
    marginTop: -100
  },
  heartImage: {
    width: 35,
    height: 35,
    marginBottom: 100, // Ajuste o espaço abaixo da imagem, se necessário
  },
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
  },
  textButton: {
    textAlign: "center",
    fontSize: 12
  },
  wiki: {
    textAlign: "center",
    fontSize: 10,
    marginBottom: -20,
    zIndex: 1
  },
  sobre: {
    marginTop: '6rem',
    bottom: 0,
    position: 'absolute',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  sobreButton: {
    borderStyle:'solid',
    borderColor: 'white',
    borderWidth: 1,
    textAlign: "center",
    padding: 6,
    fontSize: 2,
    width: 'fit-content'
  }
})

export default Home;