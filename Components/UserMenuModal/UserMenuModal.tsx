import React, {FC} from 'react';
import {Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './Style';
import SearchOption from '../../assets/svgs/Searchoption';
import Bookmark from '../../assets/svgs/Bookmark';
import Archive from '../../assets/svgs/Archive';
import Mute from '../../assets/svgs/Mute';
import CallSwitch from '../../assets/svgs/CallSwitch';
import Delete from '../../assets/svgs/Delete';

type ModalProps = {
  visible: boolean;
  onDismiss: () => void;
  user: any;
};

const UserMenuModal: FC<ModalProps> = ({visible, onDismiss, user}) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <Pressable style={styles.backdropcontainer} onPress={onDismiss}>
        <Pressable style={styles.contentcontainer} onPress={() => null}>
          <Text style={styles.username}>{user?.name}</Text>

          {/* send message */}
          <TouchableOpacity style={styles.option} activeOpacity={0.5}>
            <SearchOption />
            <Text style={styles.optiontext}>Send Message</Text>
          </TouchableOpacity>

          {/* book mark */}
          <TouchableOpacity style={styles.option} activeOpacity={0.5}>
            <Bookmark />
            <Text style={styles.optiontext}>Book mark</Text>
          </TouchableOpacity>

          {/* archive */}
          <TouchableOpacity style={styles.option} activeOpacity={0.5}>
            <Archive />
            <Text style={styles.optiontext}>Archive</Text>
          </TouchableOpacity>

          {/* mute conversation */}
          <TouchableOpacity style={styles.option} activeOpacity={0.5}>
            <Mute />
            <Text style={styles.optiontext}>Mute conversation</Text>
          </TouchableOpacity>

          {/* call */}
          <TouchableOpacity style={styles.option} activeOpacity={0.5}>
            <CallSwitch />
            <Text style={styles.optiontext}>Call</Text>
          </TouchableOpacity>

          {/* delete messages */}
          <TouchableOpacity style={styles.option} activeOpacity={0.5}>
            <Delete />
            <Text style={styles.optiontext}>Delete messages</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default UserMenuModal;
