import {StyleSheet} from 'react-native';
import colors from '../Utils/colors';
import fonts from '../Utils/utils';

const styles = StyleSheet.create({
  main: {
    // backgroundColor: colors.white,
  },
  logoview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 54,
    marginHorizontal: 22,
  },
  appnameview: {
    marginLeft: 21,
  },
  appname: {
    fontSize: 18,
    color: colors.dark_grey,
    fontFamily: fonts.bold.circularstd,
  },
  version: {
    fontSize: 15,
    color: colors.light_grey,
    marginTop: 11,
    fontFamily: fonts.regular.circularstd,
  },
  divider: {
    backgroundColor: colors.light_grey,
    marginLeft: 16,
    marginRight: 22,
    height: 0.5,
  },
  langrow: {
    flexDirection: 'row',
    paddingTop: 21,
    paddingLeft: 22,
    paddingRight: 28,
    paddingBottom: 28,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lang1row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langtitle: {
    color: colors.black,
    fontSize: 18,
    fontFamily: fonts.medium.circularstd,
    marginLeft: 23,
  },
  lang: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.light_grey,
    fontFamily: fonts.regular.circularstd,
  },
  msgorganizerrow: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 17,
    paddingRight: 15.33,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 22,
    marginTop: 25,
  },
  optiontext: {
    fontSize: 18,
    color: colors.black,
    marginLeft: 24,
    fontFamily: fonts.regular.circularstd,
    fontWeight: '500',
  },
});

export default styles;
