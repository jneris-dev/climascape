import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
	const [currentHour, SetCurrentHour] = useState('')

	const [wind, setWind] = useState('')
	const [tempMin, setTempMin] = useState<number>()
	const [tempMax, setTempMax] = useState<number>()
	const [humidity, setHumidity] = useState('')
	const [pressure, setPressure] = useState('')
	const [weatherMain, setweatherMain] = useState('')
	const [weatherMainDescription, setweatherMainDescription] = useState('')
	const [weatherIcon, setweatherIcon] = useState('')

	const [locationCoords, setLocationCoords] = useState({})
	const [errorMsg, setErrorMsg] = useState('')

	async function getLocation() {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
		}
		let location = await Location.getCurrentPositionAsync({});
		setLocationCoords(location.coords)
	}

	async function setCurrentWeather() {
		await getLocation()
		const data = await getCurrentWeather(locationCoords)

		setCurrentTemperature(convertKelvinToC(data[0]))
		setTempMin(convertKelvinToC(data[1]))
		setTempMax(convertKelvinToC(data[2]))
		setLocation(data[3])
		setWind(data[4])
		setHumidity(data[5])
		setPressure(data[6])
		setweatherMain(data[7])
		setweatherMainDescription(data[8])
		setweatherIcon(data[9])
	}

	function convertKelvinToC(kelvin: string) {
		const K = parseInt(kelvin - 273)
		return K
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
				<Text style={styles.localization}>{location}</Text>
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
						<Text style={styles.textExtra}>Velocidade do Vento</Text>
						<Text style={styles.optionActiveConfig}>m/hs</Text>
					</View>
				</View>
			</View>
			<StatusBar style="light" />
		</SafeAreaView>
	);
}