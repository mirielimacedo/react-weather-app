// Weather.js
import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather({ city, onCityChange }) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 7:00",
      description: response.data.weather[0].description,
      iconUrl: "https:ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  useEffect(() => {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault();
    onCityChange(city);
  }

  function updateCity(event) {
    onCityChange(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              ></input>
            </div>
            <div className="col-3">
              <button
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <h1> {weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              ></img>
              <span className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">
                  {""} °C {""} | {""} °F
                </span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
