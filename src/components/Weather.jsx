import React, { useEffect, useState } from "react"
import WeatherInfo from "./WeatherInfo"

function Weather({ day, date, month }) {
    const [weatherInfo, setWeatherInfo] = useState({})
    const [currentWeather, setCurrentWeather] = useState({})
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [description, setDescription] = useState("")
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

    let [currentForecast, setCurrentForecast] = useState([])

    const location = navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
    })

    // const weatherInfo = [
    //     { day: "Sunday", high: 25, low: 23, feelsLike: "rainy" },
    //     { day: "Monday", high: 27, low: 25, feelsLike: "sunny" },
    //     { day: "Tuesday", high: 27, low: 25, feelsLike: "rainy" },
    //     { day: "Wednesday", high: 27, low: 25, feelsLike: "rainy" },
    //     { day: "Thursday", high: 27, low: 25, feelsLike: "rainy" },
    // ]

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
        "03d": "/icons/could.png",
        "03n": "/icons/could.png",
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
    
    console.log(currentForecast)
    const feelsLike = (Number(currentWeather.feels_like) - 273).toFixed(1)
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
                        // day={info.day}
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
