import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactScreen from "../Organism/ContactScreen";
import Chat from "../Organism/Chat";
import Dialer from "../Organism/Dialer";
import ActivityScreen from "../Organism/ActivityScreen";



const DrawerNavigator = () => {


    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={ActivityScreen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Dialer" component={Dialer} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;