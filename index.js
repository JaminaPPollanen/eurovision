import React from 'react';
import { StyleSheet, Text, View, Button , Image } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { ActivityIndicator } from 'react-native';

function Index({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image
                    style={{alignItems: 'center', width: 300, height: 118 }}
                    source={require('./images/eurovisionlogo1.png')}
                    PlaceholderContent={<ActivityIndicator/>}
                />
            </View>
            <View>
                <Text style={styles.title}>Finaalin alkuun:</Text>
                <CountDown
                    style={{alignItems: 'center'}}
                    until={49 * 24 * 60 * 60}
                    digitStyle={{backgroundColor: '#145c9c'}}
                    digitTxtStyle={{color: '#f00d0d'}}
                    size={25}
                />
            </View>
            <View style={styles.container}>
                <Button
                    title="Esiintyjät"
                    onPress={() => navigation.navigate('Esiintyjat')}
                />
                <Button
                    title="Ensimmäinen semifinaali"
                    onPress={() => navigation.navigate('FirstSemiFinal')}
                />
                <Button
                    title="Toinen semifinaali"
                    onPress={() => navigation.navigate('SecondSemiFinal')}
                />
            </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#73a0c1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    button: {
        
    }
  });
export default Index;