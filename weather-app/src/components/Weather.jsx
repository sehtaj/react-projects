import SunnyIcon from '@mui/icons-material/WbSunny';
import './Weather.css';


export default function Weather({weatherData}) {

  return (
    <div className="weather-card">
      <p className="weather-location">Location : {weatherData.city}</p>
      <p className="weather-temp"> Temperature : {weatherData.temp}</p>
      <p className="weather-wind-speed"> Wind Speed : {weatherData.wind}</p>
      <p className="weather-humidity"> Humidity :{weatherData.humidity}</p>
      
      <SunnyIcon className="weather-icon" />
    </div>
  );
}
