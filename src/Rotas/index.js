import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "../../../Telas/Detalhes";

export default function Rotas() {
    const Stack = createStackNavigator
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen component={Detalhes} name='Detalhes' />

            </Stack.Navigator>
        </NavigationContainer>
    )
};