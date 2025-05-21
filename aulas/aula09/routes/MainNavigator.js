import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";

const Tab = createBottomTabNavigator();

function MainNavigator(){
    return <Tab.Navigator>
        <Tab.Screen name="Home"component={Home}/>
        <Tab.Screen name="Busca"component={SearchNavigator}/>
    </Tab.Navigator>
}

export default MainNavigator;