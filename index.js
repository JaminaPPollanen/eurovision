import React, { useEffect } from 'react';
import { StyleSheet, Text, View , Image, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { ActivityIndicator } from 'react-native';

function Index({navigation}){
    
    //Calculating seconds between today and Eurovision Final 
   const diff = new Date("May 22, 2021").getTime() - new Date().getTime();
   const daysTillFinal = (diff / (1000)) + 75600; //Adding missing 21 hours to starting time

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
                    until={daysTillFinal}
                    onFinish={() => alert('Finaali alkaa!')}
                    onPress={() => alert('Lähtölaskenta kertoo tarkalleen kuinka kauan aikaa on jäljellä Euroviisujen finaaliin!')}
                    digitStyle={{backgroundColor: '#fffeff', borderWidth: 2, borderColor: '#4C232B'}}
                    digitTxtStyle={{color: '#195F97'}}
                    size={25}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.btnstyle}>
                    <Button 
                        color="#4C232B"
                        fontFamily= 'Palatino-Bold'
                        title="Esiintyjät"
                        onPress={() => navigation.navigate('Esiintyjat')}
                    />
                </View>
                <View style={styles.btnstyle}>
                    <Button
                        color="#4C232B"
                        title="Ensimmäinen semifinaali"
                        onPress={() => navigation.navigate('FirstSemiFinal')}
                    />
                </View>
                <View style={styles.btnstyle}>
                    <Button
                        color="#4C232B"
                        title="Toinen semifinaali"
                        onPress={() => navigation.navigate('SecondSemiFinal')}
                    />
                </View>
            </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#729FBE',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Palatino-Bold'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#fffeff',
        fontFamily: 'Palatino-Bold'
    },
    btnstyle: {
        height: 40, 
        width: "90%", 
        borderColor: '#4C232B',   
        borderWidth: 2, 
        borderRadius: 10,  
        marginBottom: 10, 
        fontSize: 18, 
        backgroundColor: '#C9E2F3',
        fontFamily: 'Palatino-Bold'
    }
  });
export default Index;