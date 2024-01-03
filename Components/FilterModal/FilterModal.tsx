import React, { FC, useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Style';

type ModalProps = {
  visible: boolean;
  onDismiss: () => void;
};

const FilterModal: FC<ModalProps> = ({ visible, onDismiss }) => {
  const [selectedSpeciality, setSelectedSpeciality] = useState<any>();
  const [selectedTime, setSelectedTime] = useState<any>();

  const specialityData = [
    {
      id: 1,
      value: 'All',
    },
    {
      id: 2,
      value: 'Mute',
    },
    {
      id: 3,
      value: 'Unread',
    },
    {
      id: 4,
      value: 'Groups',
    },
  ];
  const timeData = [
    {
      id: 1,
      value: 'Default',
    },
    {
      id: 2,
      value: 'Month',
    },
    {
      id: 3,
      value: 'Today',
    },
    {
      id: 4,
      value: 'Year',
    },
  ];

  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <Pressable style={styles.backdropcontainer} onPress={onDismiss}>
        <Pressable style={styles.contentcontainer} onPress={() => null}>
          {/* top line */}
          <View style={styles.top} />

          {/* title */}
          <Text style={styles.title}>Filter</Text>

          {/* divider */}
          <View style={styles.divider} />

          {/* speciality */}
          <Text style={styles.subtitle}>Speciality</Text>
          <FlatList
            data={specialityData}
            style={styles.list}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item?.id}
                style={
                  selectedSpeciality?.id === item?.id
                    ? item?.id !== 1
                      ? [styles.selected, { marginLeft: 12 }]
                      : styles.selected
                    : item?.id !== 1
                      ? [styles.notselected, { marginLeft: 12 }]
                      : styles.notselected
                }
                onPress={() => setSelectedSpeciality(item)}
                activeOpacity={0.6}>
                <Text
                  style={
                    selectedSpeciality?.id === item?.id
                      ? styles.selectedtext
                      : styles.notselectedtext
                  }>
                  {item?.value}
                </Text>
              </TouchableOpacity>
            )}
          />

          {/* time */}
          <Text style={[styles.subtitle, { marginTop: 24 }]}>Time</Text>
          <FlatList
            data={timeData}
            style={styles.list}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item?.id}
                style={
                  selectedTime?.id === item?.id
                    ? item?.id !== 1
                      ? [styles.selected, { marginLeft: 12 }]
                      : styles.selected
                    : item?.id !== 1
                      ? [styles.notselected, { marginLeft: 12 }]
                      : styles.notselected
                }
                onPress={() => setSelectedTime(item)}
                activeOpacity={0.6}>
                <Text
                  style={
                    selectedTime?.id === item?.id
                      ? styles.selectedtext
                      : styles.notselectedtext
                  }>
                  {item?.value}
                </Text>
              </TouchableOpacity>
            )}
          />

          {/* divider */}
          <View style={styles.divider} />

          {/* buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.reset, styles.commonbutton]}>
              <Text style={styles.resettext}>Reset</Text>
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

export default FilterModal;
