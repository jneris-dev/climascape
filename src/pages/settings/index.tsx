import React from "react"
import { Text, View, SafeAreaView } from "react-native"
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import colors from '../../libs/colors'

import { Load } from "../../components/Load"

export const SettingScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text>Setting Screen</Text>
            </View>
        </SafeAreaView>
    )
}