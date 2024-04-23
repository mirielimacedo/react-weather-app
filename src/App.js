// App.js
import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState("Perth");

  return (
    <div className="App">
      <div className="container">
        <Weather city={city} onCityChange={setCity} />

        <footer>
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            Mirieli Maria{" "}
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/mirielimacedo/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub {""}
          </a>
          and{""}
          <a
            href="https://master--react-weaather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {""} hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
