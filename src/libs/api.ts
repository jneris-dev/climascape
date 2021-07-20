const key = '0aeb4a4cb0780b3ca18871522e5120fc'
const lang = 'en'

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
        const feelsLike = data.main.feels_like

        return results = [currentTemperature, tempMin, tempMax, location, wind, humidity, pressure, weatherMainDescription, weatherIcon, feelsLike]

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

export async function getBackground(info: any) {
    const axios = require('axios')

    const getWt = info ? info : 'clouds'

    const weather = getWt.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "%20")

    const unsplash_id = 'OmqqhmWQ3m3d51W342SSB36y6FivVSuPnjjc2inj8SU'
    const pexels_id = '563492ad6f91700001000001f0fa6d16b37447a58676073d7d806750'

    const unsplash_url = `https://api.unsplash.com/search/photos?query=${weather}&client_id=${unsplash_id}`
    const pexels_url = `https://api.pexels.com/v1/search?query=${weather}%20environment&per_page=1`

    var results: any = []

    await axios.get(pexels_url, {
        headers: {
            Authorization: pexels_id
        }
    }).then(function (response: any) {
        const data = response.data

        const img = data.photos[0].src.portrait

        return results = [img]

    }).catch(function (error: any) {
        console.log(error)
    })

    return results
}