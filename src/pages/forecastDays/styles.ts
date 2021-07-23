import { StyleSheet } from "react-native"
import colors from '../../libs/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    forecastText: {
        color: colors.white
    }
})