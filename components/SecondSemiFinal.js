import React from 'react';
import { View, Text, FlatList, StyleSheet} from "react-native";
import * as eurovisionData from '../eurovision.json';

export default function SecondSemiFinal() {
    
    const data = eurovisionData;

    console.log(data[11].country);
    return(
        <View style={styles.container}> 
            <Text>Tämä on toisen semifinaalin esiintyjien esiintymisjärjestys</Text>
        </View>
    )
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