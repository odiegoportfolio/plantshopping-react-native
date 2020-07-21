import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/home';

const Stack = createStackNavigator();

function Routes() {
  return (
    <HomeScreen/>
  );
}

export default Routes;
