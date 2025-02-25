import CardLayout from "./ui/card-layout";
import Location from "../assets/images/location.svg";
import Temperature from "../assets/images/temperature.svg";
import Eye from "../assets/images/eye.svg";
import ThermoMini from "../assets/images/temperature-mini.svg";
import Water from "../assets/images/water.svg";
import Windy from "../assets/images/windy.svg";
import HourlyForecast from "./hourly-forecast";
import UnitMetrixComp from "./unit-metrix-comp";
import SevenDayForeCast from "./seven-day-forecast";
import TempGraph from "./temp-graph";
import moment from "moment";
import { weatherCodesMapping } from "./util";

const SearchResult = (props) => {
  const {
    currentWeatherData,
    dailyForecast,
    forecastLocation,
    hourlyForecastData,
  } = props;
  return (
    <div className="search-result-container-div">
      <p className="forecast-title capitalize">
        {currentWeatherData[0]?.values?.weatherCondition}
      </p>
      <CardLayout>
        <div className="flex items-center">
          <div style={{ width: "33%" }}>
            <img
              src={weatherCodesMapping[currentWeatherData[0]?.values?.weatherCode].img}
              width={48}
              height={48}
            />
            <div className="flex items-center">
              <img src={Location} />
              <p className="city-name">{forecastLocation?.label}</p>
            </div>
            <p className="text-blue">
              Today {moment(currentWeatherData[0].date).format("MMM DD")}
            </p>
          </div>
          <div className="temp-container" style={{ width: "34%" }}>
            <img src={Temperature} className="thermometer-img" />
            <div>
              <p style={{ fontSize: "144px" }}>
                {parseFloat(
                  currentWeatherData[0].values?.temperature2m
                ).toFixed(0)}
              </p>
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
          <div style={{ maxWidth: "33%" }}>
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
                <p>
                  {Math.floor(currentWeatherData[0].values?.visibility / 1000)}{" "}
                  km
                </p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={ThermoMini} />
                  <p className="weather-params-label">Feels like</p>
                </div>
                <p>
                  {Math.floor(
                    currentWeatherData[0].values?.apparentTemperature
                  )}{" "}
                  °C
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
                <p>{currentWeatherData[0].values?.humidity} %</p>
              </div>
              <p>|</p>
              <div className="weather-info-subtile">
                <div className="flex">
                  <img src={Windy} />
                  <p className="weather-params-label">Wind</p>
                </div>
                <p>
                  {Math.floor(currentWeatherData[0]?.values?.windSpeed)} km/h
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardLayout>
      <div className="flex justify-between" style={{ marginTop: "24px" }}>
        <HourlyForecast hourlyData={hourlyForecastData} />
      </div>
      <div className="flex items-center" style={{ columnGap: "20px" }}>
        <div className="current-time-metrix">
          <CardLayout className="unit-metrix-card-layout">
            <div className="unit-metrix-container" style={{ marginTop: "0px" }}>
              <UnitMetrixComp
                label="Temperature"
                value={Math.floor(currentWeatherData[0]?.values?.temperature2m)}
                unit="°C"
              />
              <UnitMetrixComp
                label="Wind"
                value={Math.floor(currentWeatherData[0]?.values?.windSpeed)}
                unit="Km/h"
              />
            </div>
            <div className="unit-metrix-container">
              <UnitMetrixComp
                label="HUMIDITY"
                value={Math.floor(currentWeatherData[0]?.values?.humidity)}
                unit="%"
              />
              <UnitMetrixComp
                label="Visibility"
                value={currentWeatherData[0]?.values?.visibility / 1000}
                unit="km"
              />
            </div>
            <div className="unit-metrix-container">
              <UnitMetrixComp
                label="Feels Like"
                value={Math.floor(
                  currentWeatherData[0]?.values?.apparentTemperature
                )}
                unit="°C"
              />
              <UnitMetrixComp
                label="Chance Of Rain"
                value={currentWeatherData[0]?.values?.precipitationSum}
                unit="mm"
              />
            </div>
            <div className="unit-metrix-container">
              <UnitMetrixComp
                label="Pressure"
                value={Math.floor(
                  currentWeatherData[0]?.values?.surfacePressure
                )}
                unit="hpa"
              />
              <UnitMetrixComp
                label="Cloud Cover"
                value={currentWeatherData[0]?.values?.cloudCover}
                unit="%"
              />
            </div>
          </CardLayout>
        </div>
        <SevenDayForeCast dailyForecast={dailyForecast} />
      </div>
      <TempGraph hourlyData={hourlyForecastData} />
    </div>
  );
};

export default SearchResult;
