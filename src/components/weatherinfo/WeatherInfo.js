import React from "react";
import "./_weather-info.scss";
import icons from "../../utils/WeatherIconsObject";
import { UTCtimeFunction } from "../../utils/utils";

function WeatherInfo(props) {
  const WeatherData = props.currentWeatherData.data;

  const sunrise =
    UTCtimeFunction(
      WeatherData.sys.sunrise,
      WeatherData.timezone,
      "hour"
    ).padStart(2, "0") +
    ":" +
    UTCtimeFunction(
      WeatherData.sys.sunrise,
      WeatherData.timezone,
      "minutes"
    ).padStart(2, "0");

  const sunset =
    UTCtimeFunction(
      WeatherData.sys.sunset,
      WeatherData.timezone,
      "hour"
    ).padStart(2, "0") +
    ":" +
    UTCtimeFunction(
      WeatherData.sys.sunset,
      WeatherData.timezone,
      "minutes"
    ).padStart(2, "0");

  const weatherInfoArr = [
    {
      h1: WeatherData.main.temp_max.toFixed(),
      p1: "Hight",
      h2: WeatherData.main.temp_min.toFixed(),
      p2: "Low",
    },
    {
      h1: WeatherData.wind.speed + "m/s",
      p1: "Wind",
      h2: WeatherData.clouds.all + "%",
      p2: "Clouds",
    },
    { h1: sunrise, p1: "Sunrise", h2: sunset, p2: "Sunset" },
  ];

  return (
    <div className="weather">
      <div className="weather_left">
        {icons[0][WeatherData.weather[0].icon]}
        <div className="weather_info">
          <h1>{WeatherData.main.temp.toFixed()}°</h1>
          <p>{WeatherData.weather[0].description}</p>
        </div>
      </div>
      <div className="weather_info_right">
        {weatherInfoArr.map((info, index) => {
          return (
            <div className="weather_info" key={index}>
              <div>
                <h1>{info.h1}</h1>
                <p>{info.p1}</p>
              </div>
              <div>
                <h1>{info.h2}</h1>
                <p>{info.p2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherInfo;
