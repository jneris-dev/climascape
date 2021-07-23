import React, { useState, useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import colors from '../libs/colors';
import { getCurrentWeather } from '../libs/api';

import { ForecastDays, HomeScreen, SearchScreen, AlertScreen } from '../pages';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const [alertEvent, setalertEvent] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }

        const location = await Location.getCurrentPositionAsync({});
        return location.coords
    }

    async function setCurrentWeather() {
        const location = await getLocation()

        const data = await getCurrentWeather(location)

        setalertEvent(data[9])
    }

    useEffect(() => {
        setCurrentWeather()
    }, [])

    return (
        <AppTab.Navigator tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.disabled,
            showLabel: false,
            style: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: Platform.OS === 'ios' ? 78 : 60,
                backgroundColor: colors.background,
                shadowOpacity: 0,
                elevation: 0,
                borderTopWidth: 0,
            }
        }}>
            <AppTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather
                            name="cloud"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="ForecastDays"
                component={ForecastDays}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather
                            name="calendar"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather
                            name="compass"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Alerts"
                component={AlertScreen}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <View style={{ position: 'relative' }}>
                            <Feather
                                name="bell"
                                size={size}
                                color={color}
                            />
                            {alertEvent
                                ? <Text style={{
                                    position: 'absolute',
                                    width: 8,
                                    height: 8,
                                    backgroundColor: colors.green,
                                    right: 0,
                                    top: 0,
                                    borderRadius: 5,
                                }}></Text>
                                : null
                            }
                        </View>
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;