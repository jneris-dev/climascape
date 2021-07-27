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
        padding: 30,
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
        color: colors.green,
        fontSize: 20,
        fontFamily: fonts.text,
        marginLeft: 5,
        marginBottom: 5
    },
    wrapWeather: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    tempNow: {
        color: colors.white,
        fontSize: 110,
        paddingRight: 15,
        fontFamily: fonts.text,
    },
    badge: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 15,
        textTransform: 'uppercase',
        letterSpacing: 5,
        marginBottom: 40
    },
    wrapExtras: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 40
    },
    contentExra: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    icoExtra: {
        marginRight: 13,
    },
    titleExtra: {
        color: colors.white,
        fontSize: 15,
        fontFamily: fonts.heading
    },
    textExtra: {
        color: colors.disabled,
        fontFamily: fonts.text,
        fontSize: 15,
    },
});