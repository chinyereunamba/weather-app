import React from "react"

function WeatherInfo({ day, img, temp, feelsLike }) {
    return (
        <div className="weather-daily">
            <h3>{day}</h3>
            <div className="weather-img">
                <img src={`${img}`} alt="weather-img" />
            </div>
            <p className="feels-like">{feelsLike}</p>
            <div className="temp">
                <p>{temp}&deg;</p>
            </div>
        </div>
    )
}

export default WeatherInfo
