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
        const weatherMainDescription = data.current.weather[0].description
        const weatherIcon = data.current.weather[0].icon
        const feelsLike = data.current.feels_like
        const alertEvent = data.alerts[0].event
        const alertDesc = data.alerts[0].description

        return results = [currentTemperature, location, wind, humidity,
            pressure, weatherMainDescription, weatherIcon, feelsLike, alertEvent, alertDesc]

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

        const currentTemperature = data.list[0].main.temp
        const tempMin = data.list[0].main.temp_min
        const tempMax = data.list[0].main.temp_max
        const location = (data.list[0].name + ', ' + data.list[0].sys.country)
        const wind = data.list[0].wind.speed
        const humidity = data.list[0].main.humidity
        const pressure = data.list[0].main.pressure
        const weatherMainDescription = data.list[0].weather[0].description
        const weatherIcon = data.list[0].weather[0].icon

        return results = [currentTemperature, tempMin, tempMax, location, wind, humidity, pressure, weatherMainDescription, weatherIcon]

    }).catch(function (error: any) {
        console.log(error)
    })

    return results
}