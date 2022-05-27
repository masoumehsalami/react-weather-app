
import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForcastDaily(props){
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
      } 

 return(
    <div>
    <div className="WeatherForcast-day">{day()}</div>
    <WeatherIcon code={props.data.weather[0].icon} size={36}/>
    <div className="WeatherForcast-temp">
     <span className="weatherTem-max">
       {Math.round(props.data.temp.min)}°
     </span>
     <span className="weatherTem-min">
       {Math.round(props.data.temp.max)}°
     </span>
    </div>
   </div>
 );
}