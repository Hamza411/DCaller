import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../Organism/OnboardingScreen';
import ActivityScreen from '../Organism/ActivityScreen';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Navigator = () => {

    const [initialRoute, setInitialRoute] = useState(null)

    useEffect(() => {
        getState();
    }, [])

    const getState = async () => {
        try {
            const value = await AsyncStorage.getItem('Onboarding')
            if (value === "true") {
                setInitialRoute("Drawer")
            }
            else {
                setInitialRoute("Onboarding")
            }
        }
        catch (err) {
            setInitialRoute("Onboarding")
        }
    }


    // console.log("State>>>", value)

    const Stack = createNativeStackNavigator();

    return (
        <>
            {initialRoute ? (
                <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                    <Stack.Screen name="Drawer" component={DrawerNavigator} />
                </Stack.Navigator>
            ) : null}
        </>
    );
}

export default Navigator;