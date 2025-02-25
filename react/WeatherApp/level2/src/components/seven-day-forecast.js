import CardLayout from "./ui/card-layout";
import moment from "moment";
import { weatherCodesMapping } from "./util";

const DayForecast = ({dayData,day,lastDay}) => {
    return(
        <div className={`flex items-center single-day justify-between ${lastDay ? "border-0" : ""}`}>
            <p style={{width:'27%'}}>{moment(day).format("dddd")}</p>
            <img src={ weatherCodesMapping[dayData.weatherCode].img} width={48} height={48}/>
            <div style={{width:'62%' ,marginLeft : "12px"}} className="flex items-center justify-between">
                <p className="capitalize">{dayData.weatherCondition}</p>
                <p>{Math.floor(dayData.temperature2mMin)}-{Math.floor(dayData.temperature2mMax)}°C</p>
            </div>
        </div>
    )
}

const SevenDayForeCast = ({dailyForecast}) => {
    return(
        <CardLayout className = "seven-day-forecast-card-layout">
            <p className="label-18">7 DAY FORECAST</p>
            {Object.keys(dailyForecast)?.length > 0 && Object.keys(dailyForecast).map((day, dayInd)=>{
                return(
                    <DayForecast dayData={dailyForecast[day]} day={day} key={day} lastDay = {dayInd === 6 ? true :false}/>
                )
            })}
        </CardLayout>
    )
}

export default SevenDayForeCast;