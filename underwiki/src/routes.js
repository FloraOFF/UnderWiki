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

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator       
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} 
        />
        <Stack.Screen 
          name="rotasHistoria" 
          component={rotasHistoria} 
          options={
            { title: 'Rotas da História' },
            { headerStyle: 
              {
                backgroundColor: 'black',
              },
            }
          }
        />
        <Stack.Screen 
          name="rotaNeutra" 
          component={rotaNeutra} 
          options={{ title: 'Rota Neutra' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }
          }
        />
        <Stack.Screen 
          name="rotaGenocida" 
          component={rotaGenocida} 
          options={
            { title: 'Rota Genocida' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }
          }
          
        />
        <Stack.Screen 
          name="rotaPacifista" 
          component={rotaPacifista} 
          options={{ title: 'Rota Pacifista' },
            {headerStyle: {
              backgroundColor: 'black',
            },}}
        />
        <Stack.Screen 
          name="personagensPacifista" 
          component={personagensPacifista} 
          options={{ title: 'Personagens Rota Pacifista' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }}
        />
        <Stack.Screen 
          name="personagensNeutra" 
          component={personagensNeutra} 
          options={{ title: 'Personagens Rota Neutra' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }
          }
        />
        <Stack.Screen 
          name="personagensGenocida" 
          component={personagensGenocida} 
          options={{ title: 'Personagens Rota Genocida' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }}
        />         
        <Stack.Screen 
          name="mudancasPacifista" 
          component={mudancasPacifista} 
          options={{ title: 'Mudanças na Rota Pacifista' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }}
        /> 
        <Stack.Screen 
          name="mudancasNeutra" 
          component={mudancasNeutra} 
          options={{ title: 'Mudanças na Rota Neutra' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }}
        /> 
        <Stack.Screen 
          name="mudancasGenocida" 
          component={mudancasGenocida} 
          options={{ title: 'Mudanças na Rota Genocida' }, 
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }}
        />       
        <Stack.Screen 
          name="curiosidadesMisterios" 
          component={curiosidadesMisterios} 
          options={{ title: 'Curiosidades e Mistérios' },
            {headerStyle: 
              {
                backgroundColor: 'black',
              },
            }}
        />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
