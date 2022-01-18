import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Wednesday 07:00",
    });
  }

  if (weatherData.loaded) {
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
                  <span className="description text-capitalize">
                    {weatherData.description}
                  </span>
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
                src={weatherData.iconUrl}
                className="weather-today-image"
                alt={weatherData.description}
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
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
            href="https://github.com/AdrijanaNj/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://boring-colden-9e1a1a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "4b3503b2f08a729413c4d33ef1186004";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
