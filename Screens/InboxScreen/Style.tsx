import { StyleSheet } from "react-native";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    // backgroundColor: colors.white,
    // paddingTop: 4,

    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.cream,
    borderRadius: 27,
    paddingHorizontal: 17,
    paddingVertical: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 27,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
  },
  placeholder: {
    color: colors.dark_grey,
    fontFamily: fonts.regular.circularstd,
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 20,
    padding: 0,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: colors.light_grey,
  },
  title: {
    color: colors.dark_grey,
    fontSize: 17,
    fontFamily: fonts.bold.circularstd,
  },
  date: {
    fontFamily: fonts.medium.circularstd,
    fontSize: 12,
    color: colors.dark_grey,
  },
  body: {
    fontFamily: fonts.regular.circularstd,
    fontSize: 13,
    color: colors.light_grey,
    flex: 0.95,
  },
  unreaddot: {
    // backgroundColor: colors.orange,
    width: 13,
    height: 13,
    borderRadius: 100,
  },
});

export default styles;
