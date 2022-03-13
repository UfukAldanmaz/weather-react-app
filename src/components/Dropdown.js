
import CityData from './CityData.json';
import { useState } from 'react';
import CurrentCity from './CurrentCity';


const Dropdown = () => {

    const [currentCityName, setCurrentCityName] = useState("Adana");

    function handleChange(e) {
        const selectedCityId = e.target.value;
        const selectedCity = CityData.Cities.find(city => city.id == selectedCityId);
        setCurrentCityName(selectedCity.name)
    }
    return (
        <div class="dropdown">
            <select onChange={handleChange}>
                {CityData.Cities.map((result) =>
                (<option
                    value={result.id} >
                    {result.name}
                </option>))}
            </select>
            <CurrentCity cityName={currentCityName} />
        </div>)
}

export default Dropdown;