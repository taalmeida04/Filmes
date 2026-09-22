import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "../Detalhes";
import Home from "../Home";

export default function Rotas() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>


                <Stack.Screen component={Home} name='Home' />
                <Stack.Screen component={Detalhes} name='Detalhes' />

            </Stack.Navigator>
        </NavigationContainer>
    )
};