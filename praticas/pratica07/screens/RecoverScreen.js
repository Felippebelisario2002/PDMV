import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function RecoverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Campo de E-mail */}
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Botão Recuperar Senha */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Recuperar Senha</Text>
      </TouchableOpacity>

      {/* Link para voltar ao Login */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RecoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backText: {
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
