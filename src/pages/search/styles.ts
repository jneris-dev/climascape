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
})