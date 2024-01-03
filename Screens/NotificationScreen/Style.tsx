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
  headersubtitle: {
    fontSize: 13,
    fontFamily: fonts.medium.circularstd,
    color: colors.secondary,
    marginLeft: 36,
  },
  divider: {
    //   margin: 24,
    marginTop: 14,
    marginBottom: 21,
    width: "100%",
    alignSelf: "center",
    height: 2,
    backgroundColor: colors.grey_default,
  },


});

export default styles;
