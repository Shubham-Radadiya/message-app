import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {WelcomeStacks} from './NavigationTypes';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import IntroductionScreen from '../Screens/IntroductionScreen/IntroductionScreen';
import PermissionScreen from '../Screens/PermissionScreen/PermissionScreen';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';

const WelcomeStack = () => {
  const Stack = createStackNavigator<WelcomeStacks>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="IntroductionScreen" component={IntroductionScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
