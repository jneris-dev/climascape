import { StyleSheet } from 'react-native';
import colors from '../../libs/colors';
import fonts from '../../libs/fonts';

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
        padding: 30
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    localization: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.text,
        marginLeft: 10,
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
        marginTop: 25,
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
    wrapNext: {
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
});