import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet} from "react-native";
import * as eurovisionData from '../eurovision.json';

export default function FirstSemiFinal() {

const data = eurovisionData;

console.log(data[3].country);

    return(
        <View style={styles.container}>
            <Text>Tämä on ensimmäisen semifinaalin esiintyjien esiintymisjärjestys</Text>
                <View style={styles.listcontainer}>
                    <FlatList
                    renderItem={({item}) => 
                    <Text>{item.country}</Text>}
                    keyExtractor={item => item.id}
                    data={data}
                    />
                </View>
        </View>
    )
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
    listcontainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      color: "red"
    }
  });