import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./Navigation/RootStack";
import { ThemeProvider } from "./Context/ThemeContext/ThemeContext";
import ChangeBackgroundScreen from "./Screens/ChangeBackgroundScreen/ChangeBackgroundScreen";
import FontStyleScreen from "./Screens/FontStyleScreen/FontStyleScreen";
import FeedbackScreen from "./Screens/FeedbackScreen/FeedbackScreen";
import BackupAndRestoreScreen from "./Screens/BackupAndRestoreScreen/BackupAndRestoreScreen";
import BookmarkedScreen from "./Screens/BookmarkedScreen/BookmarkedScreen";
import ArchiveScreen from "./Screens/ArchiveScreen/ArchiveScreen";
import SettingsScreen from "./Screens/SettingsScreen/SettingsScreen";
import NotificationScreen from "./Screens/NotificationScreen/NotificationScreen";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import StartChatScreen from "./Screens/StartChatScreen/StartChatScreen";

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
    // <ChangeBackgroundScreen/>
    // <FontStyleScreen/>
    // <FeedbackScreen/>
    // <BackupAndRestoreScreen/>
    // <BookmarkedScreen/>
    // <ArchiveScreen/>
    // <SettingsScreen/>
    // <NotificationScreen/>
    // <ChatScreen/>
    // <StartChatScreen />
  );
};

export default App;
