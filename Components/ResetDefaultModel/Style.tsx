import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import fonts from '../../Utils/utils';

const styles = StyleSheet.create({
    backdropcontainer: {
      backgroundColor: 'rgba(0,0,0,0.67)',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    contentcontainer: {
      backgroundColor: colors.white,
      paddingBottom: 48,
      paddingTop: 8,
      justifyContent: 'center',
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      width: '100%',
    },
    top: {
      alignSelf: 'center',
      width: 38,
      height: 3,
      backgroundColor: colors.grey_default,
    },
    title: {
      fontFamily: fonts.bold.circularstd,
      fontSize: 20,
      // color: colors.dark_grey,
      marginTop: 24,
      alignSelf: 'center',
    },
    subtitle: {
      fontFamily: fonts.bold.circularstd,
      fontSize: 18,
      color: colors.dark_grey,
      marginLeft: 24,
    },
    divider: {
    //   margin: 24,
    marginTop:42,
    marginBottom:21,
      width: '98%',
      alignSelf:'center',
      height: 2,
      backgroundColor: colors.grey_default,
    },
    list: {
      marginTop: 24,
      marginLeft: 24,
    },
    selected: {
      borderRadius: 100,
      backgroundColor: colors.orange,
    },
    notselected: {
      borderRadius: 100,
      borderWidth: 1,
      borderColor: colors.light_grey,
    },
    selectedtext: {
      fontFamily: fonts.regular.circularstd,
      color: colors.white,
      fontSize: 16,
      marginVertical: 8,
      marginHorizontal: 20,
    },
    notselectedtext: {
      fontFamily: fonts.regular.circularstd,
      color: colors.light_grey,
      fontSize: 16,
      marginVertical: 8,
      marginHorizontal: 20,
    },
    buttons: {
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
    reset: {
      backgroundColor: colors.cream,
    },
    ok: {
      backgroundColor: colors.orange,
    },
    resettext: {
      fontFamily: fonts.medium.circularstd,
      fontSize: 18,
      color: colors.dark_grey,
    },
    oktext: {
      fontFamily: fonts.medium.circularstd,
      fontSize: 18,
      color: colors.white,
    },
    topSubTitle:{
        fontSize:16,
        fontFamily:fonts.medium.circularstd,
        textAlign:'center',
        color:colors.dark_grey,
        marginTop:5
    },
    selectionText:{
      fontFamily:fonts.medium.circularstd,
      fontSize:16,
      color:colors.dark_grey,
      marginStart:50
    },
    selectionContainer:{
      flexDirection:'row' , alignItems:'center' ,marginStart:18
    }
  });

export default styles;
