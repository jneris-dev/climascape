import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import getCurrentWeather from './libs/api';
import styles from './libs/styles';
import colors from './libs/colors';

import {
	useFonts,
	Jost_400Regular,
	Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
	const [fontsLoaded] = useFonts({
		Jost_400Regular, Jost_600SemiBold
	});

	const [currentTemperature, setCurrentTemperature] = useState<number>()
	const [location, setLocation] = useState('')
	const [hours, setHours] = useState('')

	const [locationCoords, setLocationCoords] = useState<object>()
	const [errorMsg, setErrorMsg] = useState('')

	const [wind, setWind] = useState('')
	const [tempMin, setTempMin] = useState<number>()
	const [tempMax, setTempMax] = useState<number>()
	const [humidity, setHumidity] = useState('')
	const [pressure, setPressure] = useState('')
	const [weatherMainDescription, setweatherMainDescription] = useState('')
	const [weatherIcon, setweatherIcon] = useState('')

	async function getLocation() {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
		} else {
			let location = await Location.getCurrentPositionAsync({})
			await setLocationCoords(location.coords)
		}
	}

	async function setCurrentWeather() {
		await getLocation()

		console.log(locationCoords)

		let date = new Date()
		setHours(date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2))

		const data = await getCurrentWeather(locationCoords)

		setCurrentTemperature(convertKelvinToC(data[0]))
		setTempMin(convertKelvinToC(data[1]))
		setTempMax(convertKelvinToC(data[2]))
		setLocation(data[3])
		setWind(data[4])
		setHumidity(data[5])
		setPressure(data[6])
		setweatherMainDescription(data[7])
		setweatherIcon(data[8])
	}

	function convertKelvinToC(kelvin: string) {
		let K = parseInt(kelvin, 10)
		return K - 273
	}

	useEffect(() => {
		setCurrentWeather()
	}, [])

	if (!fontsLoaded)
		return <AppLoading />

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.yourLocalization}>
					<Feather name="crosshair" size={14} color={colors.blue} />
					<Text style={styles.textLocalization}>Your Localization Now</Text>
				</View>
				<Text style={styles.localization}>{location} - {hours}</Text>
				<Image
					source={{
						uri: `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
					}}
					style={styles.tempIcon}
				/>
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
				<View style={styles.wrapConfig}>
					<View style={styles.contentConfig}>
						<Text style={styles.textExtra}>Temperatura</Text>
						<Text style={styles.optionActiveConfig}>Celcius</Text>
					</View>
					<View style={styles.contentConfig}>
						<Text style={styles.textExtra}>Neve</Text>
						<Text style={styles.optionActiveConfig}>--</Text>
					</View>
					<View style={styles.contentConfig}>
						<Text style={styles.textExtra}>Raios</Text>
						<Text style={styles.optionActiveConfig}>--</Text>
					</View>
				</View>
			</View>
			<StatusBar style="light" />
		</SafeAreaView>
	);
}