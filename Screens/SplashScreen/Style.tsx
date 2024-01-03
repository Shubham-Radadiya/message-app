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
    top: -80,
  },
  appname: {
    color: colors.dark_grey,
    fontFamily: fonts.medium.circularstd,
    fontSize: 18,
    marginTop: 33,
    alignSelf: 'center',
  },
});

export default styles;
