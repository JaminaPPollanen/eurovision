//Imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, KeyboardAvoidingView, Alert, Text , Button} from 'react-native';
import * as SQLite from 'expo-sqlite';
import {ListItem, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { StepLabel } from '@material-ui/core';

//creating database for eurovision
const db = SQLite.openDatabase("eurovisiondb.db")

function Suosikit() {

//Creating variables 
const [favorites, setFavorites] = useState([]);
const [country, setCountry] = useState("");
const [points, setPoints] = useState(0);

//useEffect is activated when the page is used at the begin
//Creates or downloads the database
useEffect(() => {
  db.transaction(tx => {
    tx.executeSql('create table if not exists favorites (id integer primary key not null, country text, points integer);');
  }, null, updateFavorites);
}, []);
 
//When called, updates database
const updateFavorites = () => {
  db.transaction(tx => {
    tx.executeSql('select * from favorites;', [], (_, { rows }) =>
    setFavorites(rows._array)
    );
  })
}

//Saves added favorite to database
const saveFavorite = () => {
  db.transaction(tx => {
    tx.executeSql('insert into favorites(country, points) values(?,?);',
    [country, points]);
  }, null, updateFavorites
  )
  //set inputs to empty
  setCountry("");
  setPoints(0);
}

//Deletes favorite when confirmed
const deleteFavorite = (id) => {
  db.transaction(tx => {
    tx.executeSql('delete from favorites where id = ?;', [id]);
  }, null, updateFavorites)
}


//renderItem downloads from database all the saved favorites
const renderItem = ({ item }) => (
  <ListItem
    bottomDivider
    containerStyle={{backgroundColor: "#060a2f"}}
    //By long press the app confirms if user is sure about delete, if so favorite is deleted from database
    onPress={() => Alert.alert("Suosikin poisto", "Haluatko varmasti poistaa suosikin?", 
      [
        {
          text: "Poista",
          onPress: () => deleteFavorite(item.id)
        },
        {
          text: "Peruuta"
        }
      ])}>
    <ListItem.Content>
      <ListItem.Title style={{fontFamily: 'Palatino-Bold', color: "white"}}>Maa: {item.country}</ListItem.Title>
      <ListItem.Subtitle style={{fontFamily: 'Palatino-Bold', color: "white"}}>Pisteet: {item.points}</ListItem.Subtitle>
    </ListItem.Content>
    <Icon name="delete" color="red" size={22}/>
  </ListItem>
)
  
return(
  <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    keyboardVerticalOffset={-150}>
    <View style={styles.container}>
      <Text style={styles.title}>Omat suosikkisi</Text>
      <Input style={styles.textinput}
      placeholder="Maa" onChangeText={country => setCountry(country)}
      value={country}/>
      <Input style={styles.textinput}
      placeholder="Pisteet" onChangeText={points => setPoints(points)}
      value={points}/>
        <View style={styles.btnstyle}>
          <Button 
              color="#fffeff"
              fontFamily= 'Palatino-Bold'
              title="Lisää suosikkisi"
              onPress={saveFavorite}
          />
        </View>
      <View style={styles.listcontainer}>
        <FlatList
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        data={favorites}/>
      </View>
    </View>
  </KeyboardAvoidingView>
)
}

//Styles for the app
const styles = StyleSheet.create({
    container: {
      flex: 2,
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
      borderColor: '#fffeff',   
      borderWidth: 2, 
      borderRadius: 8,  
      marginBottom: 5, 
      fontSize: 17, 
      backgroundColor: '#060a2f',
      fontFamily: 'Palatino-Bold'
  },
    textinput: {
      paddingTop: 15,
      fontSize: 18,
      fontFamily: 'Palatino-Bold',
      color: "#fffeff"
    },
    listcontainer: {
      flex: 3,
      paddingBottom: 1
    }
  });
export default Suosikit;