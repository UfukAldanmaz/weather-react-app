import React, { useContext } from "react"
import WeatherContext from "../Contexts/WeatherContext"
import WeatherCard from "./WeatherCard"

const WeatherCardContainer = () => {
    const { weatherData } = useContext(WeatherContext)
    return (
        weatherData.map((weather) => (
            <WeatherCard temp={weather.temp} humidity={weather.humidity} pressure={weather.pressure} icon={weather.weather[0].icon} />
        ))

    )
}

export default WeatherCardContainer;