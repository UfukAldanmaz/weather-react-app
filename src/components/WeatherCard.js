import React from "react"

const WeatherCard = ({ day, temp, humidity, icon }) => {


    const timeStamp = day;
    const date = new Date(timeStamp * 1000);
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayOfWeek = days[date.getDay()];

    return (
        <div className="grid-item">
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title"></p>
                    <p className="weather-data__value"><strong>{dayOfWeek}</strong></p>
                    <hr />
                </span>
                <span className="weather-data__property">
                    <p>Sıcaklık</p>
                    <p className="weather-data__value">{temp.day} °C </p>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title">Nem</p>
                    <p className="weather-data__value">{humidity}</p>
                    <img src="https://cdn-icons.flaticon.com/png/512/3262/premium/3262968.png?token=exp=1647268878~hmac=345b7e64c8f1419890ce5dd06441c002"
                        width="35"
                        height="40" />
                </span>
            </div>
        </div>
    )
}

export default WeatherCard;