import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import fonts from '../../Utils/utils';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  permissiontitle: {
    marginTop: 32,
    fontFamily: fonts.medium.circularstd,
    fontSize: 20,
    textAlign: 'center',
    color: colors.orange,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardtitle: {
    fontFamily: fonts.bold.circularstd,
    color: colors.dark_grey,
    fontSize: 20,
  },
  cardtext: {
    fontFamily: fonts.regular.circularstd,
    color: colors.light_grey,
    fontSize: 15,
    marginTop: 6,
  },
  button: {
    width: '60%',
    backgroundColor: colors.orange,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 53,
  },
  buttontext: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.medium.circularstd,
    marginVertical: 17.5,
  },
});

export default styles;
