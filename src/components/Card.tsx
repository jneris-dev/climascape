import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import colors from '../libs/colors';

export function Card() {
    return (
        <View style={styles.container}>
            <Text>TEST</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 15,
        width: 150,
        height: 200,
        backgroundColor: colors.white
    },
})