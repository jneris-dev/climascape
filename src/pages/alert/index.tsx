import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView } from "react-native"
import * as Location from 'expo-location'
import { Feather } from '@expo/vector-icons';

import styles from './styles'
import { getCurrentWeather } from '../../libs/api'
import colors from '../../libs/colors';
import { Load } from '../../components/Load';

export const AlertScreen = () => {
    const [loading, setLoading] = useState(true)
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
        setLoading(true)

        const location = await getLocation()

        const data = await getCurrentWeather(location)

        setalertEvent(data[11])
        setalertDesc(data[12])
        setalertSenderName(data[13])
        setalertStart(data[14])
        setalertEnd(data[15])

        setLoading(false)
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    var dateB = new Date(alertStart * 1000)
    var dateE = new Date(alertEnd * 1000)

    var monthNameB = months[dateB.getMonth()]
    var monthNameE = months[dateE.getMonth()]

    var beginning = monthNameB + ' ' + dateB.getDate() + ', ' + dateB.getHours() + ":" + ('0' + dateB.getMinutes()).slice(-2)
    var ending = monthNameE + ' ' + dateE.getDate() + ', ' + dateE.getHours() + ":" + ('0' + dateE.getMinutes()).slice(-2)

    useEffect(() => {
        setCurrentWeather()
    }, [])

    return (
        <>
            {loading ? <Load /> : null}
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
        </>
    )
}