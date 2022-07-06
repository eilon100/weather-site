import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillCloudFill,
  BsCloudsFill,
  BsFillCloudRainHeavyFill,
  BsSnow,
} from "react-icons/bs";
import { FaCloudMoonRain, FaCloudSunRain } from "react-icons/fa";
import {
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDayCloudy,
  WiNightAltCloudy,
} from "react-icons/wi";

const icons = [
  {
    "01d": <BsFillSunFill className="weather_icon" />,
    "01n": <BsFillMoonFill className="weather_icon" />,
    "02d": <WiDayCloudy className="weather_icon" />,
    "02n": <WiNightAltCloudy className="weather_icon" />,
    "03d": <BsFillCloudFill className="weather_icon" />,
    "03n": <BsFillCloudFill className="weather_icon" />,
    "04d": <BsCloudsFill className="weather_icon" />,
    "04n": <BsCloudsFill className="weather_icon" />,
    "09d": <BsFillCloudRainHeavyFill className="weather_icon" />,
    "09n": <BsFillCloudRainHeavyFill className="weather_icon" />,
    "10d": <FaCloudSunRain className="weather_icon" />,
    "10n": <FaCloudMoonRain className="weather_icon" />,
    "11d": <WiDayThunderstorm className="weather_icon" />,
    "11n": <WiNightThunderstorm className="weather_icon" />,
    "13d": <BsSnow className="weather_icon" />,
    "13n": <BsSnow className="weather_icon" />,
  },
  {
    "01d": <BsFillSunFill className="ForeCast_icon" />,
    "01n": <BsFillMoonFill className="ForeCast_icon" />,
    "02d": <WiDayCloudy className="ForeCast_icon" />,
    "02n": <WiNightAltCloudy className="ForeCast_icon" />,
    "03d": <BsFillCloudFill className="ForeCast_icon" />,
    "03n": <BsFillCloudFill className="ForeCast_icon" />,
    "04d": <BsCloudsFill className="ForeCast_icon" />,
    "04n": <BsCloudsFill className="ForeCast_icon" />,
    "09d": <BsFillCloudRainHeavyFill className="ForeCast_icon" />,
    "09n": <BsFillCloudRainHeavyFill className="ForeCast_icon" />,
    "10d": <FaCloudSunRain className="ForeCast_icon" />,
    "10n": <FaCloudMoonRain className="ForeCast_icon" />,
    "11d": <WiDayThunderstorm className="ForeCast_icon" />,
    "11n": <WiNightThunderstorm className="ForeCast_icon" />,
    "13d": <BsSnow className="ForeCast_icon" />,
    "13n": <BsSnow className="ForeCast_icon" />,
  },
];
export default icons;
