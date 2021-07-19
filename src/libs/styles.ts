import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 30,
    },
    searchWrap: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    searchInput: {
        paddingLeft: 25,
        paddingRight: 15,
        height: 44,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#999',
        color: colors.white,
        width: '100%'
    },
    searchButton: {
        width: 60,
        backgroundColor: colors.purple,
        height: 34,
        position: 'absolute',
        right: 10,
        top: 5,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchCross: {
        width: 'auto',
        paddingLeft: 15
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 13,
    },
    subTitle: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    textLocalization: {
        color: colors.white,
        fontSize: 12,
        marginLeft: 5,
        fontFamily: fonts.text,
    },
    localization: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.text,
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
});