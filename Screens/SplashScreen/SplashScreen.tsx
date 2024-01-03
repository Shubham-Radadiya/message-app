import React, {FC, useEffect} from 'react';
import styles from './Style';
import {StatusBar, Text, View} from 'react-native';
import Logo from '../../assets/svgs/Logo';
import {NavProps} from '../../Navigation/NavigationTypes';
import { useColor } from '../../Common/ColorContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen: FC<NavProps> = ({navigation}) => {
  const { selectedColor, setNewColor } = useColor();

  useEffect(() => {
    checkFirstTimeOpening()

  }, []);

  const checkFirstTimeOpening = async () => {
    try {
      const isFirstTime = await AsyncStorage.getItem('isFirstTime');
      if (isFirstTime === null) {
        console.log("first")
        setTimeout(() => {
          navigation?.navigate('IntroductionScreen');
        }, 1500);
        // First time opening the app
        // Set the flag to indicate that the app has been opened before
        await AsyncStorage.setItem('isFirstTime', 'false');
      } else {
        console.log("second")
        const isPermissionAccepted = await AsyncStorage.getItem("isPermissionAccepted");
        if(isPermissionAccepted){
          navigation?.navigate("DrawerStack",{
            screen : "IndoxScreen"
          });
        } else {
          navigation?.navigate("PermissionScreen")
        }

        // App has been opened before, skip splash screen
        // Navigate directly to the home screen
        // You may want to use a more sophisticated navigation logic here
        // depending on your app's structure
        // e.g., use react-navigation to navigate to the home screen
      }
    } catch (error) {
      console.error('Error checking first time opening:', error);
    }
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={selectedColor?.statusColor}/>
      <View />
      <View style={styles.logo}>
        <Logo />
        <Text style={styles.appname}>Messages</Text>
      </View>
      <View />
    </View>
  );
};

export default SplashScreen;
