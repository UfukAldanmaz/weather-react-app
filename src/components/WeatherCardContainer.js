import React, { useContext } from "react"
import WeatherContext from "../Contexts/WeatherContext"
import WeatherCard from "./WeatherCard"

const WeatherCardContainer = () => {
    const { weatherData, cityName } = useContext(WeatherContext)
    const { temp, humidity, pressure } = weatherData
    return (
        <WeatherCard temp={temp} humidity={humidity} pressure={pressure} cityName={cityName} />
    )
}

export default WeatherCardContainer;