import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import NavigationHandle from './navigationHandle';

const RedirectImage = ({ navigation, imageSource, id, text }) => {
  const handlePress = () => {
    NavigationHandle(navigation, id);
  } 
  
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={0.7}>
      <Image source={imageSource} style={styles.image} resizeMode="stretch" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,  
    height: 350,
    margin: 10,
    borderRadius: 10, // Bordas arredondadas 
    overflow: 'hidden', // Garante que a imagem não ultrapasse os limites do container
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
    zIndex: 1,
    textAlign: "center"
  },
  textContainer: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opacidade de fundo para melhor leitura do texto
    padding: 10,
    alignItems: 'center',
  }
});

export default RedirectImage;
