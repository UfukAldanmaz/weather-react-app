import React from "react"
import humidityImg from '../assets/humidity.png';

const WeatherCard = ({ day, temp, humidity, icon }) => {


    const timeStamp = day;
    const date = new Date(timeStamp * 1000);
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayOfWeek = days[date.getDay()];

    return (
        <div className="grid-item">
            <div>
                <span>
                    <p><strong>{dayOfWeek}</strong></p>
                    <hr />
                </span>
                <span>
                    <p>Sıcaklık</p>
                    <p>{temp.day} °C </p>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icons" />
                </span>
                <span>
                    <p>Nem</p>
                    <p>{humidity}</p>
                    <img src={humidityImg}
                        width="35"
                        height="40"
                        alt="humidity" />
                </span>
            </div>
        </div>
    )
}

export default WeatherCard;