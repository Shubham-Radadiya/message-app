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
  divider: {
    //   margin: 24,
    marginTop: 14,
    marginBottom: 21,
    width: "100%",
    alignSelf: "center",
    height: 2,
    backgroundColor: colors.grey_default,
  },
  btnStyle:{

          fontFamily: fonts.regular.circularstd,
          fontSize: 18,
          paddingTop: 9,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 6,
        }
});

export default styles;
