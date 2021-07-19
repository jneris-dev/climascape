import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';

import { getCurrentWeather, getCurrentCity, getBackground } from '../libs/api';
import { Load } from '../components/Load';
import { WeatherIcon } from '../components/WeatherIcon';

import styles from '../libs/styles';
import colors from '../libs/colors';

export type location = {
    latitude: string | number,
    longitude: string | number
}

const callback: location = {
    latitude: '-23.5489',
    longitude: '-46.6388'
}

export function Home() {

    const [currentTemperature, setCurrentTemperature] = useState<number>()
    const [location, setLocation] = useState('')
    const [hours, setHours] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const [loading, setLoading] = useState(true);

    const [wind, setWind] = useState('')
    const [tempMin, setTempMin] = useState<number>()
    const [tempMax, setTempMax] = useState<number>()
    const [humidity, setHumidity] = useState('')
    const [pressure, setPressure] = useState('')
    const [weatherMainDescription, setweatherMainDescription] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')

    const [currentCity, setCurrentCity] = useState('')
    const [weatherBg, setWeatherBg] = useState('')

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        return location.coords
    }

    async function setCurrentWeather() {
        setLoading(true)

        let date = new Date()
        setHours(date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2))

        const location = await getLocation()

        const resolvedLocation: location = location || callback

        const data = await getCurrentWeather(resolvedLocation)

        setCurrentTemperature(convertKelvinToC(data[0]))
        setTempMin(convertKelvinToC(data[1]))
        setTempMax(convertKelvinToC(data[2]))
        setLocation(data[3])
        setWind(data[4])
        setHumidity(data[5])
        setPressure(data[6])
        setweatherMainDescription(data[7])
        setWeatherIcon(data[8])

        const info = data ? data[7] : 'clouds'

        const bg = await getBackground(info)

        setWeatherBg(bg[0])

        setLoading(false)
    }

    async function setCurrentCityFunc() {
        setLoading(true)

        const city = currentCity ? currentCity : location

        const data = await getCurrentCity(city)

        setCurrentTemperature(parseInt(data[0]))
        setTempMin(parseInt(data[1]))
        setTempMax(parseInt(data[2]))
        setLocation(data[3])
        setWind(data[4])
        setHumidity(data[5])
        setPressure(data[6])
        setweatherMainDescription(data[7])
        setWeatherIcon(data[8])

        const info = data[7]

        const bg = await getBackground(info)

        setWeatherBg(bg[0])

        setLoading(false)
    }

    function convertKelvinToC(kelvin: string) {
        let K = parseInt(kelvin, 10)
        return K - 273
    }

    useEffect(() => {
        setCurrentWeather()
        setCurrentCityFunc()
    }, [])

    if (loading)
        return <Load />

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{
                    uri: weatherBg
                        ? weatherBg
                        : 'https://images.unsplash.com/photo-1529528744093-6f8abeee511d?ixid=MnwyNDY5NDJ8MHwxfHNlYXJjaHwxfHxjbG91ZHN8ZW58MHx8fHwxNjI2NzAxNzU1&ixlib=rb-1.2.1'
                }}
                resizeMode="cover"
                style={styles.backgroundImage}
            >
                <LinearGradient
                    colors={['rgba(0,0,0,.7)', 'rgba(0,0,0,.5)', 'rgba(0,0,0,.3)', 'rgba(0,0,0,.5)', 'rgba(0,0,0,.8)', '#000']}
                    style={styles.overlay}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.content}>
                            <View style={styles.searchWrap}>
                                <View style={{ position: 'relative', width: '100%', flex: 1 }}>
                                    <TextInput
                                        style={styles.searchInput}
                                        placeholder={'Search'}
                                        onChangeText={setCurrentCity}
                                        placeholderTextColor="#999"
                                        returnKeyType="search"
                                    />
                                    <TouchableOpacity
                                        style={styles.searchButton}
                                        onPress={() => setCurrentCityFunc()}
                                    >
                                        <Feather name="search" size={18} color={colors.white} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.searchCross}>
                                    <TouchableOpacity
                                        onPress={() => setCurrentWeather()}
                                    >
                                        <Feather name="crosshair" size={24} color={colors.white} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.header}>
                                <View>
                                    <View style={styles.subTitle}>
                                        <Feather name="clock" size={14} color={colors.white} />
                                        <Text style={styles.textLocalization}>Last Update: {hours}</Text>
                                    </View>
                                    <Text style={styles.localization}>{location}</Text>
                                </View>
                            </View>
                            <WeatherIcon icon={weatherIcon} />
                            <Text style={styles.badge}>{weatherMainDescription}</Text>
                            <Text style={styles.tempNow}>{currentTemperature}ºC</Text>
                            <View style={styles.wrapMaxMin}>
                                <View style={styles.contentMaxMin}>
                                    <Feather name="arrow-up" size={24} color={colors.blue} style={styles.icoExtra} />
                                    <Text style={styles.textExtra}>{tempMax}ºC</Text>
                                </View>
                                <View style={styles.contentMaxMin}>
                                    <Feather name="arrow-down" size={24} color={colors.blue} style={styles.icoExtra} />
                                    <Text style={styles.textExtra}>{tempMin}ºC</Text>
                                </View>
                            </View>
                            <View style={styles.wrapExtras}>
                                <View style={styles.contentExra}>
                                    <Feather name="wind" size={24} color={colors.blue} style={styles.icoExtra} />
                                    <Text style={styles.textExtra}>{wind}ms/h</Text>
                                </View>
                                <View style={styles.contentExra}>
                                    <Feather name="droplet" size={24} color={colors.blue} style={styles.icoExtra} />
                                    <Text style={styles.textExtra}>{humidity}%</Text>
                                </View>
                                <View style={styles.contentExra}>
                                    <Feather name="chevrons-down" size={24} color={colors.blue} style={styles.icoExtra} />
                                    <Text style={styles.textExtra}>{pressure}hPa</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </LinearGradient>
            </ImageBackground>
        </SafeAreaView>
    );
}