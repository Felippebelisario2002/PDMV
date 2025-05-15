import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  function validarEmail() {
    if (!email) {
      setErro("E-mail é obrigatório.");
    } else if (!email.includes("@")) {
      setErro("E-mail inválido.");
    } else {
      setErro("");
      Alert.alert("Instruções enviadas para o e-mail!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="black"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {erro && <Text style={styles.erroTexto}>{erro}</Text>}

      <TouchableOpacity style={styles.button} onPress={validarEmail}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.link}>Voltar para o Login</Text>
      </View>
    </View>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  inputBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    width: '100%',
    marginVertical: 10,
    padding: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
  },
  erroTexto: {
    color: 'red',
    marginTop: -5,
    marginBottom: 10,
    fontFamily: 'monospace',
  },
  button: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'black',
  },
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: 'gray',
  },
});
