import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import colors from '../libs/colors';
import fonts from '../libs/fonts';

export function YouMightNeed({ temp, main, ...rest }: any) {
    let temperatureNow = temp
    let climate = main

    switch (true) {
        case (temperatureNow <= 19):
            var iconOne = 'cachecol'
            var iconTwo = 'café'
            var iconThree = 'cachecol'
            break;
        case (climate === 'Rain'):
            var iconOne = 'bota'
            var iconTwo = 'guarda-chuva'
            var iconThree = 'capa-de-chuva'
            break;
        case (temperatureNow === 20):
            var iconOne = 'regata'
            var iconTwo = 'agua'
            var iconThree = 'sorvete'
            break;
        default:
            var iconOne = '11'
            var iconTwo = '22'
            var iconThree = '33'
    }

    return (
        <View style={styles.mightNeed}>
            <View style={styles.wrapTitle}>
                <Text style={styles.borderTitle}></Text>
                <Text style={styles.mightNeedTitle}>You might need:</Text>
                <Text style={styles.borderTitle}></Text>
            </View>
            <View style={styles.mightNeedWrap}>
                <View style={styles.mightNeedContent}>
                    <Text style={styles.mightNeedContentText}>{iconOne}</Text>
                </View>
                <View style={styles.mightNeedContent}>
                    <Text style={styles.mightNeedContentText}>{iconTwo}</Text>
                </View>
                <View style={styles.mightNeedContent}>
                    <Text style={styles.mightNeedContentText}>{iconThree}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mightNeed: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
    },
    wrapTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    mightNeedTitle: {
        fontSize: 15,
        fontFamily: fonts.heading,
        color: colors.white,
        paddingHorizontal: 9,
    },
    borderTitle: {
        height: 1,
        backgroundColor: colors.disabled,
        flex: 1,
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
})