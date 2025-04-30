// screens/CallScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CallScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.callBox}>
        <View style={styles.row}>
          <Text style={styles.name}>Campos Sales</Text>
          <Text style={styles.icon}>📞</Text>
        </View>
        <Text style={styles.date}>28/02/2024 12:03</Text>
      </View>
      <View style={styles.callBox}>
        <View style={styles.row}>
          <Text style={styles.name}>Rui Barbosa</Text>
          <Text style={styles.icon}>📞</Text>
        </View>
        <Text style={styles.date}>04/12/2023 21:10</Text>
      </View>
    </View>
  );
}

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',       
    padding: 16,
  },
  callBox: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',       
    paddingVertical: 12,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',                 
  },
  icon: {
    color: 'darkred',               
  },
  date: {
    fontSize: 14,
    color: 'gray',                  
    marginTop: 4,
  },
});
