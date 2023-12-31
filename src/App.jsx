import React, { useState } from "react"
import "./App.css"
import Nav from "./components/Nav"
import Weather from "./components/Weather"
import moment from "moment/moment"
import { Context } from "./store"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"
import Login from "./components/Login"

function App() {
    const backgroundImg = {
        sunrise:
            "https://images.unsplash.com/photo-1551815943-385d5246c8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        sunset: "https://images.unsplash.com/photo-1542159919831-40fb0656b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        clearSky:
            "https://images.unsplash.com/photo-1531147646552-1eec68116469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        night: "https://images.unsplash.com/photo-1581886573745-4487c55d95f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1977&q=80",
    }

    const date = moment().format("DD")
    const month = moment().format("MMM")
    const day = moment().format("dddd")

    const hour = moment().format("H")

    const timeOfDay =
        hour >= 12 && hour < 16
            ? "afternoon"
            : hour >= 16 && hour < 23
            ? "evening"
            : "morning"

    const background =
        timeOfDay == "afternoon"
            ? backgroundImg.clearSky
            : hour >= 18 && hour < 20
            ? backgroundImg.sunset
            : hour >= 20 || hour <= 5
            ? backgroundImg.night
            : backgroundImg.sunrise

    const [user] = useAuthState(auth)

    return user?(
        <Context>
            <section
                style={{
                    background: `url('${background}') #00000052 no-repeat center`,
                    backgroundBlendMode: "darken",
                }}
            >
                <Nav />
                <div className="App">
                    <h1 className="greeting">Good {timeOfDay}, Chinyere</h1>
                    <Weather month={month} date={date} day={day} />
                </div>
            </section>
        </Context>
    ): <Login />
}

export default App
