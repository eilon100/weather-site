export const endpoints = (city) => ({
  forecast: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_INFO_API}`,
  currentWeather: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_INFO_API}`,
});

export const options = (inputValue) => {
  const option = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SEARCH_OPTION_API,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  return option;
};

export const UTCtimeFunction = (deltaTime, timezone, toWhat) => {
  if (toWhat === "month") {
    return new Date((deltaTime + timezone) * 1000).getUTCMonth() + 1;
  }
  if (toWhat === "date") {
    return new Date((deltaTime + timezone) * 1000).getUTCDate().toString();
  }
  if (toWhat === "day") {
    return new Date((deltaTime + timezone) * 1000).getUTCDay().toString();
  }
  if (toWhat === "hour") {
    return new Date((deltaTime + timezone) * 1000).getUTCHours().toString();
  }
  if (toWhat === "minutes") {
    return new Date((deltaTime + timezone) * 1000).getUTCMinutes().toString();
  } else {
    return new Date((deltaTime + timezone) * 1000).toUTCString().toString();
  }
};
