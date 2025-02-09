import React from 'react';
import Card from './UI/CardLayout';
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

  // Placeholder image URLs
  const dummyImage = 'https://via.placeholder.com/50';
  const dummyWeatherImage = 'https://via.placeholder.com/100';

  return (
    <div className="home-container">
      <div className="default-home-container">
        <Card>
          <div className="default-card-city">
            <img src={dummyWeatherImage} alt="sun" />
            <div>
              <p className="city-name">New Delhi</p>
              <p className="date-today">Tue 10/12/2024</p>
            </div>
          </div>
          <div className="temp-container">
            <img src={dummyImage} alt="thermo" className="thermometer-img" />
            <div>
              <p style={{ fontSize: '144px' }}>
                {Math.round(currenWeatherData.values.temperature)}
              </p>
              <p className="text-capitalize">
                {currenWeatherData.values.weatherConditions}
              </p>
            </div>
            <p
              style={{
                fontSize: '24px',
                alignSelf: 'start',
                paddingTop: '45px',
              }}
            >
              &deg;C
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '60px',
              width: '100%',
              columnGap: '16px',
            }}
          >
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={dummyImage} alt="visibility" />
                <p className="weather-params-label">Visibility</p>
              </div>
              <p>{Math.floor(currenWeatherData.values.Visibility / 1000)} km</p>
            </div>
            <p>|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={dummyImage} alt="feels like" />
                <p className="weather-params-label">Feels Like</p>
              </div>
              <p>
                {Math.floor(currenWeatherData.values.apparentTemperature)}&deg;C
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '20px',
              width: '100%',
              columnGap: '16px',
            }}
          >
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={dummyImage} alt="humidity" />
                <p className="weather-params-label">Humidity</p>
              </div>
              <p>{currenWeatherData.values.humidity}%</p>
            </div>
            <p>|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={dummyImage} alt="wind speed" />
                <p className="weather-params-label">Wind Speed</p>
              </div>
              <p>{Math.floor(currenWeatherData.values.windspeed)} km/hr</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="search-card">
            <div className="flex justify-center">
              <img src={dummyImage} alt="cloud" />
            </div>
            <div className="search-city-container">
              <img src={dummyImage} alt="search icon" />
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
