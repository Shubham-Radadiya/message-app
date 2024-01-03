import React, {FC} from 'react';
import {Alert, PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native';
import styles from './Style';
import Permission from '../../assets/svgs/Permission';
import ContactCard from '../../assets/svgs/ContactCard';
import CallCard from '../../assets/svgs/CallCard';
import SmsCard from '../../assets/svgs/SmsCard';
import {NavProps} from '../../Navigation/NavigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PermissionScreen: FC<NavProps> = ({navigation}) => {
  const requestSmsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      ]);
      if (
        granted?.["android.permission.SEND_SMS"] === "granted" &&
        granted?.["android.permission.RECEIVE_SMS"] === "granted" &&
        granted?.["android.permission.READ_SMS"] === "granted"
      ) {
        console.log('SMS permissions are given!');
        return true;
      } else {
        console.log('SMS permissions denied!', granted);
        if(
          granted?.["android.permission.SEND_SMS"] === "never_ask_again" ||
        granted?.["android.permission.RECEIVE_SMS"] === "never_ask_again" ||
        granted?.["android.permission.READ_SMS"] === "never_ask_again"
        ){
          Alert.alert(
            "Messages",
            "Please provide required permission from App",
            [
              {
                text: "Ok",
              }
            ]
          )
        } else {

        }
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const onPermission = async () => {
    const permissions = await requestSmsPermission();
    if (permissions) {
      await AsyncStorage.setItem('isPermissionAccepted', 'false');
      navigation?.navigate('DrawerStack');
    }
  };

  return (
    <View style={styles.main}>
      <View style={{alignItems: 'center', marginTop: 62}}>
        <Permission />
      </View>
      <Text style={styles.permissiontitle}>
        To use the Messages app please allow {'\n'}the following permissions:
      </Text>
      {/* contact card */}
      <View style={[styles.row, {marginHorizontal: 24, marginTop: 58}]}>
        <ContactCard />
        <View style={{marginLeft: 23}}>
          <Text style={styles.cardtitle}>Contact</Text>
          <Text style={styles.cardtext}>To access your contacts.</Text>
        </View>
      </View>
      {/* call card */}
      <View style={[styles.row, {marginHorizontal: 24, marginTop: 30}]}>
        <CallCard />
        <View style={{marginLeft: 23}}>
          <Text style={styles.cardtitle}>Call</Text>
          <Text style={styles.cardtext}>
            To make direct calls from the Messages {'\n'} App.
          </Text>
        </View>
      </View>
      {/* sms card */}
      <View style={[styles.row, {marginHorizontal: 24, marginTop: 30}]}>
        <SmsCard />
        <View style={{marginLeft: 23}}>
          <Text style={styles.cardtitle}>SMS Text</Text>
          <Text style={styles.cardtext}>For sending SMS messages.</Text>
        </View>
      </View>

      {/* button */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPermission}>
        <Text style={styles.buttontext}>Permission</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PermissionScreen;
