import React from "react"

function WeatherInfo({ day, img, high, low, feelsLike }) {
    return (
        <div className="weather-daily">
            <h3>{day}</h3>
            <div className="weather-img">
                <img src={`${img}`} alt="weather-img" />
            </div>
            <p className="feels-like">{feelsLike}</p>
            <div className="temp">
                <p>{low}&deg;</p>
                <p>{high}&deg;</p>
            </div>
        </div>
    )
}

export default WeatherInfo
