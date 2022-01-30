import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Oslo" />
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

export default App;
