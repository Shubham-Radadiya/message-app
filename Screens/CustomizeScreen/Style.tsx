import { StyleSheet } from "react-native";
import colors from "../../Utils/colors";
import fonts from "../../Utils/utils";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: colors.white
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 21
    },
    headertitle: {
        fontSize: 18,
        fontFamily: fonts.medium.circularstd,
        color: colors.dark_grey,
        marginLeft: 36
    },
    itemrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 23,
        marginRight: 29,
        paddingVertical: 15
    },
    iteminnerrow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemtitle: {
        fontFamily: fonts.medium.circularstd,
        fontSize: 17,
        color: colors.dark_grey
    },
    itemvalue: {
        fontFamily: fonts.regular.circularstd,
        fontSize: 12,
        color: colors.light_grey,
        marginTop: 1
    },
    backgroundview: {
        width: 25,
        height: 25,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.light_grey
    },
    divider: {
        height: 0.5,
        marginLeft: 9,
        marginRight: 9,
        backgroundColor: colors.light_grey
    },
    fontstyle: {
        fontFamily: fonts.medium.circularstd,
        fontSize: 17,
        color: colors.dark_grey
    }
})

export default styles;