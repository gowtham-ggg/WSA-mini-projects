import React, { useEffect, useState } from 'react';
import CardLayout from './UI/CardLayout';
import sun from "../assets/images/sun.svg";
import temperature from "../assets/images/temperature.svg";
import eye from "../assets/images/eye.svg";
import thermometer from "../assets/images/temperature-mini.svg";
import windy from "../assets/images/windy.svg"
import water from "../assets/images/water.svg"
import cloud from "../assets/images/cloud.svg"
import search from "../assets/images/search.svg"
import { weatherCodesMapping } from './util';

const DefaultScreen = (props) => {
  const [searchCity, setSearchCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = (label)=>{
    fetch(
      `https://nominatim.openstreetmap.org/search?q=${label}&format=json&addressdetails=1`
      ).then((response) => response.json()).then((suggestionFetched)=>{
        const tempSuggestions = [];
        suggestionFetched?.length && suggestionFetched.forEach((suggestedItem)=>{
          tempSuggestions.push({
            label : `${
              suggestedItem?.address?.village??
              suggestedItem?.address?.suburb??
              suggestedItem?.address?.town??
              suggestedItem?.address?.city

            }, 
            ${suggestedItem?.address?.state},
            ${suggestedItem?.address?.country}
            `,
            lat: suggestedItem.lat,
            lng : suggestedItem.lng,
          });
        });
        setSuggestions(tempSuggestions);
      })
  };

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      fetchSuggestions(setSearchCity);
    },300);
    return () =>clearTimeout(timeOut);
  }, [searchCity]);
  return (
    <div className="home-main-div">
      <div className="default-home-container">
        {/* Weather Card */}
        <CardLayout>
          {props?.currenWeatherData?.length>0 && props.currenWeatherData[0] &&(
            <>
    <div className="default-card-city">
            <img src={weatherCodesMapping[props.currenWeatherData[0]?.values?.weatherCode].img} alt="weather icon" />
            <div>
              <p className="city-name">{props.forecastLocation?.label}</p>
              <p className="date-today">today</p>
            </div>
          </div>

          <div className="temp-container">
            <img src={temperature} alt="thermo" className="thermometer-img" />
            <div>
              <p style={{ fontSize: "144px" }}>
              {parseFloat(props.currenWeatherData[0].values?.temperature2m.toFixed(0))}
              </p>
              <p className="text-capitalize">
                {props.currenWeatherData[0].values?.weatherCondition}
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
              <p>{Math.floor(props.currenWeatherData[0].values?.visibility / 1000)} km</p>
            </div>
            <p>|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={thermometer} alt="feels like" />
                <p className="weather-params-label">Feels Like</p>
              </div>
              <p>{Math.floor(props.currenWeatherData[0].values?.apparentTemperature)}&deg;C</p>
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
              <p>{props.currenWeatherData[0].values?.humidity}%</p>
            </div>
            <p>|</p>
            <div className="weather-info-subtile">
              <div className="flex">
                <img src={windy} alt="wind speed" />
                <p className="weather-params-label">Wind Speed</p>
              </div>
              <p>{props.currenWeatherData[0].values?.windSpeed} km/hr</p>
            </div>
          </div>
            </>
          )}
      
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
