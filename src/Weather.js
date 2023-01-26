import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="form-control"
            />
            <input type="Submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>San Francisco</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="Mostly Sunny" />
          6°F
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
