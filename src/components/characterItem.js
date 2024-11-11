import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterItem = ({ image, name }) => (
  <View style={styles.characterContainer}>
    <View style={styles.imageWrapper}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  characterContainer: {
    alignItems: 'center',
    margin: 5,
    width: 100, // Defina uma largura fixa para o container
  },
  imageWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontFamily: 'PressStart2P',
    color: "white",
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CharacterItem;