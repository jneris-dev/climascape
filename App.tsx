import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { Home } from './src/pages/Home'

import {
	useFonts,
	Jost_400Regular,
	Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
	const [fontsLoaded] = useFonts({
		Jost_400Regular, Jost_600SemiBold
	});

	if (!fontsLoaded)
		return <AppLoading />

	return (
		<>
			<Home />
			<StatusBar style="light" />
		</>
	);
}