import React from 'react'
import CardLayout from './UI/CardLayout'
import weatherIcon from "../assets/images/sun.svg"
const DayForecastCard = () => {
    const weatherData = {
        day : "Thursday",
        date : "Dec 12",
        weatherIcon : {weatherIcon},
        weatherCondtion : "clearSky",
        tempMini : 19,
        tempMax : 25
    }
  return (
   <CardLayout>
    <div className="day-forecast-container">
        <p className='label-18'>{weatherData.day}</p>
        <p className='text-blue'>{weatherData.date}</p>
        <img src={weatherIcon} alt="" />
        <p className='label-18'>{weatherData.weatherCondtion}</p>
        <p className='temp-range'>{weatherData.tempMini}&deg;C-{weatherData.tempMax}&deg;C</p>
    </div>
   </CardLayout>
  )
}

export default DayForecastCard
