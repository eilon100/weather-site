import axios from "axios";
import { options } from "../utils/utils";

export const fetchAutoComplete = async (inputValue) => {
  return await axios.request(options(inputValue));
};
