import React, { useState, useEffect } from 'react';
import Routes from "./src/routes";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = () => Font.loadAsync({
  'PressStart2P': require('./assets/fontes/PressStart2P-Regular.ttf'),
});

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
      return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)}     onError={console.warn} />;
    }
  return <Routes />;
}
