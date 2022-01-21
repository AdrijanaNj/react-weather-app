import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-weather">
        <div className="row">
          <div className="col-6">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                Last updated:{" "}
                <span>
                  <FormattedDate date={props.data.date} />
                </span>
                <span>, </span>
                <span className="description text-capitalize">
                  {props.data.description}
                </span>
              </li>
              <li>
                Humidity: <strong>{props.data.humidity}</strong>
                <strong>%</strong>, Wind: <strong>{props.data.wind}</strong>
                <strong>km/h</strong>
              </li>
            </ul>
          </div>
          <div className="current col-6">
            <span className="weather-today-image">
              <WeatherIcon code={props.data.icon} />
            </span>
            <WeatherTemperature celsius={props.data.temperature} />
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
}
