import axios from "axios";
import { endpoints } from "../utils/utils";

export const fetchForecast = async (city) => {
  return await axios.get(endpoints(city).forecast);
};
