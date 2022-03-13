import React from "react"

const WeatherCard = ({ temp, humidity, pressure, icon }) => {
    return (
        <div className="weather-data">
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title">Temperature</p>
                    <p className="weather-data__value">{temp.day}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Humidity</p>
                    <p className="weather-data__value">{humidity}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Pressure</p>
                    <p className="weather-data__value">{pressure}</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title"></p>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                </span>
            </div>
        </div>
    )
}

export default WeatherCard;