import React from 'react'
import { View, Text } from 'react-native'
import DrawerNavigator from './components/Navigation/DrawerNavigator'
import Navigator from './components/Navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './components/Navigation/BottomNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export default App
