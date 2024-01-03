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

    // marginLeft: 21,
  
  },
  headertitle: {
     width:220,
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
    // marginBottom: 21,
    width: "100%",
    alignSelf: "center",
    height: 2,
    backgroundColor: colors.grey_default,
  },
  smallModalContainer: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    width:'60%',
    padding:0,
    alignSelf:'flex-end',
    marginTop:'25%',
    marginHorizontal:15,
    borderRadius:10
  },
  smallModalContent: {
    // backgroundColor: 'white',
    // padding: 20,
    borderRadius: 10,
    // elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },

  messageContainer: {
    maxWidth: "60%", // Adjust the width based on your design
    marginVertical: 5,
    // borderRadius: 10,
    padding: 10,
    marginHorizontal:5
  },

  receivedMessage: {
    alignSelf: "flex-start",
    // backgroundColor: "#F5F5F5",
    borderTopRightRadius:20,
    borderTopLeftRadius:8,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
   

  },

  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: colors.orange,
    borderTopRightRadius:8,
    borderTopLeftRadius:20,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20
  },

  messageText: {
    fontSize: 18,
    fontFamily:fonts.regular.circularstd,
  },

  messageTime: {
    fontSize: 12,
    textAlign: "right",
    marginTop: 5,
  }
 
});

export default styles;
