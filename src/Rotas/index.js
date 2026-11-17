import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Detalhes from "../Detalhes";
import Home from "../Home";

const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyle: {
                        flex: 1,
                        minHeight: 0,
                    },
                }}
            >

                <Stack.Screen
                    component={Home}
                    name="Home"
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    component={Detalhes}
                    name="Detalhes"
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}