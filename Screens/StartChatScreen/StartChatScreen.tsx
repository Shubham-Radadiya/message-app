import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Style";
import { useColor } from "../../Common/ColorContext";
import { useBackground } from "../../Common/BackgroundContext";
import Back from "../../assets/svgs/Back";
import Contacts from "react-native-contacts";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";
import Adduser from "../../assets/svgs/Adduser";
import Sim from "../../assets/svgs/Sim";
import Call from "../../assets/svgs/Call";
import Calll from "../../assets/svgs/Calll";
import CameraChat from "../../assets/svgs/CameraChat";
import More from "../../assets/svgs/More";
import Mic from "../../assets/svgs/Mic";
const StartChatScreen = ({ navigation, isTransparent }) => {
  const { selectedColor } = useColor();
  const { selectedBackground } = useBackground();
  const [text, setText] = useState<any>("");

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Request permission to access contacts
    Contacts.checkPermission().then((permission) => {
      if (permission === "authorized") {
        // If permission is granted, fetch contacts
        Contacts.getAll().then((contacts) => {
          setContacts(contacts);
        });
      }
    });
  }, []);

  const btnCall = (call) => {
    Linking.openURL(`tel:${call}`);
  };

  const renderItem = ({ item, ind }) => {
    // console.log("item", item);
    return (
      <>
        <View style={styles.contactCon}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.placeholder}>
              <Text style={styles.txt}>{item?.givenName[0]}</Text>
            </View>
            <View style={styles.itemDat}>
              <Text style={[styles.name,{color:
                    selectedColor.color === "#000000"
                      ? "#ffffff"
                      : colors.light_grey,}]}>
                {item?.givenName} {item?.middleName && item.middleName + " "}
                {item?.familyName}
              </Text>
              <Text style={styles.phoneNumber}>
                Moobile: {item?.phoneNumbers[0]?.number}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{}}
            onPress={() => btnCall(item?.phoneNumbers[0]?.number)}
          >
            <Calll />
          </TouchableOpacity>
        </View>
        {/* divider */}
        <View style={[styles.divider, { marginTop: 18,backgroundColor:
                      selectedColor?.color === "#000000"
                        ? colors.black
                        : colors.grey_default, }]} />

        
      </>
    );
  };
  return (
    <View style={[styles.main,{
      backgroundColor:
        selectedColor?.color === "#000000" ? "#000000" : colors.white,
    },]}>
      <SafeAreaView style={styles.main}>
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

          <View style={{ width: 253 }}>
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
              New Messages
            </Text>
          </View>
          <View style={{ left: 50 }}>
            <Sim />
          </View>
        </View>

        <View
          style={[
            styles.rowBottom,
            {},
            {
              backgroundColor: isTransparent
                ? "transparent"
                : selectedColor.color,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 21,
            }}
          >
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <Text
                style={{ fontSize: 18, fontFamily: fonts.regular.circularstd,color:
                  selectedColor.color === "#000000"
                    ? "#ffffff"
                    : colors.light_grey, }}
              >
                To:
              </Text>
            </TouchableOpacity>

            <View>
              <TextInput
                style={[styles.addContactFild,{
                  backgroundColor:
                    selectedColor?.color === "#000000" ? "#000000" : colors.cream,
                    color: selectedColor?.color === "#000000" ? "white" : colors.dark_grey
                },]}
                placeholderTextColor={selectedColor?.color === "#000000" ? colors.cream : colors.light_grey}
                placeholder="Add Contact or Number"
              />
            </View>
            <View style={{ left: 15 }}>
              <Adduser />
            </View>
          </View>
        </View>
        {/* divider */}
        <View style={[styles.divider, { marginTop: 0, marginBottom: 5 }]} />

        <View>
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View
            style={{
              
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:
                selectedColor?.color === "#000000"
                  ? "#000000"
                  : selectedBackground
                  ? "transparent"
                  : selectedColor.color,
              // backgroundColor: colors.white,
              position: "absolute",
              // bottom: 10,
              top:672,
              width: "100%",
            }}
          >
            {/* divider */}
            {!selectedBackground && (
              <View
                style={[
                  styles.divider,
                  {
                    marginTop: 0,
                    marginBottom:0,
                    backgroundColor:
                      selectedColor?.color === "#000000"
                        ? colors.dark_grey
                        : colors.grey_default,
                  },
                ]}
              />
            )}

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 9,
                paddingVertical: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  // backgroundColor: colors.grey_default,
                  backgroundColor:
                    selectedColor?.color === "#000000" ? "#2d2d2d" : "#F5F5F5",
                  width: "80%",
                  borderRadius: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextInput
                  placeholder="Type message..."
                  placeholderTextColor={
                    selectedColor?.color === "#000000"
                      ? colors.light_grey
                      : "#1D2433"
                  }
                  style={{
                    height: 56,
                    paddingLeft: 20,
                    flex: 1,
                    color:
                      selectedColor?.color === "#000000"
                        ? colors.white
                        : "#000000",
                  }}
                  value={text}
                  onChangeText={(txt) => setText(txt)}
                ></TextInput>
                <View style={{ flexDirection: "row", gap: 12 }}>
                  <TouchableOpacity>
                    <More />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginEnd: 26 }}>
                    <CameraChat />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.orange,
                  paddingVertical: 16,
                  paddingStart: 18,
                  paddingEnd: 14,
                  borderRadius: 30,
                  marginStart: 9,
                }}
                
              >
                <Mic />
              </TouchableOpacity>
            </View>
          </View>

      </SafeAreaView>
    </View>
  );
};

export default StartChatScreen;
