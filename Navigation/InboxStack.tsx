import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {InboxStacks} from './NavigationTypes';
import InboxScreen from '../Screens/InboxScreen/InboxScreen';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';

const InboxStack = () => {
  const Stack = createStackNavigator<InboxStacks>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="IndoxScreen" component={InboxScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />

    </Stack.Navigator>
  );
};

export default InboxStack;
