import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationNames } from './navigationNames';
import { TabStack } from './bottomNavigationTab';

import { stackScreenOptions } from './bottomNavigationStyle';

import {
  LoginScreen,
} from '../screens';

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen name={NavigationNames.RootTabContainer} component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
