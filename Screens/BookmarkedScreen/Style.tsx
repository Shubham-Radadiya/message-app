import { StyleSheet } from "react-native";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";

const getRandomColor = () => {
    const colors = ['#FFD700', '#98FB98', '#ADD8E6', '#FFA07A', '#FFC0CB']; // Add your desired colors
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

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
    marginTop: 18,
    marginBottom: 21,
    width: "110%",
    alignSelf: "center",
    height: 2,
    backgroundColor: colors.grey_default,
  },
  headertitle: {
    fontSize: 18,
    fontFamily: fonts.medium.circularstd,
    color: colors.dark_grey,
    marginLeft: 36,
  },
  itemContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginHorizontal:26,
    // backgroundColor:'red',
    marginBottom:20,

    height:48
    // padding: 16,
  },

  avatarContainer: {
    
    // marginStart:23,
    position:'absolute',
    flexDirection:'row',
    width: 48,
    height: 48,
    borderRadius: 27,
    backgroundColor:  getRandomColor(), // Set your desired background color
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  avatarText: {
    color: 'white', // Set your desired text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
