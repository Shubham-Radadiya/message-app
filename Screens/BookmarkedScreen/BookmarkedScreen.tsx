import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
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

const BookmarkedScreen = ({ navigation }) => {
  const { selectedColor } = useColor();
  const { selectedBackground } = useBackground();

  const dataList = [
    {
      id: 1,
      name: "JK-620016",
      date: "27/09/2023",
      dec: "Recharge today with a Jio plan of Rs",
    },
    {
      id: 2,
      name: "JK-620016",
      date: "27/09/2023",
      dec: "Recharge today with a Jio plan of Rs",
    },
    {
      id: 3,
      name: "JK-620016",
      date: "27/09/2023",
      dec: "Recharge today with a Jio plan of Rs",
    },
    {
      id: 4,
      name: "JK-620016",
      date: "27/09/2023",
      dec: "Recharge today with a Jio plan of Rs",
    },
  ];

  const renderItem = ({ item }) => {
    const firstLetter = item?.name.charAt(0).toUpperCase();
    return (
      <View style={styles.itemContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>

        <View style={{ marginTop: 5 }}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginStart: 60,
            }}
          >
            <Text
              style={{
                fontFamily: fonts.regular.circularstd,
                fontSize: 17,
                // color: colors.black,
                color:
                  selectedColor.color === "#000000" ? "#ffffff" : colors.black,
              }}
            >
              {item?.name}
            </Text>
            <Text
              style={{
                fontFamily: fonts.bold.circularstd,
                fontSize: 12,
                color:
                  selectedColor.color === "#000000" ? "#ffffff" : "#333333",
              }}
            >
              {item?.date}
            </Text>
          </View>
          <View style={{ marginStart: 60 }}>
            <Text
              style={{
                fontFamily: fonts.regular.circularstd,
                fontSize: 13,
                color: colors.secondary,
              }}
            >
              {item?.dec}
            </Text>
          </View>
        </View>
        {/* divider */}
        <View style={styles.divider} />
      </View>
    );
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
            <Text style={styles.headertitle}>Bookmarked Messages</Text>
          </View>
        </View> */}
          <CustomHeader
            navigation={navigation}
            selectedColor={
              selectedBackground?.length > 0 ? "transparent" : selectedColor
            }
            title="Bookmarked Messages"
          />

          {/* divider */}
          <View style={[styles.divider, { marginTop: 0 }]} />

          {/* center container*/}
          {dataList?.length ? (
            <View>
              <FlatList
                data={dataList}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id.toString()}
              />
            </View>
          ) : (
            <View
              style={{
                width: 250,
                height: 200,
                alignSelf: "center",
                marginTop: 81,
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/bookmark.png")}
                style={{ height: "100%", width: "100%" }}
              />
              <Text
                style={{
                  fontFamily: fonts.regular.circularstd,
                  fontSize: 17,
                  textAlign: "center",
                  // color: colors.dark_grey,
                  color:
                    selectedColor.color === "#000000"
                      ? "#ffffff"
                      : colors.dark_grey,
                }}
              >
                No bookmarked messages
              </Text>
              <Text
                style={{
                  fontFamily: fonts.regular.circularstd,
                  fontSize: 12,
                  textAlign: "center",
                  // color: colors.light_grey,
                  color:
                    selectedColor.color === "#000000" ? "#ffffff" : light_grey,

                  marginTop: 26,
                }}
              >
                Tap and hold on any message to bookmark it{"\n"}for easy
                finding.
              </Text>
            </View>
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BookmarkedScreen;
