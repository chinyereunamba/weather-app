import React from "react"
import WeatherInfo from "./WeatherInfo"

function Weather({day, date, month}) {
    const weatherInfo = [
        { day: "Sunday", high: 25, low: 23, feelsLike: "rainy" },
        { day: "Monday", high: 27, low: 25, feelsLike: "sunny" },
        { day: "Tuesday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Wednesday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Thursday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Friday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Saturday", high: 27, low: 25, feelsLike: "rainy" },
    ]
    
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
            } else if (info.feelsLike == 'sunny') {
                info.img = weatherIcons.sunny
            }
        })

    const location = navigator.geolocation.getCurrentPosition
    console.log(location)

    return (
        <section id="weather">
            <div className="today">
                <div>
                    <p>{day}, {date} {month}</p>
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
