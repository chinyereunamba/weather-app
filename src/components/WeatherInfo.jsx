import React from "react"

function WeatherInfo({ day, img, temp, feelsLike }) {
    return (
        <div className="weather-daily">
            {day}
            <div className="temp">
                <h1>{temp}&deg;</h1>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div className="weather-img">
                    <img src={`${img}`} alt="weather-img" />
                </div>
            </div>
            <p className="feels-like">{feelsLike}</p>
        </div>
    )
}

export default WeatherInfo
