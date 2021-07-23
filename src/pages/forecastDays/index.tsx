import React from "react"
import { Text, View, SafeAreaView } from "react-native"

import styles from './styles'

export const ForecastDays = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.forecastText}>ForecastDays Screen</Text>
            </View>
        </SafeAreaView>
    )
}