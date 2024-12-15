import React from 'react';
import CardLayout from './UI/CardLayout';
import sun from "../assets/images/sun.svg";
import temperature from "../assets/images/temperature.svg";
import eye from "../assets/images/eye.svg";
import thermometer from "../assets/images/temperature-mini.svg";
import windy from "../assets/images/windy.svg"
import water from "../assets/images/water.svg"
import cloud from "../assets/images/cloud.svg"
import search from "../assets/images/search.svg"

const DefaultScreen = () => {
  const currenWeatherData = {
    date: "2024-12-10",
    values: {
      temperature: 24.5,
      weatherConditions: "clearSky",
      Visibility: 10000,
      apparentTemperature: 26,
      humidity: 65,
      windspeed: 12,
    },
  };

  return (
    <div className="home-main-div">
      <div className="default-home-container">
        {/* Weather Card */}
        <CardLayout>
          <div className="default-card-city">
            <img src={sun} alt="sun" />
            <div>
              <p className="city-name">New Delhi</p>
              <p className="date-today">Tue 10/12/2024</p>
            </div>
          </div>

          <div className="temp-container">
            <img src={temperature} alt="thermo" className="thermometer-img" />
            <div>
              <p style={{ fontSize: "144px" }}>
                {Math.round(currenWeatherData.values.temperature)}
              </p>
              <p className="text-capitalize">
                {currenWeatherData.values.weatherConditions}
              </p>
            </div>
            <p
              style={{
                fontSize: "24px",
                alignSelf: "start",
                paddingTop: "45px",
              }}
            >
              &deg;C
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "60px",
              width: "100%",
              columnGap: "16px",
            }}
          >
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={eye} alt="visibility" />
                <p className="weather-params-label">Visibility</p>
              </div>
              <p>{Math.floor(currenWeatherData.values.Visibility / 1000)} km</p>
            </div>
            <p>|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={thermometer} alt="feels like" />
                <p className="weather-params-label">Feels Like</p>
              </div>
              <p>{Math.floor(currenWeatherData.values.apparentTemperature)}&deg;C</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              width: "100%",
              columnGap: "16px",
            }}
          >
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={water} alt="humidity" />
                <p className="weather-params-label">Humidity</p>
              </div>
              <p>{currenWeatherData.values.humidity}%</p>
            </div>
            <p>|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={windy} alt="wind speed" />
                <p className="weather-params-label">Wind Speed</p>
              </div>
              <p>{Math.floor(currenWeatherData.values.windspeed)} km/hr</p>
            </div>
          </div>
        </CardLayout>

        {/* Search Card */}
        <CardLayout>
            <div className='search-card'>
              <div className='flex justify-center'>
                  <img src={cloud} />
              </div>
              <div className="search-city-container">
                <img src={search} />
                <input type="text" className='city-input' placeholder='City Name' />
              </div>
              <div className="search-city-suggestions">
                
              </div>
            </div>
        </CardLayout>
      </div>
    </div>
  );
};

export default DefaultScreen;
