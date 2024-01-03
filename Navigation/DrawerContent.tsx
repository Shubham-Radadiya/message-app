import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { FC, useState } from 'react';
import {
  Switch,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Logo from '../assets/svgs/Logo';
import styles from './Style';
import Lang from '../assets/svgs/Lang';
import Chat from '../assets/svgs/Chat';
import Schedule from '../assets/svgs/Schedule';
import Archived from '../assets/svgs/Archived';
import Block from '../assets/svgs/Block';
import SharedMedia from '../assets/svgs/SharedMedia';
import CustomizeThemes from '../assets/svgs/CustomizeThemes';
import Backup from '../assets/svgs/Backup';
import Settings from '../assets/svgs/Settings';
import Bookmarked from '../assets/svgs/Bookmarked';
import colors from '../Utils/colors';
import { NavProps } from './NavigationTypes';
import { useColor } from '../Common/ColorContext';

const DrawerContent: FC<NavProps> = ({ navigation }, props: any) => {
  const { selectedColor } = useColor();

  const width = useWindowDimensions().width * 0.8;
  const [msgOrganizer, setMsgOrganizer] = useState<boolean>(false);
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      {...props}
      style={[styles.main,{backgroundColor: selectedColor?.color === '#000000' ? colors.dark_grey : selectedColor?.color}]}>
      {/* top logo view */}
      <View style={styles.logoview}>
        <Logo />
        <View style={styles.appnameview}>
          <Text style={[styles.appname,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Messages</Text>
          <Text style={styles.version}>Version : 1.0.0</Text>
        </View>
      </View>

      {/* divider */}
      <View style={[styles.divider, { marginTop: 58 }]} />

      {/* language selection option */}
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.langrow}
        onPress={() => navigation?.navigate('LanguageScreen')}>
        <View style={styles.lang1row}>
          <Lang stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
          <Text style={[styles.langtitle,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Language</Text>
        </View>
        <Text style={styles.lang}>English</Text>
      </TouchableOpacity>

      {/* divider */}
      <View style={styles.divider} />

      {/* message organizer switch */}
      <View style={styles.msgorganizerrow}>
        <Chat stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <View>
          <Text style={[styles.langtitle, { marginLeft: 0 ,color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>
            Message Organizer
          </Text>
          <Text style={[styles.lang, { marginTop: 6  }]}>
            Organize Conversations By Label
          </Text>
        </View>
        <View>
          <Switch
            thumbColor={msgOrganizer ? colors.dark_orange : colors.secondary}
            trackColor={{ true: colors.orange, false: '#d2d2d2' }}
            value={msgOrganizer}
            onValueChange={(value: boolean) => setMsgOrganizer(value)}
          />
        </View>
      </View>

      {/* divider */}
      <View style={styles.divider} />

      {/* scheduled option */}
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.optionrow, { marginTop: 39 }]}>
        <Schedule stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Scheduled</Text>
      </TouchableOpacity>
      {/* archived option */}
      <TouchableOpacity activeOpacity={0.6} style={styles.optionrow} onPress={() => navigation?.navigate("ArchiveScreen")}>
        <Archived stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Archived</Text>
      </TouchableOpacity>
      {/* block list option */}
      <TouchableOpacity activeOpacity={0.6} style={styles.optionrow}>
        <Block stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Block List</Text>
      </TouchableOpacity>
      {/* Bookmarked Messages option */}
      <TouchableOpacity activeOpacity={0.6} style={styles.optionrow}  onPress={() => navigation?.navigate("BookmarkedScreen")}>
        <Bookmarked stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Bookmarked Messages</Text>
      </TouchableOpacity>
      {/* Shared Media option */}
      <TouchableOpacity activeOpacity={0.6} style={styles.optionrow}>
        <SharedMedia  stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Shared Media</Text>
      </TouchableOpacity>
      {/* Customize Themes option */}
      <TouchableOpacity activeOpacity={0.6} style={styles.optionrow} onPress={() => navigation?.navigate("CustomizeScreen")}>
        <CustomizeThemes stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Customize Themes</Text>
      </TouchableOpacity>
      {/* Backup & Restore option */}
      <TouchableOpacity activeOpacity={0.6} style={styles.optionrow} onPress={() => navigation?.navigate("BackupAndRestoreScreen")}>
        <Backup stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Backup & Restore</Text>
      </TouchableOpacity>

      {/* divider */}
      <View style={[styles.divider, { marginTop: 23, marginBottom: 13 }]} />

      {/* Settings option */}
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.optionrow, { marginTop: 0, marginBottom: 13 }]} onPress={() => navigation?.navigate("SettingsScreen")}>
        <Settings stroke={selectedColor.color === '#000000' ? colors.white : '#212121'}/>
        <Text style={[styles.optiontext,{color: selectedColor.color === '#000000' ? '#ffffff' : colors.dark_grey}]}>Settings</Text>
      </TouchableOpacity>

      {/* divider */}
      <View style={[styles.divider, { marginBottom: 103.67 }]} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
