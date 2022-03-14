import React, { useContext } from "react"
import WeatherContext from "../Contexts/WeatherContext"
import WeatherCard from "./WeatherCard"


const WeatherCardContainer = () => {
    const { weatherData } = useContext(WeatherContext)



    return (<div className="grid-container">


        {weatherData.map((weather) => (
            <WeatherCard day={weather.dt} temp={weather.temp} humidity={weather.humidity} icon={weather.weather[0].icon} />
        ))}

    </div>
    )
}

export default WeatherCardContainer;