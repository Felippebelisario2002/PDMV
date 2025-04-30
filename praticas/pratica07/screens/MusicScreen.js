import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MusicScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.musicBox}>
        <Text style={styles.title}>Música 1</Text>
        <Text style={styles.artist}>Artista 1</Text>
      </View>
      <View style={styles.musicBox}>
        <Text style={styles.title}>Música 2</Text>
        <Text style={styles.artist}>Artista 2</Text>
      </View>
      <View style={styles.musicBox}>
        <Text style={styles.title}>Música 3</Text>
        <Text style={styles.artist}>Artista 3</Text>
      </View>
      <View style={styles.musicBox}>
        <Text style={styles.title}>Música 4</Text>
        <Text style={styles.artist}>Artista 4</Text>
      </View>
    </View>
  );
}

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 20,
    justifyContent: 'center',
  },
  musicBox: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  artist: {
    fontSize: 16,
    color: 'black',
  },
});
