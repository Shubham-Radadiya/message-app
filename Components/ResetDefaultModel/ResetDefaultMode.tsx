import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./Style";
import { useColor } from "../../Common/ColorContext";
import colors from "../../Utils/colors";

const ResetDefaultMode = ({ visible, onDismiss }) => {
  const { selectedColor } = useColor();
  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <Pressable style={styles.backdropcontainer} onPress={onDismiss}>
        <Pressable
          style={[
            styles.contentcontainer,
            {
              backgroundColor:
                selectedColor?.color === "#000000"
                  ? colors.dark_grey
                  : colors.white,
            },
          ]}
          onPress={() => null}
        >
          {/* top line */}
          <View style={styles.top} />

          {/* title */}
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
            Reset to Default
          </Text>
          <Text
            style={[
              styles.topSubTitle,
              {
                color:
                  selectedColor.color === "#000000"
                    ? "#ffffff"
                    : colors.dark_grey,
              },
            ]}
          >
            Are you sure you want to {"\n"} continue?
          </Text>

          {/* divider */}
          <View style={styles.divider} />

          {/* buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[
                styles.reset,
                styles.commonbutton,
                {
                  backgroundColor:
                    selectedColor?.color === "#000000"
                      ? "#38291c"
                      : colors.cream,
                },
              ]}
              onPress={onDismiss}
            >
              <Text
                style={[
                  styles.resettext,
                  {
                    color:
                      selectedColor.color === "#000000"
                        ? "#ffffff"
                        : colors.dark_grey,
                  },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.commonbutton, styles.ok]}>
              <Text style={styles.oktext}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ResetDefaultMode;
