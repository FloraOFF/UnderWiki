import React from 'react';
import { FlatList, View, Text, Linking, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import references from '../components/reference';
import ButtonRoute from '../components/buttonsRotas';

const Creditos = ({navigation}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
      <Text style={[styles.link, styles.text]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/images/fonte.jpg')}
        style={styles.background}
      >
        <View style={styles.content}>
          <View style={styles.centerContent}>
            <Text style={[styles.title, styles.text]}>Galeria de Créditos</Text>
            <FlatList
              data={references}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.flatListContent}
              style={styles.list}
              scrollEnabled={true} // Habilitando o scroll
            />
            <ButtonRoute
              navigation={navigation}
              id={0}
              text="inicio"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50, // Adicionando padding para garantir espaço para scroll
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'PressStart2P',
    color: "white",
  },
  list: {
    width: '100%',
    marginBottom: 20,
    flexGrow: 0, // Isso impede que a lista ocupe todo o espaço disponível
  },
  flatListContent: {
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 8,
  }
});

export default Creditos;