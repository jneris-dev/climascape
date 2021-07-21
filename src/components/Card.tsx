import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import colors from '../libs/colors';

export function Card(addDay: any, icone: any) {
    const dayOffset = addDay.addDay
    const iconeW = icone
    console.log(icone)

    let date = new Date()

    function setNextDay(x: any) {
        var nextDate = date.setDate(new Date().getDate() + x)
        return nextDate
    }

    switch (dayOffset) {
        case '1':
            setNextDay(1)
            break;
        case '2':
            setNextDay(2)
            break;
        case '3':
            setNextDay(3)
            break;
    }

    var dayNow = date.getDate()

    return (
        <View style={styles.container}>
            <Text>Day {dayNow}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 15,
        width: 150,
        height: 200,
        backgroundColor: colors.white
    },
})