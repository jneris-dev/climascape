import React, { useEffect, useState } from "react"
import { Text, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import colors from '../../libs/colors'

import { getCurrentCity } from '../../libs/api';
import { Load } from "../../components/Load"

export const SearchScreen = () => {

    const [currentTemperature, setCurrentTemperature] = useState<number>()
    const [location, setLocation] = useState('')

    const [loading, setLoading] = useState(true);

    const [wind, setWind] = useState('')
    const [tempMin, setTempMin] = useState<number>()
    const [tempMax, setTempMax] = useState<number>()
    const [humidity, setHumidity] = useState('')
    const [pressure, setPressure] = useState('')
    const [weatherMainDescription, setweatherMainDescription] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')
    const [feelsLike, setFeelsLike] = useState<number>()

    const [currentCity, setCurrentCity] = useState('')


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
        setFeelsLike(parseInt(data[9]))

        setLoading(false)
    }

    useEffect(() => {
        setCurrentCityFunc()
    }, [])


    if (loading)
        return <Load />

    return (
        <SafeAreaView style={styles.container}>
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
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}