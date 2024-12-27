import React from 'react';
import Card from './ui/Card';
import temparatureIcon from "../assests/1.jpg"
import sun from "../assests/sun.png";
import "../index.css";
const DefaultScreen = () => {
  const currenWeatherData = {
    date: '2024-12-26',
    values: {
      temperature: 24.5,
      weatherConditions: 'rainny',
      Visibility: 10000,
      apparentTemperature: 26,
      humidity: 65,
      windspeed: 12,
    },
  };

  return (
    <div className="home-container">
      <div className="default-home-container">
        <Card>
          <div className="default-card-city">
            <img src={sun} alt="sun" className="weather-icon" />
            <div>
              <p className="city-name">New Delhi</p>
              <p className="date-today">Tue 10/12/2024</p>
            </div>
          </div>
          <div className="temp-container">
            <img src={temparatureIcon} alt="thermo" className="thermometer-img" />
            <div>
              <p className="temperature-value">
                {Math.round(currenWeatherData.values.temperature)}
              </p>
              <p className="weather-conditions text-capitalize">
                {currenWeatherData.values.weatherConditions}
              </p>
            </div>
            <p className="temperature-unit">&deg;C</p>
          </div>
          <div className="weather-info-row">
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={temparatureIcon} alt="visibility" />
                <p className="weather-params-label">Visibility</p>
              </div>
              <p>{Math.floor(currenWeatherData.values.Visibility / 1000)} km</p>
            </div>
            <p className="separator">|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={temparatureIcon} alt="feels like" />
                <p className="weather-params-label">Feels Like</p>
              </div>
              <p>
                {Math.floor(currenWeatherData.values.apparentTemperature)}&deg;C
              </p>
            </div>
          </div>
          <div className="weather-info-row">
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={temparatureIcon} alt="humidity" />
                <p className="weather-params-label">Humidity</p>
              </div>
              <p>{currenWeatherData.values.humidity}%</p>
            </div>
            <p className="separator">|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={temparatureIcon} alt="wind speed" />
                <p className="weather-params-label">Wind Speed</p>
              </div>
              <p>{Math.floor(currenWeatherData.values.windspeed)} km/hr</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="search-card">
            <div className="flex justify-center">
              <img src={sun} alt="cloud" />
            </div>
            <div className="search-city-container">
            
              <input
                type="text"
                className="city-input"
                placeholder="City Name"
              />
            </div>
            <div className="search-city-suggestions"></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DefaultScreen;
