import React, { useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Content from './Content'
import Error from './Error'
import DateTime from './DateTime'
import Dropdown from './Dropdown'
import WeatherCardContainer from './WeatherCardContainer'
import WeatherContext from '../Contexts/WeatherContext'

const Main = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const api_call = async city => {
    if (!city) {
      return setError("Please enter the name of the city"), setWeatherData([])
    }

    const API_KEY = "4ec48ffb1e2151b439eda4d3d1526d93"
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`
    axios
      .get(url)
      .then((response) => {
        setWeatherData(response.data.daily)
      })
      .catch((error) => {
        setError(error)
      })
  }

  return (
    <div> Weather Forecast
      <Header />
      <Content>
        <WeatherContext.Provider value={{ api_call, weatherData }}>
          <Dropdown />
          {weatherData !== null && <WeatherCardContainer />}
        </WeatherContext.Provider>
        {Error !== null && <Error error={error} />}
        <DateTime />
      </Content>
    </div>
  )
}

export default Main;// <WeatherSearch />