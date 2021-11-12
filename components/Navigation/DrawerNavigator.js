import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnboardingScreen from "../Organism/OnboardingScreen";
import ContactScreen from "../Organism/ContactScreen";
import ActivityScreen from "../Organism/ActivityScreen";


const DrawerNavigator = () => {


    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Activity" component={ActivityScreen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;