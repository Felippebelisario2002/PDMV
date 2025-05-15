import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from 'yup';


function CriarConta() {
const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatorio"),
  email: Yup.string().required("E-mail é obrigatorio").email("E-meial é invalido"),
  senha: Yup.string().required("Senha é obrigatorio").min(8, "Deve ter 8 caracteres"),
  confirmaSenha: Yup.string().oneOf([Yup.ref("senha"), ""], "Senhas distintas"),
});


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver});


  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="nome"
        render={({ field: { value, onchange, onBlur } }) => (
          <TextInput
            label="Nome"
            autoCapitalize="words"
            mode="outlined"
            value={value}
            onChangeText={onchange}
            onBlur={onBlur}
            error={errors.nome}
          />
        )}
      />
      <HelperText type="error" visible={errors.nome}>
        {errors.nome?.message}
      </HelperText>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onchange } }) => (
          <TextInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            value={value}
            onChangeText={onchange}
            error={errors.email}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email?.message}
      </HelperText>
      <Controller
        control={control}
        name="senha"
        render={({ field: { value, onchange } }) => (
          <TextInput
            label="Senha"
            secureTextEntry
            mode="outlined"
            value={value}
            onChangeText={onchange}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha?.message}
      </HelperText>
      <Controller
        control={control}
        name="confirmaSenha"
        render={({ field: { value, onchange } }) => (
          <TextInput
            label="Confirmar senha"
            secureTextEntry
            mode="outlined"
            value={value}
            onChangeText={onchange}
            error={errors.confirmaSenha}
          />
        )}
      />
      <HelperText type="error" visible={errors.confirmaSenha}>
        {errors.confirmaSenha?.message}
      </HelperText>
      <Button
        style={{ marginBottom: 16 }}
        mode="contained"
        onPress={handleSubmit(() => alert("ok"))}>
        Criar
      </Button>
    </View>
  );
}


export default CriarConta;
