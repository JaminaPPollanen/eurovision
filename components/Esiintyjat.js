import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet} from "react-native";
import * as eurovisionData from '../esiintyjat.json';
import { ListItem, Avatar} from 'react-native-elements';


function Esiintyjat() {

const data = Object.values(eurovisionData);

const renderItem = ({ item }) => (
    <ListItem 
      bottomDivider
      containerStyle={{backgroundColor: "#060a2f"}}>
      <Avatar source={{uri: item.flag}} height={24} width={40}/>
      <ListItem.Content >
        <ListItem.Title style={{fontFamily: 'Palatino-Bold', color: "white", fontSize: 20}}>{item.country}</ListItem.Title>
        <ListItem.Subtitle style={{fontFamily: 'Palatino-Bold', color: "white"}}>Esiintyjä: {item.artist}</ListItem.Subtitle>
        <ListItem.Subtitle style={{fontFamily: 'Palatino-Bold', color: "white"}}>Laulu: {item.song}</ListItem.Subtitle>
        <ListItem.Subtitle style={{fontFamily: 'Palatino-Bold', color: "white"}}>Semifinaali: {item.semifinal}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
  
return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Esiintyjät:</Text>
      </View>  
       <View style={styles.listcontainer}>
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
export default Esiintyjat;