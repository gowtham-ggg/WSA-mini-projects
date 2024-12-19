import React from "react";
import CardLayout from "./UI/CardLayout";
import Sun from "../assets/images/sun.svg";
import Temperature from "../assets/images/temperature.svg";
import Eye from "../assets/images/eye.svg";
import ThermoMini from "../assets/images/temperature-mini.svg";
import Water from "../assets/images/water.svg"; // Corrected path
import Windy from "../assets/images/windy.svg";
import Location from "../assets/images/location.svg";

const SearchResult = () => {
  const currentWeatherData = {
    date: "2023-12-10",
    temperature: 24.5,
    Visibility: 10000,
    feelsLike: 26,
    humidity: 65,
    windSpeed: 12,
    title: "Clear Sky",
    city: "NewDelhi",
  };
  return (
    <div className="search-result-container-div">
      <p className="forecast-title text-capitalize">
        {currentWeatherData.title}
      </p>
      <CardLayout>
        <div className="flex items-center justify-between">
          <div style={{ width: "30%" }}>
            <img src={Sun} width={48} height={48} alt="Weather" />
            <div className="flex items-center">
              <img src={Location} />
              <p className="city-name">{currentWeatherData.city}</p>
            </div>
            <p className="text-blue" style={{ paddingLeft: "30px" }}>
              Today {currentWeatherData.date}
            </p>
          </div>
          <div className="temp-container" style={{ width: "auto" }}>
            <img src={Temperature} className="thermometer-img" />

            <div>
              <p style={{ fontSize: "144px" }}>
                {currentWeatherData.temperature}
              </p>
              <p>{currentWeatherData.title}</p>
            </div>
            <p
              style={{
                fontSize: "24px",
                alignSelf: "Start",
                paddingTop: "45px",
              }}
            >
              &deg;C
            </p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                columnGap: "16px",
              }}
            >
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Eye} />
                  <p className="weather-params-label">Visibilty</p>
                </div>
                <p>{Math.floor(currentWeatherData.Visibility / 1000)}km</p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={ThermoMini} />
                  <p className="weather-params-label">Feels Like</p>
                </div>
                <p>
                  {Math.floor(currentWeatherData.feelsLike)}
                  &deg;C
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "24px",
                width: "100%",
                columnGap: "16px",
              }}
            >
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Water} />
                  <p className="weather-params-label">Humidity</p>
                </div>
                <p>{Math.floor(currentWeatherData.humidity)}%</p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Windy} />
                  <p className="weather-params-label">Wind</p>
                </div>
                <p>
                  {Math.floor(currentWeatherData.windSpeed)}
                  km/hr
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default SearchResult;
