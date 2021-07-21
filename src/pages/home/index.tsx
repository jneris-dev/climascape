import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { getCurrentWeather } from '../../libs/api';
import { Load } from '../../components/Load';
import { WeatherIcon } from '../../components/WeatherIcon';

import styles from './styles';
import colors from '../../libs/colors';

export type location = {
    latitude: string | number,
    longitude: string | number
}

const callback: location = {
    latitude: '-23.5489',
    longitude: '-46.6388'
}

export const HomeScreen = () => {
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    const [hours, setHours] = useState('')
    const [dateCurrent, setDateCurrent] = useState('')

    const [currentTemperature, setCurrentTemperature] = useState<number>()
    const [wind, setWind] = useState('')
    const [humidity, setHumidity] = useState('')
    const [pressure, setPressure] = useState('')
    const [weatherMainDescription, setweatherMainDescription] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')
    const [feelsLike, setFeelsLike] = useState<number>()
    const [alertEvent, setalertEvent] = useState('')
    const [alertDesc, setalertDesc] = useState('')

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            setLoading(true)
        }

        setLoading(false)

        const location = await Location.getCurrentPositionAsync({});
        return location.coords
    }

    let date = new Date()

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    var monthName = months[date.getMonth()]
    var dayName = days[date.getDay()]

    async function setCurrentWeather() {
        setLoading(true)

        setDateCurrent(dayName + ', ' + monthName + " " + date.getDate())

        setHours(date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2))

        const location = await getLocation()

        const resolvedLocation: location = location || callback

        const data = await getCurrentWeather(resolvedLocation)

        setCurrentTemperature(parseInt(data[0]))
        setWind(data[2])
        setHumidity(data[3])
        setPressure(data[4])
        setweatherMainDescription(data[5])
        setWeatherIcon(data[6])
        setFeelsLike(data[7])
        setalertEvent(data[8])
        setalertDesc(data[9])

        var SunCalc = require('suncalc');
        var times = SunCalc.getTimes(new Date(), resolvedLocation.latitude, resolvedLocation.longitude)

        var sunriseHr = times.sunrise.getHours()
        var sunriseMin = times.sunrise.getMinutes()
        var sunriseStr = ("0" + sunriseHr).slice(-2) + ':' + ("0" + sunriseMin).slice(-2)

        var sunsetHr = times.sunset.getHours()
        var sunsetMin = times.sunset.getMinutes()
        var sunsetStr = ("0" + sunsetHr).slice(-2) + ':' + ("0" + sunsetMin).slice(-2)

        setLoading(false)
    }

    useEffect(() => {
        setCurrentWeather()
    }, [])

    if (loading)
        return <Load />

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={() => setCurrentWeather()}
                    />
                }
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerDate}>{dateCurrent}</Text>
                        <Text style={styles.headerHour}>{hours}</Text>
                    </View>
                    <View style={styles.wrapWeather}>
                        <WeatherIcon icon={weatherIcon} />
                        <Text style={styles.tempNow}>{currentTemperature}º</Text>
                    </View>
                    <Text style={styles.badge}>{weatherMainDescription}</Text>
                    <View style={styles.wrapExtras}>
                        <View style={styles.contentExra}>
                            <Feather name="wind" size={28} color={colors.green} style={styles.icoExtra} />
                            <Text style={styles.textExtra}>{wind}m/s</Text>
                        </View>
                        <View style={styles.contentExra}>
                            <Feather name="droplet" size={28} color={colors.green} style={styles.icoExtra} />
                            <Text style={styles.textExtra}>{humidity}%</Text>
                        </View>
                        <View style={styles.contentExra}>
                            <Feather name="chevrons-down" size={28} color={colors.green} style={styles.icoExtra} />
                            <Text style={styles.textExtra}>{pressure}hPa</Text>
                        </View>
                    </View>
                    {alertEvent
                        ? <View style={styles.alert}>
                            <View style={styles.alertText}>
                                <Text style={styles.alertTitle}>{alertEvent}</Text>
                                <Text style={styles.alertDesc}>{alertDesc}</Text>
                            </View>
                        </View>
                        : null
                    }
                    <View style={styles.mightNeed}>
                        <Text style={styles.mightNeedTitle}>You might need:</Text>
                        <View style={styles.mightNeedWrap}>
                            <View style={styles.mightNeedContent}>
                                <Text style={styles.mightNeedContentText}>a</Text>
                            </View>
                            <View style={styles.mightNeedContent}>
                                <Text style={styles.mightNeedContentText}>a</Text>
                            </View>
                            <View style={styles.mightNeedContent}>
                                <Text style={styles.mightNeedContentText}>a</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}