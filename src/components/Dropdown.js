import CityData from './CityData.json';
import { useState, useContext } from 'react';
import CurrentCity from './CurrentCity';
import WeatherContext from '../Contexts/WeatherContext';

const Dropdown = () => {
    const { api_call } = useContext(WeatherContext)
    const [currentCityName, setCurrentCityName] = useState();

    function handleChange(e) {
        e.preventDefault()
        const selectedCityId = e.target.value;
        const selectedCity = CityData.Cities.find(city => city.id === Number(selectedCityId));
        setCurrentCityName(selectedCity.name)

        api_call(selectedCity);
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
            <CurrentCity cityName={currentCityName} />
        </div >)
}

export default Dropdown;