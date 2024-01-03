// CustomHeader.js
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import fonts from "../Utils/utils";
import colors from "../Utils/colors";
import Back from "../assets/svgs/Back";
import { useBackground } from "./BackgroundContext";

const CustomHeader = ({ navigation, selectedColor, title, isTransparent }) => {
  const defaultTitleColor = colors.black;
  const { selectedBackground } = useBackground();

  console.log("selectedColor?.statusColorv", selectedColor);
  return (
    <View
      style={{
        backgroundColor: isTransparent ? "transparent" : selectedColor.color,
      }}
    >
      {selectedColor?.statusColor === "#FFFFFF" ? (
        <StatusBar
          backgroundColor={
            isTransparent ? "transparent" : selectedColor?.statusColor
          }
          barStyle={"dark-content"}
        />
      ) : selectedColor?.statusColor === "#000000" ||
        selectedColor?.statusColor === "#1993E7" ||
        selectedColor?.statusColor === "#13874B" ||
        selectedColor?.statusColor === "#754CB2" ? (
        <StatusBar
          backgroundColor={
            isTransparent ? "transparent" : selectedColor?.statusColor
          }
          barStyle={"light-content"}
        />
      ) : selectedBackground?.length > 0 ? (
        <StatusBar backgroundColor={"#000000"} barStyle={"default"} />
      ) : (
        <StatusBar barStyle={"default"} />
      )}
      <View style={styles.row}>
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
        <Text
          style={[
            styles.headertitle,
            {
              color: isTransparent
                ? "transparent"
                : selectedColor?.statusColor === "#FFFFFF"
                ? colors.black
                : selectedColor?.color === "#000000" ||
                  selectedColor?.color === "#1993E7" ||
                  selectedColor?.color === "#13874B" ||
                  selectedColor?.color === "#754CB2"
                ? colors.white
                : selectedColor?.color === "undefined"
                ? "#000000"
                : "#000000",
            },
          ]}
        >
          {title}
        </Text>
      </View>

      {/* Add more components/icons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 15,
    marginLeft: 21,
    paddingTop: 18,
    paddingBottom: 26,
  },
  headertitle: {
    fontSize: 18,
    fontFamily: fonts.medium.circularstd,
    color: colors.dark_grey,
    marginLeft: 36,
  },
});

export default CustomHeader;
