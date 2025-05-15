import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    Alert.alert("Login realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      {/* EMAIL */}
      <View style={styles.inputBox}>
        <Controller
          control={control}
          name="email"
          rules={{ required: "E-mail é obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="black"
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {/* SENHA */}
      <View style={styles.inputBox}>
        <Controller
          control={control}
          name="senha"
          rules={{
            required: "Senha é obrigatória",
            minLength: {
              value: 6,
              message: "Senha deve ter no mínimo 6 caracteres",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Senha"
              placeholderTextColor="black"
              secureTextEntry
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>
      {errors.senha && <Text style={styles.errorText}>{errors.senha.message}</Text>}

      {/* BOTÃO */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.link}>Esqueceu sua senha? Recuperar senha</Text>
        <Text style={styles.link}>Criar Conta</Text>
      </View>
    </View>
  );
}

export default LoginScreen;

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
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'monospace',
    alignSelf: 'flex-start',
    marginTop: -5,
    marginBottom: 10,
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
    marginVertical: 4,
    color: 'gray',
  },
});
