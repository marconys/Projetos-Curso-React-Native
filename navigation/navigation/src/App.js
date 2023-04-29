import React from "react";
import { SafeAreaView, Text } from "react-native";
import TextCenter from "./components/TextCenter";
import ScreenA from "./views/ScreenA";
import ScreenB from "./views/ScreenB";
import ScreenC from "./views/ScreenC";

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <ScreenA/>
        <ScreenB/>
        <ScreenC/>
    </SafeAreaView>
)