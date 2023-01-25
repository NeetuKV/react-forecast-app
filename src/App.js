import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <Weather />
        <button className="btn btn-primary">Button</button>
        <footer>
          Coded by Praneetha.
          <a href="https://github.com/NeetuKV/react-forecast-app">
            Open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
