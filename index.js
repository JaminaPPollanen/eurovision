import React from 'react';
import { StyleSheet, Text, View , Image, Button, Alert } from 'react-native';
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
                style={{alignItems: 'center', width: 300, height: 116 }}
                source={require('./images/valkoinenlogo.png')}
                PlaceholderContent={<ActivityIndicator/>}
            />
        </View>
        <View>
            <Text style={styles.title}>Finaalin alkuun:</Text>
            <CountDown
                style={{alignItems: 'center'}}
                until={daysTillFinal}
                onFinish={() => Alert.alert('Euroviisut!', 'Finaali alkaa!')}
                onPress={() => Alert.alert('Euroviisut!', 'Lähtölaskenta kertoo tarkalleen kuinka kauan aikaa on jäljellä Euroviisujen finaaliin!')}
                digitStyle={{backgroundColor: '#fffeff', borderWidth: 2, borderColor: '#fffeff'}}
                digitTxtStyle={{color: '#0251c1'}}
                timeLabelStyle={{color: "#fffeff", fontFamily: 'Palatino-Bold'}}
                size={26}
            />
        </View>
        <View style={styles.container}>
            <View style={styles.btnstyle}>
                <Button 
                    color="#fffeff"  
                    fontFamily= 'Palatino-Bold'
                    title="  Esiintyjät                              "
                    onPress={() => navigation.navigate('Esiintyjat')}
                />
            </View>
            <View style={styles.btnstyle}>
                <Button
                    color="#fffeff"  
                    title="Ensimmäinen semifinaali     "
                    onPress={() => navigation.navigate('FirstSemiFinal')}
                />
            </View>
            <View style={styles.btnstyle}>
                <Button
                    fontFamily= 'Palatino-Bold'
                    color="#fffeff"      
                    title="Toinen semifinaali                "
                    onPress={() => navigation.navigate('SecondSemiFinal')}
                />
            </View>
            <View style={styles.btnstyle}>
                <Button
                    fontFamily= 'Palatino-Bold'
                    color="#fffeff"      
                    title="Omat suosikit                       "
                    onPress={() => navigation.navigate('Suosikit')}
                />
            </View>
        </View>
    </View>
    );
}

//Styles for the app
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#060a2f',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Palatino-Bold'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 5,
        fontWeight: 'bold',
        color: '#fffeff',
        fontFamily: 'Palatino-Bold'
    },
    btnstyle: {
        height: 40, 
        borderColor: '#fffeff',   
        borderWidth: 2, 
        borderRadius: 8,  
        marginBottom: 5, 
        fontSize: 17, 
        backgroundColor: '#060a2f',
        fontFamily: 'Palatino-Bold'
    }
  });
export default Index;