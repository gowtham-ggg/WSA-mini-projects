import CardLayout from "./ui/card-layout";
import Location from "../assets/images/location.svg";
import Temperature from "../assets/images/temperature.svg";
import Eye from "../assets/images/eye.svg";
import ThermoMini from '../assets/images/temperature-mini.svg';
import Water from '../assets/images/water.svg';
import Windy from '../assets/images/windy.svg';
import DayForecastCard from "./day-forecast-card";
import moment from "moment";
import { weatherCodesMapping } from "./util";


const SearchResult = (props) => {
  // Props destructering
  const {currentWeatherData, dailyForecast, forecastLocation} = props;
  return (
    <div className="search-result-container-div">
      <p className="forecast-title text-capitalize">{currentWeatherData[0]?.values?.weatherCondition}</p>
      <CardLayout>
        <div className="flex items-center justify-between">
          <div style={{width : '30%'}}>
          <img src={weatherCodesMapping[currentWeatherData[0].values.weatherCode].img} width={48} height={48}/>
            <div className="flex items-center ">
              <img src={Location} />
              <p className="city-name">{forecastLocation?.label}</p>
            </div>
            <p className="text-blue" style={{paddingLeft:'30px'}}>Today {moment(currentWeatherData[0].date).format("MMM DD")}</p>
          </div>
          <div className="temp-container" style={{ width: "auto" }}>
            <img src={Temperature} className="thermometer-img"/>
            <div>
              <p style={{ fontSize: "144px" }}>{parseFloat(currentWeatherData[0].values?.temperature2m).toFixed(0)}</p>
              <p>{currentWeatherData[0]?.values?.weatherCondition}</p>
            </div>
            <p
              style={{
                fontSize: "24px",
                alignSelf: "start",
                paddingTop: "45px",
              }}
            >
              °C
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
                  <p className="weather-params-label">Visibility</p>
                </div>
                <p>{Math.floor(currentWeatherData[0].values?.visibility/1000)} km</p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={ThermoMini} />
                  <p className="weather-params-label">Feels like</p>
                </div>
                <p>{Math.floor(currentWeatherData[0].values?.apparentTemperature)} °C</p>
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
                <p>{currentWeatherData[0].values?.humidity} %</p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Windy} />
                  <p className="weather-params-label">Wind</p>
                </div>
                <p>{Math.floor(currentWeatherData[0]?.values?.windSpeed)} km/h</p>
              </div>
            </div>
          </div>
        </div>
      </CardLayout>
      <div className="flex justify-between daily-forecast-section" style={{marginTop:"24px", columnGap:'12px'}}>
        {
          Object.keys(dailyForecast)?.length > 0 && Object.keys(dailyForecast).map((day)=>{
            return(
              <DayForecastCard key={day} data={dailyForecast[day]} date={day}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default SearchResult;
