import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../Organism/Chat';
import Dialer from '../Organism/Dialer';
import Navigator from './Navigator';
import ActivityScreen from '../Organism/ActivityScreen';
import { COLORS, SIZES } from '../../assets/constant';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  console.log('bottom');

  return (
    <Tab.Navigator
    initialRouteName="Home"
     screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Navigator}
        options={{tabBarLabel: 'Home',
        tabBarIcon: ()=>{
          <Ionicons name="home-outline"  />
        }
    }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{tabBarLabel: 'Chat'}}
      />
      <Tab.Screen
        name="Dialer"
        component={Dialer}
        options={{tabBarLabel: 'Dialer'}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
