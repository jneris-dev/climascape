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
        alignItems: 'center',
        padding: 30
    },
})