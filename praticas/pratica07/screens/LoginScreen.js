import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotText}>
          Esqueceu sua senha? Recuperar senha
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotText: {
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
