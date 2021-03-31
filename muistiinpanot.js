import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { ActivityIndicator } from 'react-native';
import Esiintyjat from './components/Esiintyjat';
import FirstSemiFinal from './components/FirstSemiFinal';
import SecondSemiFinal from './components/SecondSemiFinal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function App({ navigation }) {
  const Stack = createStackNavigator();
  const euro1 = require('./images/eurovisionlogo1.png');
  return(
    <View>
      <Text>Euroviisut</Text>
      <View>
        <Image
          style={{alignItems: 'center', width: 300, height: 118 }}
          source={{uri : euro1}}
          PlaceholderContent={<ActivityIndicator/>}
        />
      </View>
      <View>
        <CountDown
          style={{alignItems: 'center', paddingTop: 10}}
          until={49 * 24 * 60 * 60}
          onFinish={() => alert('finished')}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: '#1CC625'}}
          size={20}
        />
      </View>
      <View>
        <Button title="Esiintyjät" onPress= {
          () => navigation.navigate('Esiintyjat')} />
        <Button  title="Ensimmäinen semifinaali" onPress= {
          () => navigation.navigate('FirstSemiFinal')}/>
        <Button title="Toinen semifinaali" onPress= {
          () => navigation.navigate('SecondSemiFinal')} />
      </View> 
    </View>
  )
}

export default App;