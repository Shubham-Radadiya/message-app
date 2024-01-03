import React, { FC, useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  PermissionsAndroid,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Style";
import Menu from "../../assets/svgs/Menu";
import Filter from "../../assets/svgs/Filter";
import Search from "../../assets/svgs/Search";
// @ts-ignore
import SmsAndroid from "react-native-get-sms-android";
// @ts-ignore
import SmsListener from "react-native-android-sms-listener";
import moment from "moment";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";
import UserMenuModal from "../../Components/UserMenuModal/UserMenuModal";
import FilterModal from "../../Components/FilterModal/FilterModal";
import { NavProps } from "../../Navigation/NavigationTypes";
import Contacts from "react-native-contacts";
import { useColor } from "../../Common/ColorContext";
import { useFocusEffect } from "@react-navigation/native";
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
import Plus from "../../assets/svgs/Plus";

const InboxScreen: FC<NavProps> = ({ navigation }) => {
  const [smsData, setSmsData] = useState<any>([]);
  const [messages, setMessages] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [contacts, setContacts] = useState<any>([]);
  const { selectedColor } = useColor();
  const { selectedBackground } = useBackground();

  var filter = {
    box: "", // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
  };

  useEffect(() => {
    let subscription: any;
    checkPermission(subscription);
    return () => {
      subscription.remove();
    };
  }, []);

  const checkPermission = async (subscription: any) => {
    const permissions = await requestSmsPermission();
    if (permissions) {
      subscription = SmsListener.addListener((message: any) => {
        console.info(message);
        getSmsData();
      });
      getSmsData();
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const requestSmsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        PermissionsAndroid.PERMISSIONS.READ_SMS,
      ]);
      if (
        granted?.["android.permission.SEND_SMS"] === "granted" &&
        granted?.["android.permission.RECEIVE_SMS"] === "granted" &&
        granted?.["android.permission.READ_SMS"] === "granted"
      ) {
        console.log("SMS permissions are given!");
        return true;
      } else {
        console.log("SMS permissions denied!");
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const getSmsData = async () => {
    const permissions = await requestSmsPermission();
    if (permissions) {
      setLoading(true);
      SmsAndroid.list(
        JSON.stringify(filter),
        (fail: any) => {
          setLoading(false);
          console.log("Failed with this error: " + fail);
        },
        async (count: any, smsList: any) => {
          console.log("Count: ", count);
          console.log("List: ", JSON.parse(smsList));
          const data = JSON.parse(smsList);
          // const groupedData = groupByThread(JSON.parse(smsList));
          // const sortedData = sortMessagesByDateSent(groupedData);
          // console.log('sorted data: ', sortedData);
          let result: any = groupByThread(data);
          console.log("result: ", result);
          for (let i = 0; i < result?.length; i++) {
            const contact = await Contacts.getContactsByPhoneNumber(
              result[i]?.address
            );
            result[i].name =
              contact.length > 0 ? contact[0].displayName : result[i].address;
          }
          setSmsData(result);
          setLoading(false);
          var arr = JSON.parse(smsList);

          arr.forEach(function (object: any) {
            // console.log('Object: ' + object);
            // console.log('-->' + object.date);
            // console.log('-->' + object.body);
          });
        }
      );
    }
  };

  const groupByThread = (data: any) => {
    const thread_idMap = new Map();

    // Iterate through the data array
    for (const message of data) {
      const thread_id = message?.thread_id;

      // If the address is not in the map or the current message has a later date, update the map
      if (
        !thread_idMap.has(thread_id) ||
        message?.date > thread_idMap.get(thread_id)?.date
      ) {
        thread_idMap.set(thread_id, message);
      }
    }
    const result = Array.from(thread_idMap.values());
    return result;
  };

  // const groupByThread = (data: any) => {
  //   return data.reduce((result: any, item: any) => {
  //     const { thread_id } = item;
  //     if (!result[thread_id]) {
  //       result[thread_id] = [];
  //     }
  //     result[thread_id].push(item);
  //     return result;
  //   }, {});
  // };

  // const sortMessagesByDateSent = (groupedData: any): any => {
  //   const sortedData = { ...groupedData };

  //   for (const thread_id in sortedData) {
  //     sortedData[thread_id].sort(
  //       (a: any, b: any) => b?.date_sent - a?.date_sent,
  //     );
  //     sortedData[thread_id] = sortedData[thread_id]?.reverse(); // Reverse the order
  //   }

  //   return sortedData;
  // };

  const goChatScreen = () => {};

  const getContactName = async (phoneNumber: string) => {
    const contact = await Contacts.getContactsByPhoneNumber(phoneNumber);
    if (contact?.length) {
      return contact[0]?.displayName;
    } else {
      return phoneNumber;
    }
  };

  return (
    <>
      <Spinner color={colors.orange} visible={loading} />
      <View
        style={[
          styles.container,
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
          <SafeAreaView
            style={[styles.container, { paddingTop: 4, paddingHorizontal: 20 }]}
          >
            {/* main header with menu, filter and search icon */}
            <View
              style={[
                styles.headerContainer,
                {
                  backgroundColor:
                    selectedColor?.color === "#000000"
                      ? "#38291c"
                      : colors.cream,
                },
              ]}
            >
              <View style={styles.row}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation?.toggleDrawer()}
                >
                  <Menu
                    stroke={
                      selectedColor.color === "#000000"
                        ? colors.white
                        : "#212121"
                    }
                  />
                </TouchableOpacity>
                <TextInput
                  style={styles.placeholder}
                  placeholder="Search Messages"
                  placeholderTextColor={colors.light_grey}
                  onPressIn={() => {
                    // Keyboard.dismiss();
                    navigation?.navigate("SearchTabScreen");
                  }}
                />
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setFilterModal(true)}
                >
                  <Filter
                    stroke={
                      selectedColor.color === "#000000"
                        ? colors.white
                        : "#212121"
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ marginLeft: 20 }}
                >
                  <Search
                    stroke={
                      selectedColor.color === "#000000"
                        ? colors.white
                        : "#212121"
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* main header end */}

            {/* user options modal */}
            <UserMenuModal
              visible={userModal}
              onDismiss={() => setUserModal(false)}
              user={{ name: "Ronald Mccoy" }}
            />

            {/* filter modal */}
            <FilterModal
              visible={filterModal}
              onDismiss={() => setFilterModal(false)}
            />

            {/* conversation list */}
            {smsData?.length > 0 ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={smsData}
                renderItem={({ item }) => {
                  // var name = "";
                  // Contacts.getContactsByPhoneNumber(item?.address)
                  // .then(res => {
                  //   console.log("res: ", res)
                  //   name = res[0]?.displayName;
                  // })
                  // .catch(e => console.log("error: ", e))
                  // const contact = Contacts.getContactsByPhoneNumber(item?.address);
                  // console.log("contact: ", contact);
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ChatScreen", {
                          thread_id: item?.thread_id,
                        })
                      }
                      key={item}
                      style={[styles.row, { marginVertical: 5, flex: 1 }]}
                    >
                      <Image
                        source={require("../../assets/images/person.png")}
                        style={styles.avatar}
                      />
                      <View style={{ flex: 1, marginLeft: 16 }}>
                        <View
                          style={[
                            styles.row,
                            { justifyContent: "space-between" },
                          ]}
                        >
                          <Text
                            style={[
                              styles.title,
                              {
                                color:
                                  selectedColor.color === "#000000"
                                    ? "#ffffff"
                                    : colors.dark_grey,
                              },
                            ]}
                          >
                            {item?.name || item?.address}
                          </Text>
                          <Text
                            style={[
                              styles.date,
                              {
                                color:
                                  selectedColor.color === "#000000"
                                    ? "#ffffff"
                                    : colors.dark_grey,
                              },
                            ]}
                          >
                            {moment(item?.date).format("DD/MM/YYYY")}
                          </Text>
                        </View>

                        <View
                          style={[
                            styles.row,
                            { justifyContent: "space-between" },
                          ]}
                        >
                          <Text style={styles.body}>
                            {item?.body?.length > 50
                              ? `${item?.body?.slice(0, 50)}...`
                              : item?.body}
                          </Text>
                          {item?.read === 0 && (
                            <View
                              style={[
                                styles.unreaddot,
                                {
                                  backgroundColor: selectedColor?.color
                                    ? selectedColor?.color
                                    : colors.orange,
                                },
                              ]}
                            />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: colors.light_grey,
                    fontFamily: fonts.regular.circularstd,
                    fontSize: 18,
                  }}
                >
                  No conversations yet.
                </Text>
              </View>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate("StartChatScreen")}
              style={{
                backgroundColor: selectedColor?.color
                  ? selectedColor?.color
                  : colors.orange,
                position: "absolute",
                bottom: 108,
                right: 24,
                padding: 13,
                borderRadius: 50,
              }}
            >
              <Plus />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

export default InboxScreen;
