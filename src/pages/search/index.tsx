import React, { useEffect, useState } from "react"
import { Text, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import colors from '../../libs/colors'

import { getCurrentCity } from '../../libs/api'
import { WeatherIcon } from "../../components/WeatherIcon"
import { ScrollView } from "react-native-gesture-handler"
import { Load } from "../../components/Load"

export const SearchScreen = () => {
    const [loading, setLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState('')

    const [location, setLocation] = useState('')
    const [currentTemperature, setCurrentTemperature] = useState<number>()
    const [feelsLike, setFeelsLike] = useState<number>()
    const [tempMin, setTempMin] = useState<number>()
    const [tempMax, setTempMax] = useState<number>()
    const [humidity, setHumidity] = useState('')
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
        setWind(data[6])
        setCountry(data[7])
        setRain(data[8])
        setSnow(data[9])
        setWeatherMainDescription(data[10])
        setWeatherIcon(data[11])

        setLoading(false)
    }

    return (
        <>
            {loading ? <Load /> : null}
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
                                    onSubmitEditing={() => setCurrentCityFunc()}
                                    returnKeyType='search'
                                    blurOnSubmit={true}
                                />
                            </View>
                        </View>
                        {location
                            ?
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                style={{ flex: 1, width: '100%', paddingHorizontal: 30, marginBottom: 45 }}
                            >
                                <View style={styles.contentResult}>
                                    <View style={styles.contentResultTop}>
                                        <WeatherIcon icon={weatherIcon} size={110} />
                                        <Text style={styles.contentResultLocal}>{location}, {country}</Text>
                                        <Text style={styles.contentResultDesc}>{weatherMainDescription}</Text>
                                    </View>
                                    <Text style={styles.temperatureText}>{currentTemperature}º</Text>
                                    <View style={styles.detailsWraper}>
                                        <Text style={styles.detailsTitle}>Weather details</Text>
                                        <View style={styles.detailsContent}>
                                            <View style={styles.detailsRow}>
                                                <Text style={styles.detailsText}>Temperature</Text>
                                                <Text style={styles.detailsTextResult}>{tempMin}º/{tempMax}º</Text>
                                            </View>
                                            <View style={styles.detailsRow}>
                                                <Text style={styles.detailsText}>Feels Like</Text>
                                                <Text style={styles.detailsTextResult}>{feelsLike}º</Text>
                                            </View>
                                            <View style={styles.detailsRow}>
                                                <Text style={styles.detailsText}>Humidity</Text>
                                                <Text style={styles.detailsTextResult}>{humidity}%</Text>
                                            </View>
                                            <View style={styles.detailsRow}>
                                                <Text style={styles.detailsText}>Rain</Text>
                                                <Text style={styles.detailsTextResult}>
                                                    {rain === null ? 'No' : rain}
                                                </Text>
                                            </View>
                                            <View style={styles.detailsRow}>
                                                <Text style={styles.detailsText}>Snow</Text>
                                                <Text style={styles.detailsTextResult}>
                                                    {snow === null ? 'No' : snow}
                                                </Text>
                                            </View>
                                            <View style={styles.detailsRow}>
                                                <Text style={styles.detailsText}>Wind Speed</Text>
                                                <Text style={styles.detailsTextResult}>{wind}m/s</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                            :
                            <View style={styles.notSearch}>
                                <Feather name="map-pin" size={80} color={colors.green} />
                                <Text style={styles.notSearchTitle}>Nenhuma Cidade Encontrada</Text>
                            </View>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    )
}