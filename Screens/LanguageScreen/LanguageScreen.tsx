import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Style';
import Done from '../../assets/svgs/Done';
import languages from './languages';
import SelectedRadio from '../../assets/svgs/SelectedRadio';
import UnselectedRadio from '../../assets/svgs/UnselectedRadio';

const LanguageScreen = ({navigation}: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(languages[0]);

  const onDone = () => {};

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.main}>
        {/* title and done icon */}
        <View style={styles.titlerow}>
          <Text style={styles.title}>My Languages</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={onDone}>
            <Done />
          </TouchableOpacity>
        </View>

        {/* divider */}
        <View style={[styles.divider, {marginTop: 24, marginBottom: 7}]} />

        {/* language list */}
        <FlatList
          data={languages}
          renderItem={({item}: any) => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={
                item?.id === selectedLanguage?.id
                  ? styles.selectedlang
                  : styles.unselectedlang
              }
              onPress={() => setSelectedLanguage(item)}>
              <View style={styles.row}>
                {item?.icon}
                <Text
                  style={
                    item?.id === selectedLanguage?.id
                      ? styles.selectedlangtext
                      : styles.unselectedlangtext
                  }>
                  {item?.language}
                </Text>
              </View>
              {item?.id === selectedLanguage?.id ? (
                <SelectedRadio />
              ) : (
                <UnselectedRadio />
              )}
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default LanguageScreen;
