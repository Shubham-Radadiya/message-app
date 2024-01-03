import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import fonts from '../../Utils/utils';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  titlerow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
    marginLeft: 18,
    marginRight: 22,
  },
  title: {
    color: colors.medium_black,
    fontFamily: fonts.medium.circularstd,
    fontSize: 18,
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.secondary,
    width: '100%',
  },
  selectedlang: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 10,
    backgroundColor: colors.lang_bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 17,
    marginRight: 13,
    paddingVertical: 19,
    paddingLeft: 15,
    paddingRight: 21,
  },
  unselectedlang: {
    marginTop: 6,
    borderRadius: 10,
    backgroundColor: colors.lang_bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 17,
    marginRight: 13,
    paddingVertical: 19,
    paddingLeft: 15,
    paddingRight: 21,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedlangtext: {
    marginLeft: 29,
    color: colors.orange,
    fontFamily: fonts.medium.circularstd,
    fontSize: 18,
  },
  unselectedlangtext: {
    marginLeft: 29,
    color: colors.lang_grey,
    fontFamily: fonts.medium.circularstd,
    fontSize: 18,
  },
});

export default styles;
