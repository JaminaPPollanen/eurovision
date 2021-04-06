import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, KeyboardAvoidingView, Alert, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Button, ListItem, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const db = SQLite.openDatabase("eurovisiondb.db")

function Suosikit() {
const [favorites, setFavorites] = useState([]);
const [country, setCountry] = useState("");
const [points, setPoints] = useState("");

useEffect(() => {
  db.transaction(tx => {
    tx.executeSql('create table if not exists favorites (id integer primary key not null, country text, points integer);');
  }, null, updateFavorites);
}, []);
 
const updateFavorites = () => {
  db.transaction(tx => {
    tx.executeSql('select * from favorites;', [], (_, { rows }) =>
    setFavorites(rows._array)
    );
  })
}
const saveFavorite = () => {
  db.transaction(tx => {
    tx.executeSql('insert into favorites(country, points) values(?,?);',
    [country, points]);
  }, null, updateFavorites
  )
}
const deleteFavorite = (id) => {
  db.transaction(tx => {
    tx.executeSql('delete from favorites where id = ?;', [id]);
  }, null, updateFavorites)
}

const renderItem = ({ item }) => (
  <ListItem
    bottomDivider
    containerStyle={{backgroundColor: "#060a2f"}}
    onLongPress={() => Alert.alert("Suosikin poisto", "Haluatko varmasti poistaa suosikin?", 
      [
        {
          text: "Kyllä",
          onPress: () => deleteFavorite(item.id)
        },
        {
          text: "Peruuta",
          onPress: () => console.log("Peruuta painettiin")
        }
      ])}>
    <ListItem.Content>
      <ListItem.Title style={{fontFamily: 'Palatino-Bold', color: "white"}}>{item.country}</ListItem.Title>
      <ListItem.Subtitle style={{fontFamily: 'Palatino-Bold', color: "white"}}>{item.points}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron name="delete" size={30}/>
  </ListItem>
)
  
return(
  <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    keyboardVerticalOffset={-150}>
    <View style={styles.container}>
      <Text style={styles.text}>Suosikit</Text>
      <Input style={styles.textinput}
      placeholder="Maa" label="Maa" onChangeText={country => setCountry(country)}
      value={country}/>
      <Input style={styles.textinput}
      placeholder="Pisteet" label="Pisteet" onChangeText={points => setPoints(points)}
      value={points}/>
      <Button 
        icon={<Icon
        name="save"
        size={22}
        color="white"
        />}
        onPress={saveFavorite} title="Lisää suosikki"/>
      <View>
        <FlatList
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        data={favorites}/>
      </View>
    </View>
  </KeyboardAvoidingView>
)
}
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
        width: "90%", 
        borderColor: '#4C232B',   
        borderWidth: 2, 
        borderRadius: 10,  
        marginBottom: 10, 
        fontSize: 18, 
        backgroundColor: '#C9E2F3',
        fontFamily: 'Palatino-Bold'
    },
    textinput: {
      paddingTop: 15,
      fontSize: 18
    },
    listcontainer: {
      flex: 4
    }
  });
export default Suosikit;