import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import fonts from '../../Utils/utils';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  logo: {
    alignSelf: 'center',
    top: -50,
  },
  appname: {
    color: colors.dark_grey,
    fontFamily: fonts.medium.circularstd,
    fontSize: 18,
    marginTop: 33,
    alignSelf: 'center',
  },
  bottomview: {
    marginBottom: 27,
    marginHorizontal: 31,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderWidth: 2,
    borderColor: colors.dark_second,
    width: 18,
    height: 18,
    borderRadius: 2,
  },
  condition: {
    fontFamily: fonts.regular.circularstd,
    fontSize: 17,
    color: colors.dark_second,
   
  },
  link: {
    color: colors.black,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 18,
  },
  buttontext: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 16,
    color: colors.white,
    textTransform: 'uppercase',
    marginVertical: 11,
  },
});

export default styles;
