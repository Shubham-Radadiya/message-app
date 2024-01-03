import React, {FC, useEffect, useRef, useState} from 'react';
import {Dimensions, Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './Style';
import WelcomeIcon from '../../assets/svgs/WelcomeIcon1';
import AppIntroSlider from 'react-native-app-intro-slider';
import slides from './slides';
import colors from '../../Utils/colors';
import {NavProps} from '../../Navigation/NavigationTypes';
import { useColor } from '../../Common/ColorContext';

const WelcomeScreen: FC<NavProps> = ({navigation }) => {
  const { selectedColor, setNewColor } = useColor();
  const [index, setIndex] = useState<any>(0);

  var sliderRef = useRef(null)

  const screenHeight = Dimensions.get('window').height;
  const height = screenHeight * 0.25;

  const _renderItem = ({item, index}: any) => {
    return (
      <View style={styles.slidercontainer}>
        {/* {item.icon} */}
        <Image
          source={index === 0 ? require("../../assets/images/slide1.png") : index === 1 ? require("../../assets/images/slide2.png") : index === 2 ? require("../../assets/images/slide3.png") : require("../../assets/images/slide4.png")}
          style={{flex: 1, resizeMode: 'contain', height: height}}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.slogantext}>{item?.text}</Text>
        </View>
      </View>
    );
  };

  const onGetStarted = () => {
    if(index > 2){
      navigation.navigate('PermissionScreen');
    } else {
      setIndex(index + 1);
      sliderRef.current?.goToSlide(sliderRef.current?.state?.activeIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={selectedColor.statusColor}/>
      <AppIntroSlider
        data={slides}
        style={{height: '100%'}}
        dotStyle={{backgroundColor: colors.grey_default, marginTop: '37%'}}
        activeDotStyle={{
          backgroundColor: colors.orange,
          width: 32,
          marginTop: '37%',
        }}
        renderItem={_renderItem}
        showDoneButton={false}
        showNextButton={false}
        showPrevButton={false}
        showSkipButton={false}
        ref={sliderRef}
        onSlideChange={(a,b) =>{
          setIndex(a);
          console.log("a: ", a)
        }}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.getstartedbutton}
        onPress={onGetStarted}>
        <Text style={styles.getstartedtext}>{index > 2 ? "Get Started" : "Next"}</Text>
      </TouchableOpacity>
      <Text style={[styles.slogantext, {marginBottom: 48}]}>
        By selecting "Start Messaging" in our messenger{'\n'} app, you agree to
        our app's Terms & Conditions and{'\n'} Privacy Policy.{'\n'} Notice.
        {'\n'} Data & message charges may apply. Learn more.
      </Text>
    </View>
  );
};

export default WelcomeScreen;
