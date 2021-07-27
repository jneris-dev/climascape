import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

import loadAnimation from '../assets/load.json';
import colors from '../libs/colors';

export function Load() {
    return (
        <View style={styles.container}>
            <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
            <StatusBar style="dark" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        position: 'absolute',
        zIndex: 99,
        height: '100%',
        opacity: .85
    },
    animation: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 'auto',
    }
})