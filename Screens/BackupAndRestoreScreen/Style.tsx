import { StyleSheet } from "react-native";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 21,
  },
  headertitle: {
    fontSize: 18,
    fontFamily: fonts.medium.circularstd,
    color: colors.dark_grey,
    marginLeft: 36,
  },
  buttons: {
    marginTop:29,
    marginHorizontal: 14.11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonbutton: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: 17.91,
  },
  restore: {
    backgroundColor: colors.orange,
  },
  ok: {
    backgroundColor: colors.orange,
  },
  restoretext: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 18,
    color: colors.white,
  },
  oktext: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 18,
    color: colors.white,
  },
});

export default styles;
