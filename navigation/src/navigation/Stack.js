import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";
import PassoStack from "../components/PassoStack";


const Stack = createNativeStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="ScreenA"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="ScreenA"
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="ScreenB">
                    <ScreenA />
                </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen name="ScreenB">
            {props => (
                <PassoStack {...props} voltar avancar="ScreenC" avancarParams={{numero: 255}}>
                    <ScreenB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="ScreenC">
            {props => (
                <PassoStack {...props} voltar avancar="ScreenC">
                    <ScreenC {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)