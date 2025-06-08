export const fetchWeatherData = async (cityName) => {
    const API_KEY = "dbaf950db7034b5ebf8172743250706"
      try {
        const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data) {
        return {
          city: data.location.name,
          temp: data.current.temp_c,
          wind: data.current.wind_kph,
          humidity: data.current.humidity
        };
      }
    } catch (error) {
        console.log(error);
      }
};