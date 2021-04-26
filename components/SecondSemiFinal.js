//Imporst
import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert} from "react-native";
import * as eurovisionData from '../eurovision2.json';
import { ListItem, Avatar} from 'react-native-elements';
import CountDown from 'react-native-countdown-component';


function SecondSemiFinal() {
//Calculating time until second semifinal for the countdown
const diff = new Date("May 20, 2021").getTime() - new Date().getTime();
const daysTillFinal = (diff / (1000)) + 75600; //Adding missing 21 hours to starting time
//Getting data from own json
const data = Object.values(eurovisionData);


//listing countries in the second semifinal
const renderItem = ({ item }) => (
    <ListItem 
      bottomDivider
      containerStyle={{backgroundColor: "#060a2f"}}>
      <Avatar source={{uri: item.flag}} height={24} width={40}/>
      <ListItem.Content >
        <ListItem.Title style={{fontFamily: 'Palatino-Bold', color: "white"}}>{item.draw}</ListItem.Title>
        <ListItem.Subtitle style={{fontFamily: 'Palatino-Bold', color: "white"}}>{item.country}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
  
return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Toisen semifinaalin alkuun:</Text>
        <CountDown
            style={{alignItems: 'center'}}
            until={daysTillFinal}
            onFinish={() => Alert.alert('2. semifinaali', 'Toinen semifinaali alkaa!')}
            onPress={() => Alert.alert('2. semifinaali!', 'Lähtölaskenta kertoo tarkalleen kuinka kauan aikaa on jäljellä Euroviisujen toiseen semifinaaliin!')}
            digitStyle={{backgroundColor: '#fffeff', borderWidth: 2, borderColor: '#fffeff'}}
            digitTxtStyle={{color: '#0251c1'}}
            timeLabelStyle={{color: "#fffeff", paddingBottom: 20}}
            size={23}
        />
      </View>  
      <Text style={styles.text}>Euroviisujen toinen semifinaali pidetään torstaina 20.05.2021 klo 21 alkaen. Tässä esittelemme toisen semifinaalin arvotun esiintymisjärjestyksen:</Text>
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

//Styles for the app
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
      fontFamily: 'Palatino-Bold',
      paddingBottom: 10
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
export default SecondSemiFinal;