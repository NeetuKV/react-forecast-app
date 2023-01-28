import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate data={props.data.date} />
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity : {weatherData.humidity}%</li>
            <li>Wind : {weatherData.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
