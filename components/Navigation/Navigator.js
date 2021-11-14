import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Organism/OnboardingScreen';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigator from './BottomNavigator';
import ActivityScreen from '../Organism/ActivityScreen';

const Navigator = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    getState();
  }, []);

  const getState = async () => {
    try {
      const value = await AsyncStorage.getItem('Onboarding');
      if (value === 'true') {
        setInitialRoute('Drawer');
      } else {
        setInitialRoute('Onboarding');
      }
    } catch (err) {
      setInitialRoute('Onboarding');
    }
  };

  const Stack = createNativeStackNavigator();

  return (
    <>
      {initialRoute ? (
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Tab" component={BottomNavigator} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
        </Stack.Navigator>
      ) : null}
    </>
  );
};

export default Navigator;
