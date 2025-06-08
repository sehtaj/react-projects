import './Weather.css';
import {fetchWeatherData} from "../getWeatherData"
import { useState, useEffect } from "react";

export default function Weather({findCity}) {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    async function fetchWeather() {
      const data = await fetchWeatherData(findCity);
        setWeather(data);
    }
    fetchWeather();
  }, [findCity]);

  return (
    <div className="weather-card">
      <p className="weather-location">Location : {weather?.city}</p>
      <p className="weather-temp"> Temperature : {weather?.temp}°C</p>
      <p className="weather-wind-speed"> Wind Speed : {weather?.wind} kmph</p>
      <p className="weather-humidity"> Humidity :{weather?.humidity}</p>
    </div>
  );
}
