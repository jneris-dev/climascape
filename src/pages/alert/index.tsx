import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView } from "react-native"
import * as Location from 'expo-location'
import { Feather } from '@expo/vector-icons';

import styles from './styles'
import { getCurrentWeather } from '../../libs/api'
import colors from '../../libs/colors';

export const AlertScreen = () => {
    const [alertEvent, setalertEvent] = useState('')
    const [alertDesc, setalertDesc] = useState('')
    const [alertSenderName, setalertSenderName] = useState('')
    const [alertStart, setalertStart] = useState<any>()
    const [alertEnd, setalertEnd] = useState<any>()

    const [errorMsg, setErrorMsg] = useState('')

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }

        const location = await Location.getCurrentPositionAsync({});
        return location.coords
    }

    async function setCurrentWeather() {
        const location = await getLocation()

        const data = await getCurrentWeather(location)

        setalertEvent(data[9])
        setalertDesc(data[10])
        setalertSenderName(data[11])
        setalertStart(data[12])
        setalertEnd(data[13])
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    var timestampB = alertStart * 1000
    var timestampE = alertEnd * 1000

    var dateB = new Date(timestampB)
    var dateE = new Date(timestampE)

    var monthNameB = months[dateB.getMonth()]
    var monthNameE = months[dateE.getMonth()]

    var beginning = monthNameB + ' ' + dateB.getDate() + ', ' + dateB.getHours() + ":" + ('0' + dateB.getMinutes()).slice(-2)
    var ending = monthNameE + ' ' + dateE.getDate() + ', ' + dateE.getHours() + ":" + ('0' + dateE.getMinutes()).slice(-2)

    useEffect(() => {
        setCurrentWeather()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {alertEvent
                    ?
                    <View style={styles.alert}>
                        <Text style={styles.alertTitle}>{alertEvent}</Text>
                        <Text style={styles.alertDateText}>{beginning} ─ {ending}</Text>
                        <Text style={styles.alertDesc}>{alertDesc}</Text>
                        <Text style={styles.alertSenderName}>- {alertSenderName}</Text>
                    </View>
                    :
                    <View style={styles.notAlert}>
                        <Feather name="alert-triangle" size={80} color={colors.green} />
                        <Text style={styles.notAlertTitle}>Sem Alertas</Text>
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}