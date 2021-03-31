import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function Esiintyjat() {
    return(
        <View style={styles.container}>
        <Text>Esiintyjät!</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Esiintyjat;