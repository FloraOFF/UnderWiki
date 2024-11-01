import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import Home from "./pages/home";
import rotasHistoria from "./pages/rotasHistoria";
import rotaPacifista from "./pages/rotaPacifista";
import rotaNeutra from "./pages/rotaNeutra";
import rotaGenocida from "./pages/rotaGenocida";
import personagensPacifista from "./pages/personagensPacifista";
import personagensGenocida from "./pages/personagensGenocida";
import personagensNeutra from "./pages/personagensNeutra";
import mudancasPacifista from "./pages/mudancasPacifista";
import mudancasNeutra from "./pages/mudancasNeutra";
import mudancasGenocida from "./pages/mudancasGenocida";
import curiosidadesMisterios from "./pages/curiosidadesMisterios";
import sobreAutor from "./pages/sobreAutor";
import galeriaCreditos from './pages/galeriaCreditos';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} 
        />
        <Stack.Screen 
          name="rotasHistoria" 
          component={rotasHistoria} 
        />
        <Stack.Screen 
          name="rotaNeutra" 
          component={rotaNeutra} 
        />
        <Stack.Screen 
          name="rotaGenocida" 
          component={rotaGenocida} 
        />
        <Stack.Screen 
          name="rotaPacifista" 
          component={rotaPacifista} 
        />
        <Stack.Screen 
          name="personagensPacifista" 
          component={personagensPacifista} 
        />
        <Stack.Screen 
          name="personagensNeutra" 
          component={personagensNeutra} 
        />
        <Stack.Screen 
          name="personagensGenocida" 
          component={personagensGenocida} 
        />         
        <Stack.Screen 
          name="mudancasPacifista" 
          component={mudancasPacifista} 
        /> 
        <Stack.Screen 
          name="mudancasNeutra" 
          component={mudancasNeutra} 
        />
        <Stack.Screen 
          name="mudancasGenocida" 
          component={mudancasGenocida} 
        />       
        <Stack.Screen 
          name="curiosidadesMisterios" 
          component={curiosidadesMisterios} 
        />    
        <Stack.Screen
          name="sobreAutor"
          component={sobreAutor} 
        />
        <Stack.Screen
          name="galeriaCreditos"
          component={galeriaCreditos} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
