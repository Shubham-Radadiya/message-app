import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import fonts from "../../Utils/utils";
import colors from "../../Utils/colors";
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
const BackupAndRestoreScreen = ({ navigation }) => {
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
            <Text style={styles.headertitle}>Backup & Restore</Text>
          </View>
        </View> */}
          <CustomHeader
            navigation={navigation}
            selectedColor={
              selectedBackground?.length > 0 ? "transparent" : selectedColor
            }
            title="Backup & Restore"
          />

          {/* center container*/}
          <View
            style={{
              width: 262,
              height: 271,
              alignSelf: "center",
              marginTop: 56,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/backup_and_restore.png")}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: fonts.regular.circularstd,
              fontSize: 16,
              // color: colors.dark_grey,
              color:
                selectedColor.color === "#000000"
                  ? "#ffffff"
                  : colors.dark_grey,

              marginTop: 24,
            }}
          >
            Backup & Restore Message
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: fonts.regular.circularstd,
              fontSize: 14,
              color: colors.orange,
              marginTop: 5,
            }}
          >
            Last Backup: 03/10/2023, 5:05:10 PM
          </Text>
          {/* buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.restore, styles.commonbutton]}>
              <Text style={styles.restoretext}>Restore Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.commonbutton, styles.ok]}>
              <Text style={styles.oktext}>Backup</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BackupAndRestoreScreen;
