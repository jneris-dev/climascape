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
        color: colors.green,
        fontSize: 18,
        fontFamily: fonts.text,
        marginLeft: 5
    },
    wrapWeather: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50
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
        justifyContent: 'space-between',
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
});