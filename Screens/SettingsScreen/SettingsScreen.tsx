import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Back from "../../assets/svgs/Back";
import styles from "./Style";
import Language from "../../assets/svgs/Language";
import Term from "../../assets/svgs/Term";
import Help from "../../assets/svgs/Help";
import Bell from "../../assets/svgs/Bell";
import Privacy from "../../assets/svgs/Privacy";
import Version from "../../assets/svgs/Version";
import Feedback2 from "../../assets/svgs/Feedback2";
import Right from "../../assets/svgs/Right";
import fonts from "../../Utils/utils";
import colors from "../../Utils/colors";
import { useColor } from "../../Common/ColorContext";
import CustomHeader from "../../Common/CustomHeader";
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

const SettingsScreen = ({ navigation }) => {
  const { selectedColor, setNewColor } = useColor();
  const { selectedBackground } = useBackground();

  const setting = [
    {
      images: (
        <Language
          stroke={selectedColor.color === "#000000" ? colors.white : "#212121"}
        />
      ),
      setting_name: "language",
    },
    {
      images: (
        <Bell
          stroke={selectedColor.color === "#000000" ? colors.white : "#212121"}
        />
      ),
      setting_name: "notification",
    },
    {
      images: (
        <Term
          stroke={selectedColor.color === "#000000" ? colors.white : "#212121"}
        />
      ),
      setting_name: "terms & conditions",
    },
    {
      images: (
        <Help
          stroke={selectedColor.color === "#000000" ? colors.white : "#212121"}
        />
      ),
      setting_name: "help",
    },
    {
      images: (
        <Feedback2
          stroke={selectedColor.color === "#000000" ? colors.white : "#212121"}
        />
      ),
      setting_name: "feedback",
    },
  ];
  const other = [
    {
      images: (
        <Privacy
          stroke={selectedColor.color === "#000000" ? colors.white : "#212121"}
        />
      ),
      setting_name: "privacy policy",
    },
    {
      images: (
        <Version
          stroke={selectedColor.color === "#000000" ? colors.white : "#212121"}
        />
      ),
      setting_name: "Version",
    },
  ];

  const btnSettings = (item) => {
    if (item?.setting_name === "notification") {
      navigation.navigate("NotificationScreen");
      console.log("first");
    }
  };

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
            <Text style={styles.headertitle}>Settings</Text>

          </View>
        </View> */}
          <CustomHeader
            navigation={navigation}
            selectedColor={
              selectedBackground?.length > 0 ? "transparent" : selectedColor
            }
            title="Settings"
          />

          {/* divider */}
          <View style={[styles.divider, { marginTop: 0 }]} />

          <Text
            style={{
              fontSize: 16,
              marginVertical: 25,
              marginStart: 21,
              color:
                selectedColor.color === "#000000"
                  ? "#ffffff"
                  : colors.dark_grey,

              fontFamily: fonts.regular.circularstd,
            }}
          >
            General
          </Text>
          {setting.map((item, index) => {
            return (
              <View key={index} style={{ marginStart: 21, marginEnd: 19 }}>
                <TouchableOpacity
                  onPress={() => btnSettings(item)}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.images}
                    <Text
                      style={{
                        fontSize: 17,
                        textAlign: "center",
                        paddingLeft: 18,
                        // color: colors.dark_grey,
                        color:
                          selectedColor.color === "#000000"
                            ? "#ffffff"
                            : colors.dark_grey,

                        fontFamily: fonts.regular.circularstd,
                      }}
                    >
                      {item.setting_name}
                    </Text>
                  </View>
                  <Right />

                  {/* <Image source={require('./image/next.png')} style={{ width: 20, height: 20 }} /> */}
                </TouchableOpacity>
                <View style={[styles.divider2]} />
              </View>
            );
          })}
          <Text
            style={{
              fontSize: 16,
              marginVertical: 25,
              marginStart: 21,
              color:
                selectedColor.color === "#000000"
                  ? "#ffffff"
                  : colors.dark_grey,

              fontFamily: fonts.regular.circularstd,
            }}
          >
            Other
          </Text>
          {other.map((item, index) => {
            return (
              <View key={index} style={{ marginStart: 21, marginEnd: 19 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* <Image source={item.images} /> */}
                    {item.images}
                    <Text
                      style={{
                        fontSize: 17,
                        textAlign: "center",
                        paddingLeft: 18,
                        // color: colors.dark_grey,
                        color:
                          selectedColor.color === "#000000"
                            ? "#ffffff"
                            : colors.dark_grey,

                        fontFamily: fonts.regular.circularstd,
                      }}
                    >
                      {item.setting_name}
                    </Text>
                  </View>
                  <Right />
                  {/* <Image source={require('./image/next.png')} style={{ width: 20, height: 20 }} /> */}
                </View>
                <View style={[styles.divider2]} />
              </View>
            );
          })}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SettingsScreen;
