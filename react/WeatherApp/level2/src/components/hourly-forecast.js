import { useState } from "react";
import HourComp from "./hour-comp";
import CardLayout from "./ui/card-layout";
import LeftNav from "../assets/images/left-nav.svg";
import LeftNavGray from "../assets/images/left-nav-gray.svg";
import RightNav from "../assets/images/right-nav.svg";
import RightNavGray from "../assets/images/right-nav-gray.svg";

const HourlyForecast = ({hourlyData}) => {
  const [disableLeftNavigation, setDisableLeftNavigation] = useState(true);
  const [disableRightNavigation, setDisableRightNavigation] = useState(false);

  const scrollRight = () => {
    if(disableRightNavigation){
        return;
    }
    const scrollVariable = document.querySelector(
      ".hourly-forecast-card-layout"
    );
    setDisableLeftNavigation(false);
    scrollVariable.scrollLeft += 720;
    if (
      scrollVariable.scrollLeft >=
      scrollVariable.scrollWidth - scrollVariable.clientWidth
    ) {
      setDisableRightNavigation(true);
    }
  };

  const scrollLeft = () => {
    if(disableLeftNavigation){
        return;
    }
    const scrollVariable = document.querySelector(
      ".hourly-forecast-card-layout"
    );
    setDisableRightNavigation(false);
    scrollVariable.scrollLeft -= 720;
    if (scrollVariable.scrollLeft === 0) {
      setDisableLeftNavigation(true);
    }
  };

  document.querySelector(".hourly-forecast-card-layout")?.addEventListener('scroll',()=>{
    const scrollVariable = document.querySelector(
        ".hourly-forecast-card-layout"
      );
      if(scrollVariable.scrollLeft === 0){
        setDisableLeftNavigation(true)
      }else{
        setDisableLeftNavigation(false);
      }

      if (
        scrollVariable.scrollLeft >=
        scrollVariable.scrollWidth - scrollVariable.clientWidth
      ) {
        setDisableRightNavigation(true);
      }else{
        setDisableRightNavigation(false);
      }
  })

  return (
    <div className="hourly-forecast-container">
      <div className="hourly-title-container">
        <p className="forecast-title">Hourly Weather</p>
        <div className="hourly-navigation-arrow">
          <img
            src={disableLeftNavigation ? LeftNavGray : LeftNav}
            onClick={scrollLeft}
            id="right-nav-btn"
          />
          <img
            src={disableRightNavigation ? RightNavGray : RightNav}
            onClick={scrollRight}
            id="right-nav-btn"
          />
        </div>
      </div>
      <CardLayout className="p-0 hourly-forecast-card-layout">
        <div className="hourly-card-main-div">
          {
            hourlyData?.length > 0 && hourlyData.map((elem, elemIndex)=>{
              return(
                <HourComp key={elemIndex} currentTime={elem.isClosestTime} data={elem}/>
              )
            }) 
          }
        </div>
      </CardLayout>
    </div>
  );
};

export default HourlyForecast;
