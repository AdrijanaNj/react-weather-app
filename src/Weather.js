import React from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  let weatherData = {
    city: "Oslo",
    temperature: -5,
    date: "Friday 16:07",
    description: "Clear Sky",
    humidity: 50,
    wind: 2,
    imgUrl: "http://openweathermap.org/img/wn/01n@2x.png",
  };
  return (
    <div className="WeatherApp container">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
          <div className="col">
            <button className="btn btn-outline-secondary" type="button">
              <i className="fas fa-map-marker-alt current-location"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="current-weather">
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                Last updated: <span>{weatherData.date}</span>
                <span>, </span>
                <span className="description">{weatherData.description}</span>
              </li>
              <li>
                Humidity: <strong>{weatherData.humidity}</strong>
                <strong>%</strong>, Wind: <strong>{weatherData.wind}</strong>
                <strong>km/h</strong>
              </li>
            </ul>
          </div>
          <div className="current col-6">
            <img
              src={weatherData.imgUrl}
              className="weather-today-image"
              alt={weatherData.description}
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit-C">
              <a href="/">°C</a>
            </span>
            <span className="unit-F">
              |<a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>

      <footer className="mt-5">
        This project was coded by <span>Adrijana Njezic</span> and is{" "}
        <a
          href="https://github.com/AdrijanaNj/weather-app-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://focused-roentgen-88efce.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
