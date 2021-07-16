const key = '0aeb4a4cb0780b3ca18871522e5120fc'
const lang = 'pt_br'

export async function getCurrentWeather(resolvedLocation: any) {
    const axios = require('axios')

    const lat = resolvedLocation.latitude
    const log = resolvedLocation.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${key}&lang=${lang}`

    var results: any = []

    await axios.get(url).then(function (response: any) {
        const data = response.data

        const currentTemperature = data.main.temp
        const tempMin = data.main.temp_min
        const tempMax = data.main.temp_max
        const location = (data.name + ', ' + data.sys.country)
        const wind = data.wind.speed
        const humidity = data.main.humidity
        const pressure = data.main.pressure
        const weatherMainDescription = data.weather[0].description
        const weatherIcon = data.weather[0].icon

        return results = [currentTemperature, tempMin, tempMax, location, wind, humidity, pressure, weatherMainDescription, weatherIcon]

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