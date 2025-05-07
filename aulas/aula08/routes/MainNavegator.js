import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import RecuperarSenha from "../screens/RecuperarSenha";
import CriarConta from "../screens/CriarConta";

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName="Recuperar Senha">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Criar Conta" component={CriarConta} />
            <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
        </Stack.Navigator>
    );
}

export default MainNavigator;