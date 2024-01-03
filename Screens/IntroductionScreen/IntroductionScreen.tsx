import React, { FC, useState } from "react";
import {
  Alert,
  BackHandler,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import Logo from "../../assets/svgs/Logo";
import CheckBox from "@react-native-community/checkbox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from "../../Utils/colors";
import { NavProps } from "../../Navigation/NavigationTypes";
import { useFocusEffect } from "@react-navigation/native";

const IntroductionScreen: FC<NavProps> = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <View style={styles.main}>
      <View />
      <View style={styles.logo}>
        <Logo />
        <Text style={styles.appname}>Messages</Text>
      </View>
      <View style={styles.bottomview}>
        <View style={styles.row}>
          <BouncyCheckbox
            size={18}
            fillColor={colors.orange}
            unfillColor={colors.white}
            disableText
            innerIconStyle={{
              // borderWidth: 2,
              borderRadius: 2,
              borderColor: checked ? "transparent" : colors.dark_second,
              width: 22,
              height: 22,
            }}
            iconStyle={{
              height: 22,
              width: 22,
              borderRadius: 2,
            }}
            isChecked={checked}
            onPress={(isChecked: boolean) => {
              setChecked(isChecked);
            }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.condition}>
              By clicking get Started, you are agree to
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://sites.google.com/view/messages-privacy-poli/home"
                  )
                }
              >
                <Text
                  style={[
                    styles.condition,
                    {
                      color: colors.black,
                      textDecorationStyle: "solid",
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  Privacy Policy
                </Text>
              </TouchableOpacity>
              <Text style={styles.condition}> and</Text>
              <TouchableOpacity  onPress={() =>
                  Linking.openURL(
                    "https://sites.google.com/view/messages-terms/home"
                  )
                }>
                <Text
                  style={[
                    styles.condition,
                    {
                      color: colors.black,
                      textDecorationStyle: "solid",
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  {" "}
                  Terms of Services
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <Text style={styles.condition}>
            By clicking get Started, you are agree to{' '}
            <Text style={styles.link}>Privacy Policy</Text> and{' '}
            <Text style={styles.link}>Terms of Services</Text>
          </Text> */}
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: checked ? colors.orange : colors.light_grey },
          ]}
          activeOpacity={0.6}
          disabled={!checked}
          onPress={() => navigation?.navigate("WelcomeScreen")}
        >
          <Text style={styles.buttontext}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroductionScreen;
