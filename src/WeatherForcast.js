import React, { useState,useEffect } from "react";
import WeatherForcastDaily from "./WeatherForcastDaily";
import axios from "axios"; 
export default function WeatherForcast(props) {
    let [loaded,setloaded]=useState(false);
    let [forcast,setForcast]=useState(null);
    useEffect(()=>{
        setloaded(false)
    },[props.coordinate]);

function HandleResponse(response){
    setForcast(response.data.daily);
    setloaded(true);
}


if (loaded){
    return(
    <div className="WeatherForcast">
        <div className="row">
            {forcast.map(function(forcastdaily , index){
               if (index <5) {
                  return(
                       <div className="col" key={index}>
                       <WeatherForcastDaily data={forcastdaily}/>
                     </div>
                        );
                            }
                                                        })}
        </div>
    </div>
    );
    }
      else{
         let apikey= "0a21b9db3a477c74dde2ad7d123f8f5e";
         let latitude= props.coordinate.lat;
         let longitude= props.coordinate.lon;
         let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
         axios.get(apiUrl).then(HandleResponse);
         return null;
    }
}
