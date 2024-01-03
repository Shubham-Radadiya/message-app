import { StyleSheet } from "react-native";
import fonts from "../../Utils/utils";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 15,
    paddingTop: 18,
    paddingStart: 21,
    paddingBottom: 25,
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
  buttonContainer: {
    // flex: 1,
    // marginTop:430,
    // position: "absolute",

    bottom: 0,
    justifyContent: "flex-end",
  },
  button: {
    marginHorizontal: 10,
    // padding: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: fonts.regular.circularstd,
  },
  addContactFild: {
    fontSize: 16,
    fontFamily: fonts.medium.circularstd,
    color: colors.dark_grey,
    marginLeft: 36,
    backgroundColor: colors.cream,
    width: 253,
    textAlign:'center',
    // paddingHorizontal: 20,
    borderRadius: 65,
  },
  rowBottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 21,
  },
  contactCon: {
    // flex: 1,
    flexDirection: "row",
    marginHorizontal:23,
    alignItems:'center',
    justifyContent:'space-between',
    // padding: 5,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#d9d9d9",
  },
  itemDat: {
    marginStart:16
  },
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 17,
    fontFamily:fonts.regular.circularstd,
    lineHeight:21.5,
    color:'#1d2433'
  },
  phoneNumber: {
    color: colors.secondary,
    fontFamily:fonts.medium.circularstd,
    lineHeight:18,
    fontSize:13
  },
});

export default styles;
