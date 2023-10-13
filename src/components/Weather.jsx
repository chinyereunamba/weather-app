import React, { useEffect, useState } from "react"
import WeatherInfo from "./WeatherInfo"

function Weather({ day, date, month }) {
    // const [weatherInfo, setWeatherInfo] = useState([])
    const [currentWeather, setCurrentWeather] = useState({})
    const [country, setCountry] = useState('')

    const weatherInfo = [
        { day: "Sunday", high: 25, low: 23, feelsLike: "rainy" },
        { day: "Monday", high: 27, low: 25, feelsLike: "sunny" },
        { day: "Tuesday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Wednesday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Thursday", high: 27, low: 25, feelsLike: "rainy" },
    ]
    
    async function callWeather() {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${import.meta.env.VITE_WEATHER_API}`
            )
            const data = await response.json()
            setCurrentWeather(data.main)
            setCountry(data.sys.country)
            console.log(data)
                
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        callWeather()
    }, [])

    const weatherIcons = {
        sunny: "/icons/sun.png",
        cloudy: "/icons/cloudy.png",
        storm: "/icons/storm.png",
        hot: "/icons/hot.png",
        clearSky: "/icons/clear-sky.png",
        raining: "/icons/raining.png",
    }

    weatherInfo.forEach((info) => {
        if (info.feelsLike == "rainy") {
            info.img = weatherIcons.raining
        } else if (info.feelsLike == "sunny") {
            info.img = weatherIcons.sunny
        }
    })

    const feelsLike = (Number(currentWeather.feels_like) - 273).toFixed(1)
    const city = currentWeather.name
    const description = currentWeather.description

    return (
        <section id="weather">
            <div className="today">
                <div>
                    <p>
                        {day}, {date} {month}
                    </p>
                    <h1>{city}, { country }</h1>
                </div>
                <div className="temp">
                    <p>Feels like</p> <b>{ feelsLike }&deg;</b>
                </div>
            </div>
            <p>{ description }</p>
            <div className="weather-info">
                {weatherInfo.map((info, index) => (
                    <WeatherInfo
                        key={index}
                        day={info.day}
                        low={info.low}
                        high={info.high}
                        img={info.img}
                        feelsLike={info.feelsLike}
                    />
                ))}
            </div>
        </section>
    )
}

export default Weather
