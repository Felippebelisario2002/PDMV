// screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
      <Text style={styles.instruction}>Navegue pelo menu lateral para acessar seu perfil.</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcyan', // Cor de fundo da tela
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'darkslategray', // Cor do título
    textAlign: 'center',
  },
  instruction: {
    fontSize: 18,
    color: 'gray', // Cor da instrução
    textAlign: 'center',
  },
});