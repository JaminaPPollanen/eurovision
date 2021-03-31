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
                    digitStyle={{backgroundColor: '#fffeff'}}
                    digitTxtStyle={{color: '#f00d0d'}}
                    size={25}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.btnstyle}>
                    <Button 
                        color="black"
                        title="Esiintyjät"
                        onPress={() => navigation.navigate('Esiintyjat')}
                    />
                </View>
                <View style={styles.btnstyle}>
                    <Button
                        color="black"
                        title="Ensimmäinen semifinaali"
                        onPress={() => navigation.navigate('FirstSemiFinal')}
                    />
                </View>
                <View style={styles.btnstyle}>
                    <Button
                        color="black"
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
      backgroundColor: '#272d51',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#fffeff'
    },
    btnstyle: {
        height: 40, 
        width: "90%", 
        borderColor: '#1c3c54',   
        borderWidth: 2, 
        borderRadius: 20,  
        marginBottom: 20, 
        fontSize: 18, 
        backgroundColor: '#dccfd2' }
      
  });
export default Index;