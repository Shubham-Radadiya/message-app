import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawerStacks } from './NavigationTypes';
import LanguageScreen from '../Screens/LanguageScreen/LanguageScreen';
import DrawerContent from './DrawerContent';
import { useWindowDimensions } from 'react-native';
import InboxScreen from '../Screens/InboxScreen/InboxScreen';
import SearchTabScreen from '../Screens/SearchTabScreen/SearchTabScreen';
import CustomizeScreen from '../Screens/CustomizeScreen/CustomizeScreen';
import BackupAndRestoreScreen from '../Screens/BackupAndRestoreScreen/BackupAndRestoreScreen';
import ChangeBackgroundScreen from '../Screens/ChangeBackgroundScreen/ChangeBackgroundScreen';
import FontStyleScreen from '../Screens/FontStyleScreen/FontStyleScreen';
import ArchiveScreen from '../Screens/ArchiveScreen/ArchiveScreen';
import BookmarkedScreen from '../Screens/BookmarkedScreen/BookmarkedScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import NotificationScreen from '../Screens/NotificationScreen/NotificationScreen';
import StartChatScreen from '../Screens/StartChatScreen/StartChatScreen';

const DrawerStack = () => {
  const Drawer = createDrawerNavigator<DrawerStacks>();
  const width = useWindowDimensions().width * 0.8;
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: width } }}
      drawerContent={(props: any) => <DrawerContent {...props} />}>
      <Drawer.Screen name="IndoxScreen" component={InboxScreen} />
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />

      <Drawer.Screen name="SearchTabScreen" component={SearchTabScreen} />
      <Drawer.Screen name="LanguageScreen" component={LanguageScreen} />
      <Drawer.Screen name="CustomizeScreen" component={CustomizeScreen} />
      <Drawer.Screen name="ArchiveScreen" component={ArchiveScreen} />
      <Drawer.Screen name="BookmarkedScreen" component={BookmarkedScreen} />
      <Drawer.Screen name="BackupAndRestoreScreen" component={BackupAndRestoreScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="StartChatScreen" component={StartChatScreen} />




      <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />

      <Drawer.Screen name="ChangeBackgroundScreen" component={ChangeBackgroundScreen} />
      <Drawer.Screen name="FontStyleScreen" component={FontStyleScreen} />




    </Drawer.Navigator>
  );
};

export default DrawerStack;
