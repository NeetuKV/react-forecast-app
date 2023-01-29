import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "RAIN",
    "04n": "RAIN",
    "09d": "SLEET",
    "09n": "SLEET",
    "010d": "SNOWY",
    "010n": "SNOW",
    "011d": "WIND",
    "011n": "WIND",
    "013d": "FOG",
    "013n": "FOG",
    "050d": "CLEAR_DAY",
    "050n": "CLEAR_DAY",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}
