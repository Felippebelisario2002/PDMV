import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
    .required("Confirme a senha"),
});

function SignUpScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Alert.alert("Conta criada com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Nome"
              placeholderTextColor="black"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              error={!!errors.nome}
            />
          </View>
        )}
      />
      {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputBox}>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="black"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              error={!!errors.email}
            />
          </View>
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="black"
              secureTextEntry
              style={styles.input}
              value={value}
              onChangeText={onChange}
              error={!!errors.senha}
            />
          </View>
        )}
      />
      {errors.senha && <Text style={styles.errorText}>{errors.senha.message}</Text>}

      <Controller
        control={control}
        name="confirmarSenha"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Confirme a Senha"
              placeholderTextColor="black"
              secureTextEntry
              style={styles.input}
              value={value}
              onChangeText={onChange}
              error={!!errors.confirmarSenha}
            />
          </View>
        )}
      />
      {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.link}>Voltar para o Login</Text>
      </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    width: '100%',
    marginBottom: 10,
    padding: 10,
  },
  input: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'monospace',
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
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
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