import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  TextInput,
  Modal,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Style";
import Back from "../../assets/svgs/Back";
import fonts from "../../Utils/utils";
import colors from "../../Utils/colors";
import { useColor } from "../../Common/ColorContext";
import CustomHeader from "../../Common/CustomHeader";
import { useBackground } from "../../Common/BackgroundContext";
import More from "../../assets/svgs/More";
import CameraChat from "../../assets/svgs/CameraChat";
import Send from "../../assets/svgs/Send";
import Call from "../../assets/svgs/Call";
// @ts-ignore
import SmsAndroid from "react-native-get-sms-android";
// @ts-ignore
import SmsListener from "react-native-android-sms-listener";
import ThreeDots from "../../assets/svgs/ThreeDots";
import ChatModel from "../../Components/ChatModel/ChatModel";
import Contacts from "react-native-contacts";
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

const ChatScreen = ({ navigation, route, isTransparent }) => {
  const { selectedColor } = useColor();

  const { selectedBackground } = useBackground();
  const routeParams = route.params;
  const thread_id = routeParams?.thread_id;
  const [modalVisible, setModalVisible] = useState(false);
  const [smallModalVisible, setSmallModalVisible] = useState(false);
  const [smsData, setSmsData] = useState<any>([]);
  const [text, setText] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [chatScreeModel, setChatScreenModel] = useState<boolean>(false);

  var receivedFilter = {
    box: "inbox", // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    thread_id: thread_id,
  };

  var sentFilter = {
    box: "sent", // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    thread_id: thread_id,
  };

  useEffect(() => {
    let subscription = SmsListener.addListener((message: any) => {
      // console.info(message);
      getSMSData();
    });
    getSMSData();
    return () => subscription.remove();
  }, [thread_id]);

  const getSMSData = async () => {
    let received: any = [];
    let sent: any = [];
    const permissions = await requestSmsPermission();
    if (permissions) {
      setLoading(true);
      // getting sent SMS data
      SmsAndroid.list(
        JSON.stringify(sentFilter),
        (fail: any) => {
          setLoading(false);
          console.log("Failed with this error for sent: " + fail);
        },
        (count: any, smsList: any) => {
          const data = JSON.parse(smsList);
          sent.push(...data);
          // console.log("sent: ", sent)
          // setLoading(false);
          // var arr = JSON.parse(smsList);

          // arr.forEach(function (object: any) {
          //   // console.log('Object: ' + object);
          //   // console.log('-->' + object.date);
          //   // console.log('-->' + object.body);
          // });
        }
      );
      // getting received SMS data
      SmsAndroid.list(
        JSON.stringify(receivedFilter),
        (fail: any) => {
          setLoading(false);
          console.log("Failed with this error for sent: " + fail);
        },
        async (count: any, smsList: any) => {
          const data = JSON.parse(smsList);
          received.push(...data);
          const combined: any = [...received, ...sent];
          combined.sort((a: any, b: any) => a.date - b.date);
          combined.reverse();
          // console.log("combined sorted: ", combined);
          const contact = await Contacts.getContactsByPhoneNumber(
            combined[0]?.address
          );
          combined[0].name =
            contact.length > 0 ? contact[0].displayName : combined[0].address;
          setSmsData(combined);
          // setLoading(false);
          // var arr = JSON.parse(smsList);

          // arr.forEach(function (object: any) {
          //   // console.log('Object: ' + object);
          //   // console.log('-->' + object.date);
          //   // console.log('-->' + object.body);
          // });
        }
      );
      // const combined: any = received.concat(sent);
      // combined.sort((a: any, b: any) => a.date - b.date);
      // console.log("combined sorted: ", received)
      // setSmsData(combined);
      setLoading(false);
    }
  };

  const requestSmsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        PermissionsAndroid.PERMISSIONS.READ_SMS,
      ]);
      if (granted) {
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

  // const getSmsData = async () => {
  //   const permissions = await requestSmsPermission();
  //   if (permissions) {
  //     setLoading(true);
  //     SmsAndroid.list(
  //       JSON.stringify(filter),
  //       (fail: any) => {
  //         setLoading(false);
  //         console.log('Failed with this error: ' + fail);
  //       },
  //       (count: any, smsList: any) => {
  //         console.log('Count: ', count);
  //         console.log('List: ', JSON.parse(smsList));
  //         const data = JSON.parse(smsList);
  //         // const groupedData = groupByThread(JSON.parse(smsList));
  //         // const sortedData = sortMessagesByDateSent(groupedData);
  //         // console.log('sorted data: ', sortedData);
  //         // const result = groupByThread(data);
  //         setSmsData(data);
  //         setLoading(false);
  //         var arr = JSON.parse(smsList);

  //         arr.forEach(function (object: any) {
  //           // console.log('Object: ' + object);
  //           // console.log('-->' + object.date);
  //           // console.log('-->' + object.body);
  //         });
  //       },
  //     );
  //   }
  // };

  const formatDate = (dateString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(formattedDate);
  };

  // console.log("selectedColor.color --> chat" ,selectedColor.color)

  const renderItem = ({ item }) => {
    const isSentMessage = item.type === 2; // Assuming type 2 represents sent messages

    return (
      <View
        style={[
          styles.messageContainer,
          {
            backgroundColor:
              selectedColor?.color === "#000000" ? colors.dark_grey : "#F5F5F5",
          },
          isSentMessage ? [styles.sentMessage, {backgroundColor: selectedColor?.color ? selectedColor?.color : colors.orange}] : styles.receivedMessage,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            { color: isSentMessage ? colors.white : colors.black },
            {
              color:
                selectedColor?.color === "#000000"
                  ? colors.white
                  : colors.dark_grey,
            },
          ]}
        >
          {item.body}
        </Text>
        <Text
          style={[
            styles.messageTime,
            { color: isSentMessage ? colors.white : colors.black },
            {
              color:
                selectedColor?.color === "#000000"
                  ? colors.white
                  : colors.dark_grey,
            },
          ]}
        >
          {formatDate(item.date)}
        </Text>
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
              <Text style={styles.headertitle}>Settings</Text>
  
            </View>
          </View> */}
          {/* <CustomHeader navigation={navigation} selectedColor={selectedColor} title="Settings" /> */}

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
                {smsData[0]?.name || smsData[0]?.address}
              </Text>
            </View>

            <View style={{ marginEnd: 18 }}>
              <Call
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
              {/* <ThreeDots/> */}
            </View>
            <TouchableOpacity onPress={() => setChatScreenModel(true)}>
              <ThreeDots
                stroke={
                  selectedColor.color === "#000000" ? colors.white : "#212121"
                }
              />
            </TouchableOpacity>
          </View>
          {/* divider */}
          <View
            style={[
              styles.divider,
              { marginTop: 0, marginBottom: 10 },
              {
                marginTop: 0,
                backgroundColor:
                  selectedColor?.color === "#000000"
                    ? colors.dark_grey
                    : colors.grey_default,
              },
            ]}
          />

          <View style={{ marginBottom: 180 }}>
            <FlatList
              data={smsData}
              renderItem={renderItem}
              keyExtractor={(item) => item._id.toString()}
              inverted
            />
          </View>

          {/* 
      <View style={{flexDirection:'row' , position:'absolute' , bottom:0 , justifyContent:'center'}}>
      <View style={{backgroundColor:'#e1e3e1',flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderRadius:10,marginTop:15}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TextInput placeholder='hello' style={{marginLeft:15}}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
                <More/>
            </View>
            <View>
                <CameraChat/>
            </View>
        </View>
      </View>
      <View style={{marginTop:15 , backgroundColor:colors.orange,paddingVertical:16 , paddingStart:18, paddingEnd:14 , borderRadius:30}}>
        <Send/>
      </View>
      </View> */}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:
                selectedColor?.color === "#000000"
                  ? "#000000"
                  : selectedBackground
                  ? "transparent"
                  : colors.white,
              // backgroundColor: colors.white,
              position: "absolute",
              bottom: 0,
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
                  backgroundColor: selectedColor?.color ? selectedColor?.color : colors.orange,
                  paddingVertical: 16,
                  paddingStart: 18,
                  paddingEnd: 14,
                  borderRadius: 30,
                  marginStart: 9,
                }}
                onPress={() => {
                  SmsAndroid.autoSend(
                    smsData[0]?.address,
                    text,
                    (fail) => {
                      console.log("Failed with this error: " + fail);
                    },
                    (success) => {
                      setText("");
                      console.log("SMS sent successfully");
                      getSMSData();
                    }
                  );
                }}
              >
                <Send />
              </TouchableOpacity>
            </View>
          </View>

          <ChatModel
            visible={chatScreeModel}
            onDismiss={() => setChatScreenModel(false)}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ChatScreen;
