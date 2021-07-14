export default async function getCurrentWeather(locationCoords: any) {
    const axios = require('axios')

    const lat = locationCoords.latitude
    const log = locationCoords.longitude
    const lang = 'pt_br'

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=0aeb4a4cb0780b3ca18871522e5120fc&lang=${lang}`

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