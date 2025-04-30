import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.messageRow}>
        <View style={styles.messageContent}>
          <View style={styles.header}>
            <Text style={styles.name}>Ana Souza</Text>
            <Text style={styles.time}>08:45</Text>
          </View>
          <Text style={styles.text}>Oi, tudo bem?</Text>
        </View>
      </View>
      <View style={styles.messageRow}>
        <View style={styles.messageContent}>
          <View style={styles.header}>
            <Text style={styles.name}>Carlos Lima</Text>
            <Text style={styles.time}>09:30</Text>
          </View>
          <Text style={styles.text}>Vamos marcar aquela reunião?</Text>
        </View>
      </View>
      <View style={styles.messageRow}>
        <View style={styles.messageContent}>
          <View style={styles.header}>
            <Text style={styles.name}>Mariana Santos</Text>
            <Text style={styles.time}>10:10</Text>
          </View>
          <Text style={styles.text}>Enviei o arquivo para vc.</Text>
        </View>
      </View>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  messageContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  text: {
    marginTop: 4,
  },
});
