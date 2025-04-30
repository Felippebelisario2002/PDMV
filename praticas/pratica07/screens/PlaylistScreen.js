import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PlaylistScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.playlistBox}>
        <Text style={styles.title}>Playlist 1</Text>
        <Text style={styles.subtitle}>10 músicas</Text>
      </View>
      <View style={styles.playlistBox}>
        <Text style={styles.title}>Playlist 2</Text>
        <Text style={styles.subtitle}>5 músicas</Text>
      </View>
      <View style={styles.playlistBox}>
        <Text style={styles.title}>Playlist 3</Text>
        <Text style={styles.subtitle}>8 músicas</Text>
      </View>
    </View>
  );
}

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  playlistBox: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});
