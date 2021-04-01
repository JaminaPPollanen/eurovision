import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet} from "react-native";
import * as eurovisionData from '../eurovision.json';
import { ListItem} from 'react-native-elements';


function FirstSemiFinal() {

const data = eurovisionData;

console.log(data);

const renderItem = ({ item }) => (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{item.country}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron/>
    </ListItem>
  )
  
return(
    <View style={styles.container}>
        <Text>Tämä on ensimmäisen semifinaalin esiintyjien esiintymisjärjestys</Text>
            <View style={styles.container}>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index ) => index.toString()}
                />
            </View>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#729FBE',
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
export default FirstSemiFinal;