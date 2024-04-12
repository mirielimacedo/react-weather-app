import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="São Paulo" />

        <footer>
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            Mirieli Maria{" "}
          </a>{" "}
          an is {""}
          <a
            href="https://github.com/mirielimacedo/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
