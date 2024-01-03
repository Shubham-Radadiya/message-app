import React, { FC, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import { NavProps } from "../../Navigation/NavigationTypes";
import SharedMedia from "../../assets/svgs/SharedMedia";
import Multicolored from "../../assets/svgs/Multicolored";
import AvatarColor from "../../assets/svgs/AvatarColor";
import RightArrow from "../../assets/svgs/RightArrow";
import Bubblestyle from "../../assets/svgs/Bubblestyle";
import Font from "../../assets/svgs/Font";
import ResetDefault from "../../assets/svgs/ResetDefault";
import Notification from "../../assets/svgs/Notification";
import AvtarColorModal from "../../Components/AvtarColorModal/AvtarColorModal";
import ResetDefaultMode from "../../Components/ResetDefaultModel/ResetDefaultMode";
import CustomHeader from "../../Common/CustomHeader";
import { useColor } from "../../Common/ColorContext";
import colors from "../../Utils/colors";
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

const CustomizeScreen: FC<NavProps> = ({ navigation }) => {
  const [avtarModal, setAvtarModal] = useState<boolean>(false);
  const [resetdefaultModel, setResetDefaultModel] = useState<boolean>(false);
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
          {/* back icon & title row */}
          {/* <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.headertitle}>Customize</Text>
        </View> */}
          <CustomHeader
            navigation={navigation}
            selectedColor={
              selectedBackground?.length > 0 ? "transparent" : selectedColor
            }
            title="Custom Screen"
          />

          {/* background */}
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.itemrow, { marginTop: 27 }]}
            onPress={() => navigation?.navigate("ChangeBackgroundScreen")}
          >
            <View style={styles.iteminnerrow}>
              <SharedMedia
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
              <View style={{ marginLeft: 29 }}>
                <Text
                  style={[
                    styles.itemtitle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Backgrounds
                </Text>
                <Text style={[styles.itemvalue]}>Light</Text>
              </View>
            </View>
            <View style={[styles.backgroundview, {}]} />
          </TouchableOpacity>

          {/* divider */}
          <View style={styles.divider} />

          {/* avatar color */}
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.itemrow]}
            onPress={() => setAvtarModal(true)}
          >
            <View style={styles.iteminnerrow}>
              <AvatarColor
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
              <View style={{ marginLeft: 29 }}>
                <Text
                  style={[
                    styles.itemtitle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Avatar Color
                </Text>
                <Text style={styles.itemvalue}>Multicolored</Text>
              </View>
            </View>
            <Multicolored />
          </TouchableOpacity>

          {/* divider */}
          <View style={styles.divider} />

          {/* bubble style & color */}
          <TouchableOpacity activeOpacity={0.6} style={[styles.itemrow]}>
            <View style={styles.iteminnerrow}>
              <Bubblestyle
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
              <View style={{ marginLeft: 29 }}>
                <Text
                  style={[
                    styles.itemtitle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Bubble style & color
                </Text>
                <Text style={styles.itemvalue}>Rounded</Text>
              </View>
            </View>
            <RightArrow />
          </TouchableOpacity>

          {/* divider */}
          <View style={styles.divider} />

          {/* font */}
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.itemrow]}
            onPress={() => navigation?.navigate("FontStyleScreen")}
          >
            <View style={styles.iteminnerrow}>
              <Font
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
              <View style={{ marginLeft: 29 }}>
                <Text
                  style={[
                    styles.itemtitle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Font
                </Text>
                <Text style={styles.itemvalue}>Select font size and style</Text>
              </View>
            </View>
            <Text
              style={[
                styles.fontstyle,
                {
                  color:
                    selectedColor.color === "#000000"
                      ? "#ffffff"
                      : colors.dark_grey,
                },
              ]}
            >
              Hey
            </Text>
          </TouchableOpacity>

          {/* divider */}
          <View style={styles.divider} />

          {/* Notifications */}
          <TouchableOpacity activeOpacity={0.6} style={[styles.itemrow]}>
            <View style={styles.iteminnerrow}>
              <Notification
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
              <View style={{ marginLeft: 29 }}>
                <Text
                  style={[
                    styles.itemtitle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Notifications
                </Text>
                <Text style={styles.itemvalue}>
                  Importance, tones, vibrations etc.
                </Text>
              </View>
            </View>
            <RightArrow />
          </TouchableOpacity>

          {/* divider */}
          <View style={styles.divider} />
          {/* font */}
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.itemrow]}
            onPress={() => setResetDefaultModel(true)}
          >
            <View style={styles.iteminnerrow}>
              <ResetDefault
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
              <View style={{ marginLeft: 29 }}>
                <Text
                  style={[
                    styles.itemtitle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Reset to default
                </Text>
                <Text style={styles.itemvalue}>
                  Clears all user set customization.
                </Text>
              </View>
            </View>
            <RightArrow />
          </TouchableOpacity>

          {/* Avtar color modal */}
          <AvtarColorModal
            visible={avtarModal}
            onDismiss={() => setAvtarModal(false)}
          />
          {/* Reset defalut modal */}

          <ResetDefaultMode
            visible={resetdefaultModel}
            onDismiss={() => setResetDefaultModel(false)}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default CustomizeScreen;
