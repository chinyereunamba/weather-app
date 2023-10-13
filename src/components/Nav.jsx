import React, { useRef, useContext, useState } from "react"
import profile from "../assets/profile_pic.png"
import { signOut } from "firebase/auth"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { SearchValue } from "../store"

function Nav() {
    const enteredCity = useRef()
    const { setWeatherInfo } = useContext(SearchValue)
    
    const { setCountry } = useContext(SearchValue)
    const { setCurrentForecast } = useContext(SearchValue)
    const { setCurrentWeather } = useContext(SearchValue)
    const { setDescription } = useContext(SearchValue)
    const {setCity} = useContext(SearchValue)

    async function weatherInSearch(e) {
        e.preventDefault()
        const search = enteredCity.current.value
        
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${
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
            setCurrentWeather(data.list[0].main)
            setCountry(data.city.country)
            setCity(data.city.name)
            setDescription(data.list[0].weather[0].description)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div className="nav">
            <form onSubmit={weatherInSearch}>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search city"
                        ref={enteredCity}
                        required
                    />
                    <button type="submit">
                        <FaMagnifyingGlass fill={"white"} />
                    </button>
                </div>
            </form>
            <div className="profile">
                <div className="profile-img">
                    <img src={`${profile}`} alt="profile-pic" />
                </div>
                <button onClick={signOut}>Logout</button>
            </div>
        </div>
    )
}

export default Nav
