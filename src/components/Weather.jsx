import React, { useContext, useEffect, useState } from "react"
import WeatherInfo from "./WeatherInfo"
import moment, { weekdaysShort } from "moment/moment"
import { SearchValue } from "../store"

function Weather({ day, date, month }) {
    const { weatherInfo } = useContext(SearchValue)
    const { setWeatherInfo } = useContext(SearchValue)
    const { currentWeather } = useContext(SearchValue)
    const { setCurrentWeather } = useContext(SearchValue)
    const { country } = useContext(SearchValue)
    const { setCountry } = useContext(SearchValue)
    const { city } = useContext(SearchValue)
    const { setCity } = useContext(SearchValue)

    const { description } = useContext(SearchValue)
    const { setDescription } = useContext(SearchValue)

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

    const { currentForecast } = useContext(SearchValue)
    const { setCurrentForecast } = useContext(SearchValue)

    const location = navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
    })

    async function callWeather() {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
                    import.meta.env.VITE_WEATHER_API
                }`
            )
            const data = await response.json()
            setCurrentWeather(data.main)
            setCountry(data.sys.country)
            setCity(data.name)
            setDescription(data.weather[0].description)
        } catch (err) {
            console.error(err)
        }
    }

    async function callFiveDays() {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
                    import.meta.env.VITE_WEATHER_API
                }`
            )
            const data = await response.json()
            setWeatherInfo(data.list)
            const weather = []
            for (let i = 0; i < 12; i++) {
                weather.push(data.list[i])
            }
            setCurrentForecast(weather)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        callWeather()
        callFiveDays()
    }, [])

    const weatherIcons = {
        "01d": "/icons/clear-sky.png",
        "01n": "/icons/clear-sky.png",
        "02d": "/icons/few-cloud.png",
        "02n": "/icons/few-cloud.png",
        "03d": "/icons/cloud.png",
        "03n": "/icons/cloud.png",
        "04d": "/icons/scattered-clouds.png",
        "04n": "/icons/scattered-clouds.png",
        "09d": "/icons/shower.png",
        "09n": "/icons/shower.png",
        "10d": "/icons/raining.png",
        "10n": "/icons/raining.png",
        "11d": "/icons/storm.png",
        "11n": "/icons/storm.png",
        "13d": "/icons/snow.png",
        "13n": "/icons/snow.png",
        "50d": "/icons/fog.png",
        "50n": "/icons/fog.png",
    }

    const ISOString = (utc) => {
        const date = new Date(utc)
        const hours = date.getHours()
        const day = date.getDay()
        const shortDay = weekdaysShort()[day]
        const time = String(hours).length == 1 ? `0${hours}:00` : `${hours}:00`
        return (
            <div className="time">
                <h3>{shortDay}</h3>
                <h3>{time}</h3>
            </div>
        )
    }

    const feelsLike = (currentWeather.feels_like - 273).toFixed(1)

    return (
        <section id="weather">
            <div className="today">
                <div>
                    <p>
                        {day}, {date} {month}
                    </p>
                    <h1>
                        {city}, {country}
                    </h1>
                </div>
                <div>
                    <div className="temp">
                        <p>Feels like</p> <b>{feelsLike}&deg;</b>
                    </div>
                    <h2
                        style={{
                            fontSize: "30px",
                            fontWeight: "500",
                            lineHeight: "0.9",
                            textAlign: "right",
                            textTransform: "capitalize",
                        }}
                    >
                        {description}
                    </h2>
                </div>
            </div>
            <div className="weather-info">
                {currentForecast.map((info, index) => (
                    <WeatherInfo
                        key={index}
                        day={ISOString(info.dt_txt)}
                        temp={Number(info.main.temp_min - 273).toFixed(1)}
                        high={Number(info.main.temp_min - 273).toFixed(1)}
                        img={weatherIcons[info.weather[0].icon]}
                        feelsLike={info.weather[0].description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Weather
