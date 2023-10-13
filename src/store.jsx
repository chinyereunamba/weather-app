import { createContext, useState } from "react"

export const SearchValue = createContext({})

export function Context({ children }) {
    const [weatherInfo, setWeatherInfo] = useState({})
    const [currentForecast, setCurrentForecast] = useState([])
    const [currentWeather, setCurrentWeather] = useState({})
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [description, setDescription] = useState("")

    return (
        <SearchValue.Provider
            value={{
                
                weatherInfo,
                setWeatherInfo,
                currentForecast,
                setCurrentForecast,
                currentWeather,
                setCurrentWeather,
                city,
                setCity,
                country,
                setCountry,
                description,
                setDescription,
            }}
        >
            {children}
        </SearchValue.Provider>
    )
}
