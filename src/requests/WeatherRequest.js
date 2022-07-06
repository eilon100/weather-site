import { fetchCurrentWeather } from "../queries/fetchCurrentWeather";
import { fetchForecast } from "../queries/fetchForecast";
import { useQuery } from "react-query";


function WeatherRequest(city) {
  const { data: currentWeatherData, status: currentWeatherStatus } = useQuery(
    ["currentWeather", city],
    () => fetchCurrentWeather(city)
  );
  const { data: forecastData, status: foreCastStatus } = useQuery(
    ["forecast", city],
    () => fetchForecast(city)
  );

  const currentWeather = {
    currentWeatherData,
    currentWeatherStatus,
  };

  const forecast = {
    forecastData,
    foreCastStatus,
  };

  return [currentWeather, forecast];
}

export default WeatherRequest;
