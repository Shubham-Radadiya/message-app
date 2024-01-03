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
    // marginTop: 15,
    paddingTop:18,
    paddingStart:21,
    paddingBottom:26
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
    position:'absolute',

    
    bottom:0,
    justifyContent: 'flex-end',
  },
  button: {
    marginHorizontal: 10,
    // padding: 10,
    paddingHorizontal:8,
    paddingVertical:4,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily:fonts.regular.circularstd
  },
  progressLine: {
    height: 10,
    width: 300,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
    marginStart:5
  },
  progressLineInner: {
    height: '100%',
    backgroundColor: '#F57B00',
    borderRadius: 5,
  },
});

export default styles;
