import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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
    borderRadius:10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
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
});

export default styles;
