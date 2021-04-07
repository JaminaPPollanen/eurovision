//Imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index';
import Esiintyjat from './components/Esiintyjat';
import FirstSemiFinal from './components/FirstSemiFinal';
import SecondSemiFinal from './components/SecondSemiFinal';
import Suosikit from './components/Suosikit';

//Creating navigation between pages
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Euroviisut" component={Index} />
        <Stack.Screen name="Esiintyjat" component={Esiintyjat} />
        <Stack.Screen name="FirstSemiFinal" component={FirstSemiFinal} />
        <Stack.Screen name="SecondSemiFinal" component={SecondSemiFinal} />
        <Stack.Screen name="Suosikit" component={Suosikit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

