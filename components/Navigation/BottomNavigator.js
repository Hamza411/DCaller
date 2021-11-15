import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../Organism/Chat';
import Dialer from '../Organism/Dialer';
import Navigator from './Navigator';
import ActivityScreen from '../Organism/ActivityScreen';
import { COLORS, SIZES } from '../../assets/constant';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  // console.log('bottom');

  return (
    <Tab.Navigator
      // initialRouteName="Home"
      screenOptions={{ headerShown: false }}>

      {/* <Tab.Screen name="Drawer" component={DrawerNavigator} /> */}

      <Tab.Screen
        name="Home"
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }} />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="chatbubble-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dialer"
        component={Dialer}
        options={{
          tabBarLabel: 'Dialer',
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="phone"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
