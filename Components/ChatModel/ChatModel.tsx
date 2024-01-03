import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./Style";
import { Image } from "react-native-svg";
import Search from "../../assets/svgs/Search";
import fonts from "../../Utils/utils";
import colors from "../../Utils/colors";
import Delete from "../../assets/svgs/Delete";
import Media from "../../assets/svgs/Media";
import Switch from "../../assets/svgs/Switch";
import Mute from "../../assets/svgs/Mute";
import Favorites from "../../assets/svgs/Favorites";
import Customize from "../../assets/svgs/Customize";

const ChatModel = ({ visible, onDismiss }) => {
  const demo = [
    { name: "Search", image: <Search /> },
    { name: "Add to favorites", image: <Favorites /> },
    { name: "Customize", image: <Customize /> },

    { name: "Mute conversation", image: <Mute /> },
    { name: "Switch the Number", image: <Switch /> },
    { name: "Shared media", image: <Media /> },
    { name: "Delete messages", image: <Delete /> },
  ];

  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <Pressable onPress={onDismiss}>
        <View style={styles.smallModalContainer}>
          <View style={styles.smallModalContent}>
            <FlatList
              data={demo}
              renderItem={(item) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={{ flexDirection: "row", padding: 15 ,gap:12 }}
                    >
                      {item?.item?.image}
                      <Text style={{fontFamily:fonts.regular.circularstd, color:colors.black ,fontSize:16}}>{item.item.name}</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: "#cdd1ce",
                        width: "100%",
                        height: 1,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ChatModel;
