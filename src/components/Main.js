import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Content from './Content'
import Error from './Error'
import DateTime from './DateTime'
import Dropdown from './Dropdown'
import WeatherCardContainer from './WeatherCardContainer'
import WeatherContext from '../Contexts/WeatherContext'

const Main = () => {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude)
    })
  })


  const api_call = async e => {
    e.preventDefault()
    const location = e.target.elements.city.value
    if (!location) {
      return setError("Please enter the name of the city"), setWeather(null)

    }

    const API_KEY = "4ec48ffb1e2151b439eda4d3d1526d93"
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={long}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`
    const request = axios.get(url)
    const response = await request
    setError(null)
    setWeather(response.data.current.temp)
    setCity(response.data.current.timezone)

  }





  return (
    <div> Weather Forecast
      <Header />
      <Content>
        <WeatherContext.Consumer>
          {(context) => {
            console.log(context)
          }}
          {/* <WeatherContextProvider value={{ api_call, weather, city }}> */}
          <Dropdown />
          <DateTime />
          {weather !== null && <WeatherCardContainer />}
          {Error !== null && <Error error={error} />}
          {/* </WeatherContextProvider> */}
        </WeatherContext.Consumer>

      </Content>
    </div>
  )
}

export default Main;// <WeatherSearch />