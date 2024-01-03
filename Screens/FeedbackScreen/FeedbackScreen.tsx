import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import Feedback from "../../assets/svgs/Feedback";
import fonts from "../../Utils/utils";
import Camera from "../../assets/svgs/Camera";
import colors from "../../Utils/colors";
import { useColor } from "../../Common/ColorContext";

const FeedbackScreen = () => {
  const { selectedColor } = useColor();

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
      <SafeAreaView style={styles.main}>
        {/* header */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Back />
          </TouchableOpacity>
        </View>

        {/* divider */}
        {/* <View style={styles.divider} /> */}
        <View style={{}}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 31,
            }}
          >
            <Feedback />
          </View>

          {/* <Image source={require('./image/feedback.png')} style={{alignSelf:'center',marginTop:30}}/> */}
          <Text
            style={{
              // color: "#000",
              color:
                selectedColor.color === "#000000" ? "#ffffff" : colors.black,

              fontSize: 20,
              textAlign: "center",
              fontFamily: fonts.regular.circularstd,
              marginBottom: 21,
            }}
          >
            Tell us the problem you encountered
          </Text>
          <View style={{ marginHorizontal: 47 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  backgroundColor:
                    selectedColor.color === "#000000" ? "#282b2d" : "#CFD7E0",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={[
                    styles.btnStyle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? colors.light_grey
                          : colors.black,
                    },
                  ]}
                >
                  {" "}
                  The message is not sent
                </Text>
              </View>
              <View
                style={{
                  backgroundColor:
                    selectedColor.color === "#000000" ? "#282b2d" : "#CFD7E0",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={[
                    styles.btnStyle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? colors.light_grey
                          : colors.black,
                    },
                  ]}
                >
                  {" "}
                  Bugs
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              <View
                style={{
                  backgroundColor:
                    selectedColor.color === "#000000" ? "#282b2d" : "#CFD7E0",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={[
                    styles.btnStyle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? colors.light_grey
                          : colors.black,
                    },
                  ]}
                >
                  {" "}
                  Too many ads
                </Text>
              </View>
              <View
                style={{
                  backgroundColor:
                    selectedColor.color === "#000000" ? "#282b2d" : "#CFD7E0",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={[
                    styles.btnStyle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? colors.light_grey
                          : colors.black,
                    },
                  ]}
                >
                  {" "}
                  Suggestions
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              <View
                style={{
                  backgroundColor:
                    selectedColor.color === "#000000" ? "#282b2d" : "#CFD7E0",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={[
                    styles.btnStyle,
                    {
                      color:
                        selectedColor.color === "#000000"
                          ? colors.light_grey
                          : colors.black,
                    },
                  ]}
                >
                  {" "}
                  Others
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              //   width: "100%",
              height: 500,
            backgroundColor:
                    selectedColor.color === "#000000" ? "#282b2d" : "#CFD7E0",
              marginTop: 28,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                textAlign: "left",
                alignSelf: "center",
                fontFamily: fonts.regular.circularstd,
                marginTop: 28,
                color:
                        selectedColor.color === "#000000"
                          ? colors.light_grey
                          : colors.black,
                          lineHeight:16.44
              }}
            >
              Please tell us more details so that we can locate and {"\n"}solve
              your problem faster (at least 6 characters)
            </Text>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 90 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // backgroundColor: "red",
                  alignItems: "center",
                  // alignSelf: "center",
                  justifyContent: "space-around",
                  // justifyContent: "center",
                }}
              >
                <View style={{ marginBottom: 83 }}>
                  <Camera />
                </View>
                <View
                  style={{
                    backgroundColor: "#FF9900",
                    // width: "40%",
                    padding: 10,
                    borderRadius: 30,
                    // marginLeft: 10,
                    marginBottom: 83,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      // color: "#000",
                      color:
                      selectedColor.color === "#000000"
                        ? colors.white
                        : colors.black,
                      fontSize: 18,
                      fontFamily: fonts.regular.circularstd,
                      paddingHorizontal: 42,
                      paddingVertical: 7,
                    }}
                  >
                    Send
                  </Text>
                </View>
                <View style={{}}></View>
              </View>
            </View>
          </View>
        </View>
        {/* center container*/}
      </SafeAreaView>
    </View>
  );
};

export default FeedbackScreen;
