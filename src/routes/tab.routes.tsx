import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import colors from '../libs/colors';

import { HomeScreen, SearchScreen, SettingScreen } from '../pages';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator tabBarOptions={{
            activeTintColor: colors.pink,
            inactiveTintColor: colors.disabled,
            showLabel: false,
            style: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: Platform.OS === 'ios' ? 78 : 60,
                backgroundColor: 'transparent',
                shadowOpacity: 0,
                elevation: 0,
                borderTopWidth: 0,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
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
                name="NextForecast"
                component={SearchScreen}
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
                name="Info"
                component={SettingScreen}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather
                            name="settings"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;