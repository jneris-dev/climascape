const key = '0aeb4a4cb0780b3ca18871522e5120fc'
const lang = 'en'

export async function getCurrentWeather(resolvedLocation: any) {
    const axios = require('axios')

    const lat = resolvedLocation.latitude
    const log = resolvedLocation.longitude

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${log}&exclude=hourly,minutely&units=metric&appid=${key}&lang=${lang}`

    var results: any = []

    await axios.get(url).then(function (response: any) {
        const data = response.data

        const currentTemperature = data.current.temp
        const location = data.timezone
        const wind = data.current.wind_speed
        const humidity = data.current.humidity
        const pressure = data.current.pressure
        const weatherMain = data.current.weather[0].main
        const weatherMainDescription = data.current.weather[0].description
        const weatherIcon = data.current.weather[0].icon
        const feelsLike = data.current.feels_like
        const clouds = data.current.clouds
        const visibility = data.current.visibility

        const alertEvent = data.alerts ? data.alerts[0].event : null
        const alertDesc = data.alerts ? data.alerts[0].description : null
        const alertSenderName = data.alerts ? data.alerts[0].sender_name : null
        const alertStart = data.alerts ? data.alerts[0].start : null
        const alertEnd = data.alerts ? data.alerts[0].end : null

        return results = [
            currentTemperature,
            location,
            wind,
            humidity,
            pressure,
            weatherMain,
            weatherMainDescription,
            weatherIcon,
            feelsLike,
            clouds,
            visibility,

            alertEvent,
            alertDesc,
            alertSenderName,
            alertStart,
            alertEnd,
        ]

    }).catch(function (error: any) {
        console.log(error)
    })

    return results
}

export async function getCurrentCity(currentCity: any) {
    const axios = require('axios')

    const city = currentCity
    const url = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${key}&lang=${lang}`

    var results: any = []

    await axios.get(url).then(function (response: any) {
        const data = response.data

        const location = data.list[0].name
        const currentTemperature = data.list[0].main.temp
        const feels_like = data.list[0].main.feels_like
        const tempMin = data.list[0].main.temp_min
        const tempMax = data.list[0].main.temp_max
        const humidity = data.list[0].main.humidity
        const wind = data.list[0].wind.speed
        const country = data.list[0].sys.country
        const rain = data.list[0].rain
        const snow = data.list[0].snow
        const weatherMainDescription = data.list[0].weather[0].description
        const weatherIcon = data.list[0].weather[0].icon

        return results = [
            location,
            currentTemperature,
            feels_like,
            tempMin,
            tempMax,
            humidity,
            wind,
            country,
            rain,
            snow,
            weatherMainDescription,
            weatherIcon
        ]

    }).catch(function (error: any) {
        console.log(error)
    })

    return results
}