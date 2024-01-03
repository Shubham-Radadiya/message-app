import { StyleSheet } from "react-native";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    paddingTop: 4,

    flex: 1,
  },
  searchrow: {
    marginTop: 10,
    marginLeft: 21,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    flex: 1,
    backgroundColor: colors.cream,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    borderRadius: 27,
  },
  searchinput: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 27,
    height: 45,
    fontFamily: fonts.regular.circularstd,
    fontSize: 18,
    color: colors.medium_black,
  },
  tabview: {
    marginTop: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 21,
    marginRight: 32,
    top: 1.5,
    zIndex: 1,
  },
  tabitem: {
    alignItems: "center",
  },
  activebar: {
    backgroundColor: colors.orange,
    borderRadius: 25,
    width: 28,
    marginTop: 13,
    height: 3,
  },
  inactivebar: {
    backgroundColor: "transparent",
    borderRadius: 25,
    width: 28,
    marginTop: 13,
    height: 3,
  },
  tabitemtext: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 16,
  },
  divider: {
    height: 0.5,
    width: "100%",
    backgroundColor: colors.light_grey,
    zIndex: 0,
  },
  listtitle: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 12,
    color: colors.dark_grey,
    marginTop: 10.13,
    marginLeft: 21,
  },
});

export default styles;
