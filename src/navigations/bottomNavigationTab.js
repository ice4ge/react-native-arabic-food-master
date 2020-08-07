import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationNames } from './navigationNames';
import { createStackNavigator } from "@react-navigation/stack";

import { TabNavigationStyle, stackScreenOptions } from './bottomNavigationStyle';

import {
  HomeScreen,
  FoodsScreen,
  AddScreen,
  CategoryDetailsScreen,
  CategoryItemDetailScreen,
} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home tab navigator.
const HomeTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.HomeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

// Foods tab navigator.
const FoodsTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.FoodsScreen}
        component={FoodsScreen}
      />
      <Stack.Screen
        name={NavigationNames.CategoryDetailsScreen}
        component={CategoryDetailsScreen}
      />
      <Stack.Screen
        name={NavigationNames.CategoryItemDetailScreen}
        component={CategoryItemDetailScreen}
      />
    </Stack.Navigator>
  );
};

// Add tab navigator
const AddTabStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.AddScreen}
        component={AddScreen}
      />
    </Stack.Navigator>
  );
};

// Tab navigator container and expert.
export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          // Tab bar icon component
          return <TabNavigationStyle route={route} focused={focused} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#8ab661',
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
        },
        labelStyle: {
          display: 'none',
        }
      }}
    >
      <Tab.Screen name={NavigationNames.HomeTab} component={HomeTabStack} />
      <Tab.Screen name={NavigationNames.FoodsTab} component={FoodsTabStack} />
      <Tab.Screen name={NavigationNames.AddTab} component={AddTabStack} />
    </Tab.Navigator>
  );
}
