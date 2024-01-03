import React, { FC, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import { NavProps } from "../../Navigation/NavigationTypes";
import colors from "../../Utils/colors";
import Search from "../../assets/svgs/Search";
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

const SearchTabScreen: FC<NavProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<
    "Conversion" | "All Groups" | "Recent Contacts"
  >("Conversion");
  const { selectedColor } = useColor();
  const { selectedBackground } = useBackground();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            paddingTop: 0,
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
          <SafeAreaView style={styles.container}>
            {/* top search view */}
            <View style={styles.searchrow}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{ marginRight: 32 }}
                onPress={() => navigation?.goBack()}
              >
                <Back
                  stroke={
                    selectedColor.color === "#000000" ? colors.white : "#212121"
                  }
                />
              </TouchableOpacity>
              <View style={styles.search}>
                <Search
                  stroke={
                    selectedColor.color === "#000000" ? colors.white : "#212121"
                  }
                />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={colors.dark_grey}
                  style={styles.searchinput}
                />
              </View>
            </View>
            {/* search view end */}

            {/* tab view */}
            <View style={styles.tabview}>
              <TouchableOpacity
                style={styles.tabitem}
                onPress={() => setActiveTab("Conversion")}
              >
                <Text
                  style={[
                    styles.tabitemtext,
                    {
                      color:
                        activeTab === "Conversion"
                          ? colors.orange
                          : selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  All Conversions
                </Text>
                {activeTab === "Conversion" ? (
                  <View style={styles.activebar} />
                ) : (
                  <View style={styles.inactivebar} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tabitem}
                onPress={() => setActiveTab("All Groups")}
              >
                <Text
                  style={[
                    styles.tabitemtext,
                    {
                      color:
                        activeTab === "All Groups"
                          ? colors.orange
                          : selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Groups
                </Text>
                {activeTab === "All Groups" ? (
                  <View style={styles.activebar} />
                ) : (
                  <View style={styles.inactivebar} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tabitem}
                onPress={() => setActiveTab("Recent Contacts")}
              >
                <Text
                  style={[
                    styles.tabitemtext,
                    {
                      color:
                        activeTab === "Recent Contacts"
                          ? colors.orange
                          : selectedColor.color === "#000000"
                          ? "#ffffff"
                          : colors.dark_grey,
                    },
                  ]}
                >
                  Contacts
                </Text>
                {activeTab === "Recent Contacts" ? (
                  <View style={styles.activebar} />
                ) : (
                  <View style={styles.inactivebar} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />

            {/* list title */}
            <Text
              style={[
                styles.listtitle,
                {
                  color:
                    selectedColor.color === "#000000"
                      ? "#ffffff"
                      : colors.dark_grey,
                },
              ]}
            >
              {activeTab} (21)
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

export default SearchTabScreen;
