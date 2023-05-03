import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";


const Tab = createBottomTabNavigator();

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTinColor: 'red',
        inactiveTinColor: 'blue',
        labelStyle:{fontSize: 30}
        

    }}>
        <Tab.Screen name="ScreenA" component={ScreenA}/>
        <Tab.Screen name="ScreenB" component={ScreenB}/>
        <Tab.Screen name="ScreenC" component={ScreenC}/>
    </Tab.Navigator>
)