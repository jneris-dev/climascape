import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.yourLocalization}>Your Localization Now</Text>
			<Text style={styles.localization}>Guarulhos, São Paulo, Br</Text>
			<View>
				<Text style={styles.icon}>ICON</Text>
				<Text style={styles.tempNow}>20ºC</Text>
			</View>
			<View style={styles.wrapExtras}>
				<View style={styles.contentExra}>
					<Text style={styles.icoExtra}>wind</Text>
					<Text style={styles.textExtra}>5km/h</Text>
				</View>
				<View style={styles.contentExra}>
					<Text style={styles.icoExtra}>humidity</Text>
					<Text style={styles.textExtra}>5%</Text>
				</View>
				<View style={styles.contentExra}>
					<Text style={styles.icoExtra}>pressure</Text>
					<Text style={styles.textExtra}>5km/h</Text>
				</View>
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	yourLocalization: {

	},
	localization: {

	},
	icon: {

	},
	tempNow: {

	},
	wrapExtras: {

	},
	contentExra: {

	},
	icoExtra: {

	},
	textExtra: {

	}
});
