import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import * as Yup from "yup";


function RecuperarSenha() {
    const schema = Yup.object(). shape ({
      email: Yup.string().required("E-mail é obrigatorio").email("E-mail é invalido")
    });
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");


    const validaEmail = async () => {
      try {
        await schema.validate({ email });
        setErro("");
        return true;
      } catch(err) {
        setErro(err.errors);
        return false;
      }
       // if (!email) {
            //setErro("E-mail é obrigatório");
            //return false;
        //}
        //if (!email.includes("@")) {
            //setErro("E-mail inválido");
            //return false;
        //}
        //setErro("");
        //return true;
    }
    const trataDigitar = async (text) => {
        setEmail(text);
        await validaEmail();
    }


    const trateEnviar = async () => {
        if (! await validaEmail()){
            return;
        }
       
        setEmail("");
        alert("E-mail enviado");
    }


  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="E-mail"
        mode="outlined"
        value={email}
        onChangeText={trataDigitar}
        keyboardType="email-address"
        autoCapitalize="none"
        error={erro}
      />
      <HelperText type="error" visible={erro}>
        {erro}
      </HelperText>
      <Button mode="contained" onPress={trateEnviar}>
        Enviar
      </Button>
    </View>
  );
}


export default RecuperarSenha;
