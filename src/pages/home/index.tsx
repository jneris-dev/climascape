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
import { YouMightNeed } from '../../components/YouMightNeed';

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
    const [refresh, setRefresh] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const [hours, setHours] = useState('')
    const [dateCurrent, setDateCurrent] = useState('')

    const [currentTemperature, setCurrentTemperature] = useState<number>()
    const [wind, setWind] = useState('')
    const [humidity, setHumidity] = useState('')
    const [pressure, setPressure] = useState('')
    const [weatherMain, setweatherMain] = useState('')
    const [weatherMainDescription, setweatherMainDescription] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')
    const [feelsLike, setFeelsLike] = useState<number>()

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
        setweatherMain(data[5])
        setweatherMainDescription(data[6])
        setWeatherIcon(data[7])
        setFeelsLike(parseInt(data[8]))

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

    async function refreshApp() {
        setRefresh(true)

        await setCurrentWeather()

        setRefresh(false)
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
                        refreshing={refresh}
                        onRefresh={refreshApp}
                        progressBackgroundColor={colors.green}
                    />
                }
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerDate}>{dateCurrent}</Text>
                        <Text style={styles.headerHour}>{hours}</Text>
                    </View>
                    <View style={styles.wrapWeather}>
                        <WeatherIcon icon={weatherIcon} size={120} />
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
                        <View style={styles.contentExra}>
                            <Feather name="user" size={28} color={colors.green} style={styles.icoExtra} />
                            <Text style={styles.textExtra}>{feelsLike}º</Text>
                        </View>
                    </View>
                    <YouMightNeed temp={feelsLike} main={weatherMain} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}