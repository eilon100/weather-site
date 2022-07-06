import axios from "axios";
import { endpoints } from "../utils/utils";

export const fetchCurrentWeather = async (city) => {
  return await axios.get(endpoints(city).currentWeather);
};
