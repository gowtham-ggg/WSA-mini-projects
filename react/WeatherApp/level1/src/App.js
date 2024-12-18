import DefaultScreen from "./components/DefaultScreen";
import "../src/style/index.css"
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";
import {weatherCodesMapping} from "./components/util"

function App() {
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [showResultScreen, setShowResultScreen] = useState(false);
  const [forecastLocation, setForecastLocation] = useState({label : "Ramanathapuram",
    lat : 9.3716,
    lng : 78.8308
  });

  const fetchWeather = async(lat, lng, switchToResultScreen)=> {

    const params = {
      latitude: lat ?? 9.3716,
      longitude: lng ?? 78.8308,
      hourly: ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation_probability", "weather_code", "visibility", "wind_speed_10m", "wind_direction_10m"],
      daily: ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "sunrise", "sunset", "uv_index_max", "precipitation_sum", "wind_speed_10m_max", "wind_direction_10m_dominant"]
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    
    // Helper function to form time ranges
    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    
    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();

    
    const hourly = response.hourly();
    const daily = response.daily();
    
    // Note: The order of weather variables in the URL query and the indices below need to match
    const weatherData = {
    
      hourly: {
        time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m: hourly.variables(0).valuesArray(),
        relativeHumidity2m: hourly.variables(1).valuesArray(),
        apparentTemperature: hourly.variables(2).valuesArray(),
        precipitationProbability: hourly.variables(3).valuesArray(),
        weatherCode: hourly.variables(4).valuesArray(),
        visibility: hourly.variables(5).valuesArray(),
        windSpeed10m: hourly.variables(6).valuesArray(),
        windDirection10m: hourly.variables(7).valuesArray(),
      },
      daily: {
        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        weatherCode: daily.variables(0).valuesArray(),
        temperature2mMax: daily.variables(1).valuesArray(),
        temperature2mMin: daily.variables(2).valuesArray(),
        apparentTemperatureMax: daily.variables(3).valuesArray(),
        apparentTemperatureMin: daily.variables(4).valuesArray(),
        sunrise: daily.variables(5).valuesArray(),
        sunset: daily.variables(6).valuesArray(),
        uvIndexMax: daily.variables(7).valuesArray(),
        precipitationSum: daily.variables(8).valuesArray(),
        windSpeed10mMax: daily.variables(9).valuesArray(),
        windDirection10mDominant: daily.variables(10).valuesArray(),
      },
    
    };
    const {hourlyData, dailyData} = processData(
      weatherData.hourly,
      weatherData.daily
    );
    setHourlyForecastData(hourlyData);
    setDailyForecast(dailyData);
    setDataLoading(false);
    if(switchToResultScreen){
      setShowResultScreen(true);
    }
  }
  useEffect(()=>{
    setDataLoading(true);
    fetchWeather();
  },[])
  function filterAndFalgClosestTime(data){
    const currenDate = new Date();
    const entries = Object.entries(data);

    const todayData = entries.filter(([dateString])=>{

      const date = new Date(dateString);
      return (
        date.getDate() === currenDate.getDate() &&
        date.getMonth() === currenDate.getMonth() &&
        date.getFullYear() === currenDate.getFullYear()
      );
    });
    let closestTimeIndex = 0;
    let closestTimeDiff = Math.abs(currenDate - new Date(todayData[0][0]));

    todayData.forEach(([dateString], index)=>{
      const timeDiff = Math.abs(currenDate - new Date(dateString));
      if(timeDiff < closestTimeDiff){
        closestTimeDiff = timeDiff;
        closestTimeIndex = index;
      }
      
    })
    const result = todayData.map(([dateString, values], index)=>({
      date : dateString,
      values,
      isClosestTime : index === closestTimeIndex,
    }));
    return result;
  }

  function processData(hourly, daily){
    function convertTimeToObjectArray(times, values){
      const obj = {};
      for (let i=0; i <= Object.keys(values) ?. length-1; i++){
        times?.length &&
        times.forEach((time, timeIndex)=>{
          obj[time] = {
            ...obj[time], 
            [Object.keys(values)[i]] : 
            values[Object.keys(values)[i]]?.[timeIndex],
            weatherCondtion : 
            weatherCodesMapping[values.weatherCode[timeIndex]].label,
          }
        })
      }
      return obj;
    }
    const dailyData = convertTimeToObjectArray(daily.time, {
      weatherCode : daily.weatherCode,
      temperature2mMax : daily.temperature2mMax,
      temperature2mMin: daily.temperature2mMin,
      apparentTemperatureMax : daily.apparentTemperatureMax,
      apparentTemperatureMin : daily.apparentTemperatureMin,
      sunrise : daily.sunrise,
      sunset : daily.sunset,
      uvIndexMax : daily.uvIndexMax,
      precipitationSum : daily.precipitationSum,
      windSpeed10mMax : daily.windSpeed10mMax,
      windDirection10mDominant : daily.windDirection10mDominant,

    });
    const hourlyFormatted = convertTimeToObjectArray(hourly.time, {
      temperature2m : hourly.temperature2m,
      visibility: hourly.visibility,
      windDirection10m : hourly.windDirection10m,
      apparentTemperature : hourly.apparentTemperature,
      precipitationSum : hourly.precipitationProbability,
      humidity : hourly.humidity,
      weatherCode : hourly.weatherCode,
    });
    const hourlyData = filterAndFalgClosestTime(hourlyFormatted);
    return {
      dailyData,
      hourlyData,
    };
  }
  const clickHandler = (searchItem)=>{
    setDataLoading(true);
    setForecastLocation({
      label : searchItem.label,
      lat : searchItem.lat,
      lng : searchItem.lng,
    });
    fetchWeather(searchItem.lat, searchItem.lng, true)
  }
  return (
    <div className="app">
      <Header/>
      {!dataLoading && !showResultScreen && (
  <DefaultScreen 
    clickHandler={clickHandler} 
    currentWeatherData={
      hourlyForecastData?.length 
        ? hourlyForecastData.filter((hour) => hour.isClosestTime) 
        : []
    } 
    forecastLocation = {forecastLocation}
  />
)}

      {showResultScreen && !dataLoading && (
        <SearchResult 
        currentWeatherData={
          hourlyForecastData?.length 
            ? hourlyForecastData.filter((hour) => hour.isClosestTime) 
            : []
        }    
        forecastLocation={forecastLocation}    
        dailyForecast = {dailyForecast}  
        />
      )}
    </div>
  );
}

export default App;
