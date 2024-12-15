import React from 'react'
import CardLayout from './UI/CardLayout';
import sun from "../assets/images/sun.svg";
import temperature from "../assets/images/temperature.svg";
import eye from "../assets/images/eye.svg";
import thermometer from "../assets/images/temperature-mini.svg";
import windy from "../assets/images/windy.svg"
import water from "../assets/images/water.svg"
import location from "../assets/images/location.svg"
import DayForecastCard from './DayForecastCard';

const SearchResult = () => {
  const currenWeatherData = {
      date: "2024-12-10",
      temperature: 24.5,
      Visibility: 10000,
      feelslike: 26,
      humidity: 65,
      windspeed: 12,
      title : "clearSky",
      city : "NewDelhi",

  };
  return (
    <div className='search-result-container-div'>
      <p className='forecast-title text-capitalize'>{currenWeatherData.title}</p>
      <CardLayout>
        <div className='flex items-center justify-between'>
          <div style={{width : "30%"}}>
              <img src={sun} />
              <div className="flex items-center">
                <img src={location} />
                <p className="city-name">
                  {currenWeatherData.city}
                </p>
              </div>
              <p className="text-blue" style={{paddingLeft : "30px"}}>today : {currenWeatherData.date}</p>
          </div>
          <div className="temp-container" 
          style={{width: "auto"}}
          >
            <img src={temperature} className='thermometer-img'/>
            <div>
              <p style={{fontSize : "144px"}}>{currenWeatherData.temperature}</p>
              <p>{currenWeatherData.title}</p>
            </div>
            <p style={{fontSize:"24px", alignSelf :"start", paddingTop:"45px"}}>
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
                            <img src={eye} alt="visibility" />
                            <p className="weather-params-label">Visibility</p>
                          </div>
                          <p>{Math.floor(currenWeatherData.Visibility / 1000)} km</p>
                        </div>
                        <p>|</p>
                        <div className="weather-info-subtile">
                          <div className="flex">
                            <img src={thermometer} alt="feels like" />
                            <p className="weather-params-label">Feels Like</p>
                          </div>
                          <p>{Math.floor(currenWeatherData.feelslike)}&deg;C</p>
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
                          <p>{currenWeatherData.humidity}%</p>
                        </div>
                        <p>|</p>
                        <div className="weather-info-subtile">
                          <div className="flex">
                            <img src={windy} alt="wind speed" />
                            <p className="weather-params-label">Wind Speed</p>
                          </div>
                          <p>{Math.floor(currenWeatherData.windspeed)} km/hr</p>
                        </div>
                        </div>
          </div>
        </div>
      </CardLayout>
      <div className="flex justify-between daily-forecast-section "
      style={{marginTop : "24px", columnGap:"12px"}}
      >
        <DayForecastCard/>
        <DayForecastCard/>
        <DayForecastCard/>
        <DayForecastCard/>
        <DayForecastCard/>
        <DayForecastCard/>
        <DayForecastCard/>

      </div>
      
    </div>
  )
}

export default SearchResult
