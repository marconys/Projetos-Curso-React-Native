import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";


const Drawer = createDrawerNavigator();

export default props => (
    <Drawer.Navigator>
        <Drawer.Screen name="ScreenA" component={ScreenA}/>
        <Drawer.Screen name="ScreenB" component={ScreenB}/>
        <Drawer.Screen name="ScreenC" component={ScreenC}/>
    </Drawer.Navigator>
)