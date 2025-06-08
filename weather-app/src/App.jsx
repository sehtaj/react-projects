import './App.css';
import SearchBar from './components/searchBar';
import Weather from './components/Weather';
import { useState, useEffect } from "react";
import './components/Header.css';
import {fetchWeatherData} from "./getWeatherData"


function App() {

  const [weather, setWeather] = useState(null);
  const [findCity,setFindCity] = useState('')


  useEffect(() => {
        if (findCity === '') return; 

    async function fetchWeather() {
      const data = await fetchWeatherData(findCity);
      if (data) {
        const simplified = {
          city: data.location.name,
          temp: data.current.temp_c,
          wind: data.current.wind_kph,
          humidity: data.current.humidity
        };
        setWeather(simplified);
      }
    }
    fetchWeather();
  }, [findCity]);
  
  return (
    <div className="app">
    <div className="header">
    <h1 className="header-title">Weather App</h1>
    </div>
      <SearchBar setFindCity={setFindCity} />
      {weather && <Weather weatherData={weather} />}
    </div>
  );
}

export default App;