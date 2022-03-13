
function CurrentCity(props) {
    return (
        <div>
            <p className="weather__tagline">Weather forecast for <span className="weather-data__city">{props.cityName}</span></p>
        </div>
    )
}

export default CurrentCity;