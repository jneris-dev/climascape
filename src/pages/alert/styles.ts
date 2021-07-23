import { StyleSheet } from "react-native"
import colors from '../../libs/colors'
import fonts from '../../libs/fonts'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        width: '100%',
        padding: 30
    },
    notAlert: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notAlertTitle: {
        color: colors.white,
        fontFamily: fonts.heading,
        fontSize: 25,
        marginTop: 10,
    },
    alert: {
        width: '100%',
    },
    alertTitle: {
        color: colors.white,
        fontFamily: fonts.heading,
        fontSize: 25,
        marginBottom: 10,
    },
    alertDateText: {
        color: colors.green,
        fontFamily: fonts.text,
        marginBottom: 20,
        fontSize: 15,
    },
    alertDesc: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 18,
        textAlign: 'justify',
        lineHeight: 28,
        marginBottom: 15,
    },
    alertSenderName: {
        color: colors.green,
        fontFamily: fonts.heading,
        fontSize: 15,
        textAlign: 'right',
    }
})