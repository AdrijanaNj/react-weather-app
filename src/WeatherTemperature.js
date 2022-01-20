import React from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit-C">
        <a href="/">°C</a>
      </span>
      <span className="unit-F">
        |<a href="/">°F</a>
      </span>
    </span>
  );
}