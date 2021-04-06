import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert} from "react-native";

function Suosikit() {



  
return(
    <View style={styles.container}>
      <Text style={styles.text}>Suosikit</Text>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#060a2f',
      fontFamily: 'Palatino-Bold'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#fffeff',
        fontFamily: 'Palatino-Bold',
        paddingTop: 20
    },
    text: {
      color:"white", 
      textAlign:"center", 
      fontSize: 16,
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
    },
    listcontainer: {
      flex: 4
    }
  });
export default Suosikit;