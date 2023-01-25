import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <h1>San Francisco</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Mostly Sunny"
          >
            6°F
          </img>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation : 0%</li>
            <li>Humidity : 31%</li>
            <li>Wind : 4mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
