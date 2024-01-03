import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";
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

const FontStyleScreen = ({ navigation, isTransparent }) => {
  const { selectedColor } = useColor();
  const { selectedBackground } = useBackground();

  const changeFontStyle = (fontStyle) => {
    setSelectedFont(fontStyle);
  };

  const progressLineColor = fontSize >= 24 ? "#3498db" : "#e74c3c";

  const [fontSize, setFontSize] = useState(16);
  const [selectedFont, setSelectedFont] = useState("normal");

  const fontStyles = {
    normal: { fontFamily: "Roboto-Regular" },
    italic: { fontFamily: "Roboto-Italic" },
    oblique: { fontFamily: "Roboto-Bold" },
    roboto_Black: { fontFamily: "Roboto-Black" },
    roboto_BlackItalic: { fontFamily: "Roboto-BlackItalic" },
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { moveX } = gestureState;
      const newFontSize = Math.max(12, Math.min(30, (moveX / 300) * 18 + 12));
      setFontSize(newFontSize);
    },
  });

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
          {/* back icon & title row */}
          <View
            style={[
              styles.row,
              {
                backgroundColor: isTransparent
                  ? "transparent"
                  : selectedColor.color,
              },
            ]}
          >
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <Back
                stroke={
                  selectedColor?.color === "#FFFFFF"
                    ? colors.black
                    : selectedColor?.color === "#000000" ||
                      selectedColor?.color === "#1993E7" ||
                      selectedColor?.color === "#13874B" ||
                      selectedColor?.color === "#754CB2"
                    ? colors.white
                    : "black"
                }
              />
            </TouchableOpacity>

            <View>
              <Text
                style={[
                  styles.headertitle,
                  {
                    color: isTransparent
                      ? "transparent"
                      : selectedColor?.color === "#FFFFFF"
                      ? colors.black
                      : selectedColor?.color === "#000000" ||
                        selectedColor?.color === "#1993E7" ||
                        selectedColor?.color === "#13874B" ||
                        selectedColor?.color === "#754CB2"
                      ? colors.white
                      : "black",
                  },
                ]}
              >
                All Messages
              </Text>
              <Text
                style={[
                  styles.headersubtitle,
                  {
                    color: isTransparent
                      ? "transparent"
                      : selectedColor?.color === "#FFFFFF"
                      ? colors.black
                      : selectedColor?.color === "#000000" ||
                        selectedColor?.color === "#1993E7" ||
                        selectedColor?.color === "#13874B" ||
                        selectedColor?.color === "#754CB2"
                      ? colors.white
                      : "black",
                  },
                ]}
              >
                manage conversion bubble
              </Text>
            </View>
          </View>
          {/* divider */}
          <View style={[styles.divider, { marginTop: 0 }]} />

          {/* center container*/}

          <View
            style={{
              width: "60%",
              backgroundColor: "#F57B00",
              alignSelf: "flex-end",
              height: 82,
              marginEnd: 5,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.text,
                fontStyles[selectedFont],
                { fontSize },
                { color: colors.white },
              ]}
            >
              Sent message will appear here
            </Text>
            <View style={{ position: "absolute", bottom: 20, right: 24 }}>
              <Text
                style={[
                  styles.text,
                  { marginBottom: 0, color: colors.white, fontSize: 12 },
                ]}
              >
                10:10
              </Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: "#A6A6A6",
              backgroundColor:
                selectedColor?.color === "#000000" ? "#A6A6A6" : "#F5f5f5",
              width: "60%",
              height: 82,
              marginStart: 5,
              alignSelf: "flex-start",
              marginTop: 15,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                styles.text,
                fontStyles[selectedFont],
                { fontSize },
                {
                  color:
                    selectedColor.color === "#000000" ? "#ffffff" : "#000000",
                },
              ]}
            >
              Sent message will come here
            </Text>
            <View style={{ position: "absolute", bottom: 20, right: 24 }}>
              <Text
                style={[
                  styles.text,
                  {
                    marginBottom: 0,
                    color:
                      selectedColor.color === "#000000" ? "#ffffff" : "#000000",
                    fontSize: 12,
                  },
                ]}
              >
                10:10
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View style={{}}>
              {/* divider */}
              <View style={styles.divider} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 20,
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    color: colors.light_grey,
                    fontSize: 16,
                    fontFamily: fonts.regular.circularstd,
                  }}
                >
                  Font Style
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: colors.light_grey,
                      fontSize: 16,

                      fontFamily: fonts.regular.circularstd,
                    }}
                  >
                    use Default
                  </Text>
                  <View
                    style={{
                      borderRadius: 100,
                      borderColor: "#F57B00",
                      borderWidth: 1,
                      width: 15,
                      height: 15,
                      left: 5,
                    }}
                  />
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View {...panResponder.panHandlers} style={styles.progressLine}>
                  <View
                    style={[
                      styles.progressLineInner,
                      { width: (fontSize - 12) * 10 },
                    ]}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                margin: 10,
              }}
            >
              <Text
                style={{
                  color: colors.light_grey,
                  fontSize: 16,
                  fontFamily: fonts.regular.circularstd,
                }}
              >
                Font Style
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    color: colors.light_grey,
                    fontSize: 16,

                    fontFamily: fonts.regular.circularstd,
                  }}
                >
                  use Default
                </Text>
                <View
                  style={{
                    borderRadius: 100,
                    borderColor: "#F57B00",
                    borderWidth: 1,
                    width: 15,

                    height: 15,
                    left: 5,
                  }}
                />
              </View>
            </View>
            <ScrollView horizontal>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  marginBottom: 23,
                }}
              >
                <TouchableOpacity
                  onPress={() => changeFontStyle("normal")}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedColor.color === "#000000"
                          ? colors.dark_grey
                          : "#E0E0E0",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      {
                        fontFamily: fonts.regular.InterRegular,
                        color:
                          selectedColor.color === "#000000"
                            ? colors.white
                            : "#000000",
                      },
                    ]}
                  >
                    abc
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => changeFontStyle("italic")}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedColor.color === "#000000"
                          ? colors.dark_grey
                          : "#E0E0E0",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      fontStyles.italic,
                      {
                        color:
                          selectedColor.color === "#000000"
                            ? colors.white
                            : "#000000",
                      },
                    ]}
                  >
                    abc
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => changeFontStyle("oblique")}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedColor.color === "#000000"
                          ? colors.dark_grey
                          : "#E0E0E0",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      fontStyles.oblique,
                      {
                        color:
                          selectedColor.color === "#000000"
                            ? colors.white
                            : "#000000",
                      },
                    ]}
                  >
                    abc
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => changeFontStyle("oblique")}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedColor.color === "#000000"
                          ? colors.dark_grey
                          : "#E0E0E0",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      fontStyles.roboto_Black,
                      {
                        color:
                          selectedColor.color === "#000000"
                            ? colors.white
                            : "#000000",
                      },
                    ]}
                  >
                    abc
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => changeFontStyle("oblique")}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedColor.color === "#000000"
                          ? colors.dark_grey
                          : "#E0E0E0",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      fontStyles.roboto_BlackItalic,
                      {
                        color:
                          selectedColor.color === "#000000"
                            ? colors.white
                            : "#000000",
                      },
                    ]}
                  >
                    abc
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => changeFontStyle("oblique")}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedColor.color === "#000000"
                          ? colors.dark_grey
                          : "#E0E0E0",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      fontStyles.oblique,
                      {
                        color:
                          selectedColor.color === "#000000"
                            ? colors.white
                            : "#000000",
                      },
                    ]}
                  >
                    abc
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => changeFontStyle("oblique")}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        selectedColor.color === "#000000"
                          ? colors.dark_grey
                          : "#E0E0E0",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      fontStyles.oblique,
                      {
                        color:
                          selectedColor.color === "#000000"
                            ? colors.white
                            : "#000000",
                      },
                    ]}
                  >
                    abc
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default FontStyleScreen;
