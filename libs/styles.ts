import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 30,
    },
    yourLocalization: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 13,
    },
    textLocalization: {
        color: colors.blue,
        fontSize: 14,
        marginLeft: 5,
        fontFamily: fonts.text,
    },
    localization: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.text,
    },
    tempIcon: {
        marginTop: 10,
        width: 130,
        height: 130,
    },
    badge: {
        backgroundColor: colors.purple,
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 5,
        color: colors.white,
        fontFamily: fonts.text,
        marginBottom: 10,
        textTransform: 'capitalize',
    },
    tempNow: {
        color: colors.white,
        fontSize: 60,
        fontFamily: fonts.text,
    },
    wrapMaxMin: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    contentMaxMin: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    wrapExtras: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 45,
        paddingHorizontal: 10,
    },
    contentExra: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icoExtra: {
        marginRight: 5,
    },
    textExtra: {
        color: colors.white,
        fontFamily: fonts.text,
    },
    wrapConfig: {
        width: '100%',
        marginTop: 15,
    },
    contentConfig: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    optionActiveConfig: {
        color: colors.blue,
        fontFamily: fonts.text,
    },
    bottomTab: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: 25,
        backgroundColor: colors.background,
    },
    contentBottomTab: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonBottomTab: {
        backgroundColor: colors.pink,
        width: 100,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});