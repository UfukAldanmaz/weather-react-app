import CityData from './CityData.json';
import { useState, useContext, useEffect } from 'react';
import CurrentCity from './CurrentCity';
import WeatherContext from '../Contexts/WeatherContext';

const Dropdown = () => {
    const { api_call } = useContext(WeatherContext)
    const [currentCity, setCurrentCity] = useState(CityData.Cities.find(city => city.id === 1));

    useEffect(() => {
        api_call(currentCity);

    }, [currentCity])

    function handleChange(e) {
        e.preventDefault()
        const selectedCityId = e.target.value;
        const selectedCity = CityData.Cities.find(city => city.id === Number(selectedCityId));
        setCurrentCity(selectedCity)

    }
    return (
        <div className="dropdown" >
            <select onChange={handleChange}>
                {CityData.Cities.map((result) =>
                (<option
                    value={result.id} >
                    {result.name}
                </option>))}
            </select>
            <CurrentCity cityName={currentCity.name} />
        </div >)
}

export default Dropdown;