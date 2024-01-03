import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import fonts from '../../Utils/utils';

const styles = StyleSheet.create({
  backdropcontainer: {
    backgroundColor: 'rgba(0,0,0,0.67)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentcontainer: {
    backgroundColor: colors.white,
    paddingVertical: 23,
    paddingHorizontal: 50,
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  username: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 17,
    color: colors.dark_grey,
    alignSelf: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
  optiontext: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 16,
    color: colors.black,
    marginLeft: 12,
  },
});

export default styles;
