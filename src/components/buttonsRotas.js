import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavigationHandle from './navigationHandle';

const ButtonRoute = ({ navigation, id, text }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handlePress = () => {
    NavigationHandle(navigation, id);
  };

  return (
    <TouchableOpacity       
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      style={[
        styles.container,
        isPressed && styles.containerPressed,
      ]} activeOpacity={0.7}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,  // Largura fixa, você pode ajustar conforme necessário
    height: 80, // Altura fixa, você pode ajustar conforme necessário
    margin: 10, // Bordas arredondadas 
    overflow: 'hidden', // Garante que a imagem não ultrapasse os limites do container
    borderColor: '#F48E16',
    borderStyle: 'solid',
    borderWidth: 4,
    padding: 10,
    justifyContent: 'center',  // Centraliza o texto verticalmente
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
    zIndex: 1,
    textAlign: "center"
  },
  containerPressed: {
    borderColor: '#ECF01D', // Cor da borda alterada quando pressionado
  }
});

export default ButtonRoute;
