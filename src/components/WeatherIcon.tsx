import React from "react";
import {
    Image,
    View,
    StyleSheet
} from 'react-native'

export function WeatherIcon(icon: any) {

    const currentIcon = icon.icon

    function displayIcon() {
        switch (currentIcon) {

            // Day Icons

            case '01d':
                return require('../assets/clearskyd.png')
                break;
            case '02d':
                return require('../assets/fewcloudsd.png')
                break;
            case '03d':
                return require('../assets/scatteredclouds.png')
                break;
            case '04d':
                return require('../assets/brokenclouds.png')
                break;
            case '09d':
                return require('../assets/showerrain.png')
                break;
            case '10d':
                return require('../assets/raind.png')
                break;
            case '11d':
                return require('../assets/thunderstorm.png')
                break;
            case '13d':
                return require('../assets/snow.png')
                break;
            case '50d':
                return require('../assets/mist.png')
                break;

            // Night Icons

            case '01n':
                return require('../assets/clearskyn.png')
                break;
            case '02n':
                return require('../assets/fewcloudsn.png')
                break;
            case '03n':
                return require('../assets/scatteredclouds.png')
                break;
            case '04n':
                return require('../assets/brokenclouds.png')
                break;
            case '09n':
                return require('../assets/showerrain.png')
                break;
            case '10n':
                return require('../assets/rainn.png')
                break;
            case '11n':
                return require('../assets/thunderstorm.png')
                break;
            case '13n':
                return require('../assets/snow.png')
                break;
            case '50n':
                return require('../assets/mist.png')
                break;
            default:
                return { uri: `http://openweathermap.org/img/wn/${currentIcon}@2x.png` }
        }
    }

    return (
        <View style={styles.weatherWrapp}>
            <Image
                source={displayIcon()}
                style={styles.tempIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    weatherWrapp: {
        width: 'auto',
        position: 'relative',
    },
    tempIcon: {
        width: 120,
        height: 120,
    },
})