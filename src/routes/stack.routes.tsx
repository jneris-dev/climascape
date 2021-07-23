import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../libs/colors';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white,
            },
        }}
    >
        <stackRoutes.Screen
            name="HomeScreen"
            component={AuthRoutes}
        />
        <stackRoutes.Screen
            name="SearchScreen"
            component={AuthRoutes}
        />
        <stackRoutes.Screen
            name="ForecastDays"
            component={AuthRoutes}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;