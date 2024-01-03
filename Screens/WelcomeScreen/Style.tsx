import {StyleSheet} from 'react-native';
import fonts from '../../Utils/utils';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  slidercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.bold.circularstd,
    fontWeight: '700',
    fontSize: 30,
    color: colors.orange,
  },
  slogantext: {
    fontFamily: fonts.regular.circularstd,
    fontSize: 16,
    color: colors.dark_grey,
    marginTop: "3%",
    textAlign: 'center',
    // marginHorizontal: 27,
    fontWeight: '100',
    lineHeight: 22.4,
  },
  getstartedbutton: {
    backgroundColor: colors.orange,
    borderRadius: 100,
    paddingHorizontal: 40,
    paddingVertical: 18,
    marginTop: '12%',
    alignSelf: 'center',
  },
  getstartedtext: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: fonts.medium.circularstd,
  },
});

export default styles;
