import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStacks} from './NavigationTypes';
import WelcomeStack from './WelcomeStack';
import DrawerStack from './DrawerStack';

const RootStack = () => {
  const Stack = createStackNavigator<RootStacks>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeStack" component={WelcomeStack} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
