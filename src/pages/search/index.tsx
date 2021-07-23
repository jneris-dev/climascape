import React, { useEffect, useState } from "react"
import { Text, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import colors from '../../libs/colors'

import { getCurrentCity } from '../../libs/api';
import { Load } from "../../components/Load"
import { WeatherIcon } from "../../components/WeatherIcon"

export const SearchScreen = () => {
    const [loading, setLoading] = useState(true);
    const [currentCity, setCurrentCity] = useState('')

    const [location, setLocation] = useState('')
    const [currentTemperature, setCurrentTemperature] = useState<number>()
    const [feelsLike, setFeelsLike] = useState<number>()
    const [tempMin, setTempMin] = useState<number>()
    const [tempMax, setTempMax] = useState<number>()
    const [humidity, setHumidity] = useState('')
    const [dt, setDt] = useState<any>()
    const [wind, setWind] = useState('')
    const [country, setCountry] = useState('')
    const [rain, setRain] = useState('')
    const [snow, setSnow] = useState('')
    const [weatherMainDescription, setWeatherMainDescription] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')

    async function setCurrentCityFunc() {
        setLoading(true)

        const city = currentCity ? currentCity : location

        const data = await getCurrentCity(city)

        setLocation(data[0])
        setCurrentTemperature(parseInt(data[1]))
        setFeelsLike(parseInt(data[2]))
        setTempMin(parseInt(data[3]))
        setTempMax(parseInt(data[4]))
        setHumidity(data[5])
        setDt(data[6])
        setWind(data[7])
        setCountry(data[8])
        setRain(data[9])
        setSnow(data[10])
        setWeatherMainDescription(data[11])
        setWeatherIcon(data[12])

        setLoading(false)
    }

    var time = dt * 1000

    var date = new Date(time)

    var hour = date.getHours() + ":" + ('0' + date.getMinutes()).slice(-2)

    console.log(hour)

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
                                <Feather name="search" size={18} color={colors.green} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {location
                        ?
                        <View style={styles.contentResult}>
                            <View style={styles.contentResultTop}>
                                <WeatherIcon icon={weatherIcon} size={80} />
                                <Text style={styles.contentResultLocal}>{location}, {country}</Text>
                                <Text style={styles.contentResultDesc}>{weatherMainDescription}, {hour}</Text>
                            </View>
                            <View>
                                <Text>Tempº</Text>
                            </View>
                            <View>
                                <Text>Weather details</Text>
                                <View>
                                    <View>
                                        <Text>temp_min</Text>
                                        <Text>rest</Text>
                                    </View>
                                    <View>
                                        <Text>temp_max</Text>
                                        <Text>rest</Text>
                                    </View>
                                    <View>
                                        <Text>feels_like</Text>
                                        <Text>rest</Text>
                                    </View>
                                    <View>
                                        <Text>humidity</Text>
                                        <Text>rest</Text>
                                    </View>
                                    <View>
                                        <Text>rain</Text>
                                        <Text>rest</Text>
                                    </View>
                                    <View>
                                        <Text>snow</Text>
                                        <Text>rest</Text>
                                    </View>
                                    <View>
                                        <Text>wind speed</Text>
                                        <Text>rest</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        :
                        <View style={styles.notSearch}>
                            <Feather name="map-pin" size={80} color={colors.green} />
                            <Text style={styles.notSearchTitle}>Nenhuma Cidade Encontrada</Text>
                        </View>
                    }
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}