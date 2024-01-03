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
  contactContainer: {
    marginTop: 35,
    marginHorizontal: 24,
    // backgroundColor:'pink'
  },
  titleText: {
    fontSize: 17,
    fontFamily: fonts.medium.circularstd,
    color: colors.black,
  },
  subTitleText: {
    fontSize: 13,
    fontFamily: fonts.medium.circularstd,
    color: colors.light_grey,
  },
  timeText: {
    fontSize: 12,
    fontFamily: fonts.medium.circularstd,
    color: "#333333",
  },
  renderBackgroundImg: {
    width: 75,
    height: 100,
    marginRight: 17,
    borderRadius: 6,
  },
  renderBlurImg: {
    width: 75,
    height: 100,
    marginRight: 17,
    borderRadius: 6,
  },
  userIcon: {
    width: 48,
    height: 48,
    marginRight: 10,
    //   backgroundColor: "red",
    backgroundColor: colors.grey_default,
    borderRadius: 24,
  },
  bottomContainer: {
    position: "absolute",
    backgroundColor: colors.white,
    height: 195,
    width: "100%",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: colors.grey_default,
  },
  colorModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  colorModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    height: 400,
    width: "80%",
    alignItems: "center",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  saveButton: {
    flex: 1,
    backgroundColor: "blue", // customize as needed
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
  },
  closeButton: {
    flex: 1,
    backgroundColor: "red", // customize as needed
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
