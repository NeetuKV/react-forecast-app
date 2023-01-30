import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          icon
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 18°</span>
            <span className="WeatherForecast-temperature-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
