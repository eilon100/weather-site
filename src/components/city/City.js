import React from "react";
import "./_city.scss";
import { UTCtimeFunction } from "../../utils/utils";

function City(props) {
  const currentWeatherData = props.currentWeatherData.data;
  const city =
    currentWeatherData.name
      .toLowerCase()
      .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase()) +
    " ," +
    currentWeatherData.sys.country;
  const date = UTCtimeFunction(
    currentWeatherData.dt,
    currentWeatherData.timezone
  );

  return (
    <div className="city_container">
      <div className="city">
        <h1>{city}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default City;
