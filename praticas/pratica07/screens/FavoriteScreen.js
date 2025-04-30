import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FavoriteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.musicBox}>
        <Text style={styles.title}>Música Favorita 1</Text>
        <Text style={styles.artist}>Artista 1</Text>
      </View>
      <View style={styles.musicBox}>
        <Text style={styles.title}>Música Favorita 2</Text>
        <Text style={styles.artist}>Artista 2</Text>
      </View>
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  musicBox: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: 'gray',
  },
});
