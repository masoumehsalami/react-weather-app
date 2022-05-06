import React from "react";
import LocalTime from "./LocalTime";

export default function CityWeatherInfo(props){
return(
  <div className="weatherInfo"> 
   <h1>
     {props.data.cityname}
   </h1>
    <ul>
    <li>
        Local time:<LocalTime date= {props.data.date}/>
    </li>
    <br/>
    <li className="text-capitalize">
       {props.data.description}
    </li>
    </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
         
            <img src={props.data.iconUrl} alt={props.data.description} className="float-left"/> 
              <div className="float-left">
                 <span className="temprature">{Math.round(props.data.temp)}</span>  
                <span className="unit">°c</span>
               </div>
            </div>
         </div>
        <div  className="col-6">
        <ul>
            <li>
                precipitaion : 15%0
            </li>
            <li>
               humidity:{props.data.humidity} %
            </li>
            <li>
                wind:{props.data.wind} km/h
            </li>
        </ul>
        </div>
     </div> 
    </div>);
}