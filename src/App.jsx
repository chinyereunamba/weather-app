import React from "react"
import "./App.css"
import Nav from "./components/Nav"
import Weather from "./components/Weather"

function App() {
    return (
        <>
            <Nav />
            <div className="App">
                <h1>Good evening, Chinyere</h1>
                <Weather />
            </div>
        </>
    )
}

export default App
