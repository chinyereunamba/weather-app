import React from "react"
import WeatherInfo from "./WeatherInfo"

function Weather() {
    const weatherInfo = [
        { day: "Sunday", high: 25, low: 23, feelsLike: "rainy" },
        { day: "Monday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Tuesday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Wednesday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Thursday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Friday", high: 27, low: 25, feelsLike: "rainy" },
        { day: "Saturday", high: 27, low: 25, feelsLike: "rainy" },
    ]

    weatherInfo.forEach((info) => {
        if (info.feelsLike == "rainy") {
            info.img = "images"
        }
    })

    const backgroundImg = {
        sunset: "https://images.unsplash.com/photo-1551815943-385d5246c8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    }

    return (
        <section id="weather">
            <div className="today">
                <div>
                    <p>Sun, 8th Oct</p>
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
                    />
                ))}
            </div>
        </section>
    )
}

export default Weather
