import React, { Children, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";
import Add from "../../assets/svgs/Add";
import Custom from "../../assets/svgs/Custom";
import { useColor } from "../../Common/ColorContext";
import CustomHeader from "../../Common/CustomHeader";
import { useBackground } from "../../Common/BackgroundContext";
import WheelColorPicker from "react-native-wheel-color-picker";
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

const ChangeBackgroundScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Color");
  const {
    selectedBackground,
    setGlobalBackground,
    removeBackgroundFromStorage,
  } = useBackground();
  const [selectedModalColor, setSelectedModalColor] = useState("#ff0000");
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const { selectedColor, setNewColor, removeColorFromStorage } = useColor();
  const [selectedBg, setSelectedBackground] = useState(null);

  const list = [
    {
      id: "1",
      title: "Contact Name",
      subTitle: "Message Preview....",
      time: "9:41 AM",
      image: require("../../assets/images/person.png"),
    },
    {
      id: "2",
      title: "Contact Name",
      subTitle: "Message Preview....",
      time: "9:41 AM",
      image: require("../../assets/images/person.png"),
    },
    {
      id: "3",
      title: "Contact Name",
      subTitle: "Message Preview....",
      time: "9:41 AM",
      image: require("../../assets/images/person.png"),
    },
    {
      id: "4",
      title: "Contact Name",
      subTitle: "Message Preview....",
      time: "9:41 AM",
      image: require("../../assets/images/person.png"),
    },
    {
      id: "5",
      title: "Contact Name",
      subTitle: "Message Preview....",
      time: "9:41 AM",
      image: require("../../assets/images/person.png"),
    },
  ];

  const colorData = [
    { id: "1", color: "#FFFFFF", statusColor: "#FFFFFF", name: "Light" },
    { id: "2", color: "#000000", statusColor: "#000000", name: "Dark" },
    { id: "3", color: "#F57B00", statusColor: "#F57B00", name: "Orange" },
    { id: "4", color: "#1993E7", statusColor: "#1993E7", name: "Blue" },
    { id: "5", color: "#13874B", statusColor: "#0D743F", name: "Green" },
    { id: "6", color: "#754CB2", statusColor: "#683BAC", name: "Purple " },

    // Add more color options as needed
  ];

  const backgroundImages = [
    {
      id: "1",
      source: require("../../assets/images/background_1.png"),
      name: "background_1",
    },
    {
      id: "2",
      source: require("../../assets/images/background_2.png"),
      name: "background_2",
    },
    {
      id: "3",
      source: require("../../assets/images/background_3.png"),
      name: "background_3",
    },
    {
      id: "4",
      source: require("../../assets/images/background_4.png"),
      name: "background_4",
    },
    {
      id: "5",
      source: require("../../assets/images/background_5.png"),
      name: "background_5",
    },
    {
      id: "6",
      source: require("../../assets/images/background_6.png"),
      name: "background_6",
    },
    {
      id: "7",
      source: require("../../assets/images/background_7.png"),
      name: "background_7",
    },

    // Add more background images as needed
  ];

  const backgroundBlur = [
    {
      id: "1",
      source: require("../../assets/images/1.png"),
      name: "blur_1",
    },
    {
      id: "2",
      source: require("../../assets/images/2.png"),
      name: "blur_2",
    },
    {
      id: "3",
      source: require("../../assets/images/3.png"),
      name: "blur_3",
    },
    {
      id: "4",
      source: require("../../assets/images/4.png"),
      name: "blur_4",
    },
    {
      id: "5",
      source: require("../../assets/images/5.png"),
      name: "blur_5",
    },
    {
      id: "6",
      source: require("../../assets/images/6.png"),
      name: "blur_6",
    },
    {
      id: "7",
      source: require("../../assets/images/7.png"),
      name: "blur_7",
    },
    {
      id: "8",
      source: require("../../assets/images/8.png"),
      name: "blur_8",
    },
    {
      id: "9",
      source: require("../../assets/images/9.png"),
      name: "blur_9",
    },
    {
      id: "10",
      source: require("../../assets/images/10.png"),
      name: "blur_10",
    },
    {
      id: "11",
      source: require("../../assets/images/11.png"),
      name: "blur_11",
    },
    {
      id: "12",
      source: require("../../assets/images/12.png"),
      name: "blur_12",
    },

    // Add more background images as needed
  ];

  // color change funcation
  const btnColorChange = (item) => {
    removeBackgroundFromStorage();
    setNewColor(item);
  };

  const btnBgChange = (item) => {
    setSelectedBackground(item?.source);
    setGlobalBackground(item?.name);

    // Optionally, you can also pass 'item' to determine specific conditions for transparency
  };

  const btnBgBlur = (item) => {
    setSelectedBackground(item?.source);
    setGlobalBackground(item?.name);
  };

  useEffect(() => {
    console.log("#selectedColor", selectedColor);
  }, []);

  const renderColorItem = ({ item }) => (
    <TouchableOpacity style={{}} onPress={() => btnColorChange(item)}>
      <View
        style={{
          backgroundColor: item.color,
          width: 75,
          height: 75,

          borderRadius: 6,
          borderWidth: 1,

          borderColor: colors.light_grey,
          marginEnd: 16,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginEnd: 16,
          marginTop: 5,
          fontFamily: fonts.regular.InterRegular,
          fontSize: 10,
          color: colors.black,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderBackgroundItem = ({ item }) => (
    <TouchableOpacity onPress={() => btnBgChange(item)}>
      <Image source={item.source} style={styles.renderBackgroundImg} />
    </TouchableOpacity>
  );

  const renderBlurItem = ({ item }) => (
    <TouchableOpacity onPress={() => btnBgBlur(item)}>
      <Image source={item.source} style={styles.renderBlurImg} />
    </TouchableOpacity>
  );

  useEffect(() => {
    // Update the background globally when the color scheme changes (light/dark mode)
    setGlobalBackground(selectedBackground);
  }, [selectedBackground]);

  const openColorModal = () => {
    // Initialize the selected color in the modal with the current selected color
    // setSelectedModalColor(selectedColor);
    setColorModalVisible(true);
  };

  // Function to handle color selection in the modal
  const handleColorSelection = () => {
    // Save the selected color and close the modal
    setNewColor({ color: selectedModalColor, statusColor: selectedModalColor });
    setColorModalVisible(false);
  };

  console.log("selectedModalColor", selectedModalColor);

  const renderColorModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={colorModalVisible}
      onRequestClose={() => setColorModalVisible(false)}
    >
      <View style={styles.colorModalContainer}>
        <View style={styles.colorModalContent}>
          <WheelColorPicker
            initialColor={selectedModalColor}
            onColorChange={(color) => setSelectedModalColor(color)}
          />
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              onPress={handleColorSelection}
              style={styles.saveButton}
            >
              <Text style={styles.buttonText}>Save Color</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColorModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.contactContainer]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={item.image} style={styles.userIcon} />
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginStart: 16 }}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.subTitleText}>{item.subTitle}</Text>
            </View>
            <View style={{ marginStart: 106 }}>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderImages = () => {
    if (selectedOption === "Color") {
      return (
        <FlatList
          data={colorData}
          keyExtractor={(item) => item.id}
          renderItem={renderColorItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: 75,
                  width: 75,
                  backgroundColor: colors.grey_default,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                  marginEnd: 16,
                }}
              >
                <Add />
              </View>

              <TouchableOpacity
                onPress={openColorModal}
                style={{
                  height: 75,
                  width: 75,
                  backgroundColor: colors.grey_default,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                  marginEnd: 16,
                }}
              >
                <Custom />
              </TouchableOpacity>
            </View>
          }
        />
      );
    } else if (selectedOption === "Background") {
      return (
        <FlatList
          data={backgroundImages}
          keyExtractor={(item) => item.id}
          renderItem={renderBackgroundItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      );
    } else if (selectedOption === "Blur") {
      return (
        <FlatList
          data={backgroundBlur}
          keyExtractor={(item) => item.id}
          renderItem={renderBlurItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      );
    }
    // Add more conditions as needed
  };

  return (
    <View style={styles.main}>
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
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <SafeAreaView style={[styles.main]}>
          {/* header */}
          {/* <View style={[styles.row,{backgroundColor:selectedColor}]}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.headertitle}>Customize</Text>
        </View> */}
          <CustomHeader
            navigation={navigation}
            selectedColor={
              selectedOption === "Background" || selectedOption === "Blur"
                ? "transparent"
                : selectedColor
            }
            title="Custom Screen"
          />
          {/* center container*/}
          <View style={{ height: "80%" }}>
            <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View
              style={{ flexDirection: "row", marginStart: 39, marginTop: 26 }}
            >
              <TouchableOpacity onPress={() => setSelectedOption("Color")}>
                <Text
                  style={{
                    color:
                      selectedOption === "Color"
                        ? colors.black
                        : colors.light_grey,
                    fontFamily: fonts.medium.InterMedium,
                  }}
                >
                  Color
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedOption("Background")}>
                <Text
                  style={{
                    marginHorizontal: 25,
                    color:
                      selectedOption === "Background"
                        ? colors.black
                        : colors.light_grey,
                    fontFamily: fonts.medium.InterMedium,
                  }}
                >
                  Background
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedOption("Blur")}>
                <Text
                  style={{
                    color:
                      selectedOption === "Blur"
                        ? colors.black
                        : colors.light_grey,
                    fontFamily: fonts.medium.InterMedium,
                  }}
                >
                  Blur
                </Text>
              </TouchableOpacity>
            </View>

            {/* Render the images based on the selected option */}
            <View
              style={{
                marginStart:
                  selectedOption === "Background"
                    ? 15
                    : selectedOption === "Color"
                    ? 24
                    : selectedOption === "Blur"
                    ? 24
                    : null,
                marginTop: 26,
              }}
            >
              {renderImages()}
              {renderColorModal()}
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ChangeBackgroundScreen;
