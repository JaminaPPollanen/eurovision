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
                    onFinish={() => alert('Finaali alkaa!')}
                    onPress={() => alert('Lähtölaskenta kertoo tarkalleen kuinka kauan aikaa on jäljellä Euroviisujen finaaliin!')}
                    digitStyle={{backgroundColor: '#fffeff', borderWidth: 2, borderColor: '#fffeff'}}
                    digitTxtStyle={{color: '#0251c1'}}
                    timeLabelStyle={{color: "#fffeff", fontFamily: 'Palatino-Bold'}}
                    size={25}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.btnstyle}>
                    <Button 
                        color="#f00d0d"
                        fontFamily= 'Palatino-Bold'
                        title="  Esiintyjät                              "
                        onPress={() => navigation.navigate('Esiintyjat')}
                    />
                </View>
                <View style={styles.btnstyle}>
                    <Button
                        color="#f00d0d"
                        title="Ensimmäinen semifinaali     "
                        onPress={() => navigation.navigate('FirstSemiFinal')}
                    />
                </View>
                <View style={styles.btnstyle}>
                    <Button
                        fontFamily= 'Palatino-Bold'
                        color="#f00d0d"      
                        title="Toinen semifinaali                "
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
      backgroundColor: '#060a2f',
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
        borderColor: '#070505',   
        borderWidth: 1, 
        borderRadius: 8,  
        marginBottom: 10, 
        fontSize: 17, 
        backgroundColor: '#fffeff',
        fontFamily: 'Palatino-Bold'
    }
  });
export default Index;