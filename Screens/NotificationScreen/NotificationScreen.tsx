import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import ToggleSwitch from "toggle-switch-react-native";
import Right from "../../assets/svgs/Right";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";
import CustomHeader from "../../Common/CustomHeader";
import { useColor } from "../../Common/ColorContext";
import { useBackground } from "../../Common/BackgroundContext";
import {
  background_1,
  background_2,
  background_3,
  background_4,
  background_5,
  background_6,
  background_7,
  blur_1,
  blur_10,
  blur_11,
  blur_12,
  blur_2,
  blur_3,
  blur_4,
  blur_5,
  blur_6,
  blur_7,
  blur_8,
  blur_9,
} from "../../Common/assets";
const ToggleSwitchItem = ({ title, description }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { selectedColor } = useColor();
  const { selectedBackground } = useBackground();

  const handleToggleSwitch = (isOn) => {
    setIsSwitchOn(isOn);
    console.log(`"${title}" changed to:`, isOn);
  };

  return (
    <View style={{ marginTop: "8%" }}>
      <Text
        style={{
          fontSize: 18,
          // color: "#252525",
          color: selectedColor.color === "#000000" ? "#ffffff" : "#252525",

          fontFamily: fonts.regular.circularstd,
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.secondary,
            width: "70%",
            fontFamily: fonts.regular.circularstd,
          }}
        >
          {description}
        </Text>

        {title === "Repeat Reminder" ? (
          <Right />
        ) : (
          <ToggleSwitch
            isOn={isSwitchOn}
            onColor={colors.orange}
            offColor="#9E9E9E"
            size="small"
            onToggle={handleToggleSwitch}
          />
        )}
      </View>

      <View
        style={{
          backgroundColor: "#e3e1e1",
          width: "100%",
          height: 1,
          marginTop: 10,
        }}
      />
    </View>
  );
};
const ToggleSwitchPopUps = ({ title, description }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { selectedColor } = useColor();

  const handleToggleSwitch = (isOn) => {
    setIsSwitchOn(isOn);
    console.log(`"${title}" changed to:`, isOn);
  };

  return (
    <View style={{ marginTop: "8%" }}>
      <Text
        style={{
          fontSize: 18,
          // color: "#252525",
          color: selectedColor.color === "#000000" ? "#ffffff" : "#252525",

          fontFamily: fonts.regular.circularstd,
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 16,

            color: colors.secondary,
            width: "70%",
            fontFamily: fonts.regular.circularstd,
          }}
        >
          {description}
        </Text>
        <ToggleSwitch
          isOn={isSwitchOn}
          onColor="#9E9E9E"
          offColor="#9E9E9E"
          size="small"
          onToggle={handleToggleSwitch}
        />
      </View>
      <View
        style={{
          backgroundColor: "#e3e1e1",
          width: "100%",
          height: 1,
          marginTop: 10,
        }}
      />
    </View>
  );
};
const NotificationScreen = ({ navigation }) => {
  const { selectedColor } = useColor();
  const { selectedBackground } = useBackground();

  return (
    <View
      style={[
        styles.main,
        {
          backgroundColor:
            selectedColor?.color === "#000000" ? "#000000" : colors.white,
        },
      ]}
    >
      <ImageBackground
        source={
          selectedBackground === "background_1"
            ? background_1
            : selectedBackground === "background_2"
            ? background_2
            : selectedBackground === "background_3"
            ? background_3
            : selectedBackground === "background_4"
            ? background_4
            : selectedBackground === "background_5"
            ? background_5
            : selectedBackground === "background_6"
            ? background_6
            : selectedBackground === "background_7"
            ? background_7
            : selectedBackground === "blur_1"
            ? blur_1
            : selectedBackground === "blur_2"
            ? blur_2
            : selectedBackground === "blur_3"
            ? blur_3
            : selectedBackground === "blur_4"
            ? blur_4
            : selectedBackground === "blur_5"
            ? blur_5
            : selectedBackground === "blur_6"
            ? blur_6
            : selectedBackground === "blur_7"
            ? blur_7
            : selectedBackground === "blur_8"
            ? blur_8
            : selectedBackground === "blur_9"
            ? blur_9
            : selectedBackground === "blur_10"
            ? blur_10
            : selectedBackground === "blur_11"
            ? blur_11
            : selectedBackground === "blur_12"
            ? blur_12
            : selectedBackground
        }
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.main}>
          {/* header */}
          {/* <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Back />
        </TouchableOpacity>

        <View>
          <Text style={styles.headertitle}>Notification</Text>

        </View>
      </View> */}

          <CustomHeader
            navigation={navigation}
            selectedColor={
              selectedBackground?.length > 0 ? "transparent" : selectedColor
            }
            title="Notification"
          />

          {/* divider */}
          <View style={[styles.divider, { marginTop: 0 }]} />

          <View style={{ marginHorizontal: 9 }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: 100 }}
            >
              <Text
                style={{
                  color: colors.orange,
                  fontFamily: fonts.regular.circularstd,
                  fontSize: 16,
                }}
              >
                Notifications
              </Text>
              <ToggleSwitchItem
                title="Notifications"
                description="Display message notifications in status bar"
              />
              <ToggleSwitchItem title="Repeat Reminder" description="Naver" />
              <ToggleSwitchItem
                title="Read Incoming Message"
                description="When enabled, reads notifications out loud when the application is in the background"
              />
              <ToggleSwitchItem
                title="Privacy Settings"
                description="Show a preview of received messages on the status bar and lock screen"
              />
              <ToggleSwitchItem
                title="Notifications during call"
                description="Display message notifications in status bar"
              />
              <ToggleSwitchItem
                title="Enable Network Notifications"
                description="Display message notifications in status bar"
              />
              <Text
                style={{
                  color: colors.orange,
                  fontFamily: fonts.regular.circularstd,
                  fontSize: 16,
                  marginTop: 20,
                }}
              >
                Pop up
              </Text>
              <ToggleSwitchPopUps
                title="Enable Popup Over Lock.."
                description="Display popup over the screen lock."
              />
              <ToggleSwitchPopUps
                title="Enable Popup"
                description="A popup will appear when a new message arrives."
              />
              <ToggleSwitchPopUps
                title="Mark As Read On Close
"
                description="Upon closing the popup window, messages will be marked as read."
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default NotificationScreen;
