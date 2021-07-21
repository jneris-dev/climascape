import { StyleSheet } from 'react-native';
import colors from '../../libs/colors';
import fonts from '../../libs/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 30
    },
    header: {
        width: '100%',
        textAlign: 'left',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerDate: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.heading,
    },
    headerHour: {
        color: colors.disabled,
        fontSize: 18,
        fontFamily: fonts.text,
        marginLeft: 5
    },
    wrapWeather: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    tempNow: {
        color: colors.white,
        fontSize: 80,
        paddingLeft: 15,
        fontFamily: fonts.text,
    },
    badge: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 18,
        textTransform: 'capitalize',
    },
    wrapExtras: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        paddingHorizontal: 10,
    },
    contentExra: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    icoExtra: {
        marginBottom: 13,
    },
    textExtra: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 15,
    },
    alert: {
        marginTop: 40,
        flex: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: colors.green
    },
    alertText: {
        width: '100%',
        marginLeft: 15,
    },
    alertTitle: {
        color: colors.green,
        fontFamily: fonts.heading,
        fontSize: 18,
        marginBottom: 5,
    },
    alertDesc: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 13,
    },
    mightNeed: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
    },
    mightNeedTitle: {
        fontSize: 15,
        fontFamily: fonts.heading,
        marginBottom: 25,
        color: colors.white,
    },
    mightNeedWrap: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    mightNeedContent: {
        paddingHorizontal: 15
    },
    mightNeedContentText: {
        color: colors.white
    }
});