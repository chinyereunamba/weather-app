import React, { useState } from "react"
import WeatherInfo from "./WeatherInfo"

async function Weather({ day, date, month }) {
    const [weatherInfo, setWeatherInfo] = useState([])

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${
            import.meta.env.VITE_WEATHER_API
        }`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((data) => {
            data.json()
        })
        .then((weather) => {
            setWeatherInfo(weather)
        })
        .catch((err) => {
            console.error(err)
        })

    console.log(weatherInfo)

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

    return (
        <section id="weather">
            <div className="today">
                <div>
                    <p>
                        {day}, {date} {month}
                    </p>
                    <h1>Port Harcourt, Rivers</h1>
                </div>
                <h3>Feels like 23&deg;</h3>
            </div>
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
