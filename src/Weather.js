import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import LocalTime from "./LocalTime";
export default function Weather(props){
  
    const [weatherTemp,setWeatherTemp]   = useState({ready:false})
    function handleResponse(response){

        console.log(response.data)
        setWeatherTemp({
            ready:true,
            temp:response.data.main.temp,
            wind:response.data.main.speed,
            description:response.data.weather[0].description,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt *1000),
            cityname:response.data.name,
        });
       
    }
    if (weatherTemp.ready){


    return(
    <div className="Weather">
        Amazing Weather search Engine
        <form>
           <div className="row">
               <div className="col-9">
                   <input type="search"
                   placeholder="Enter a City..."
                   className="form-control"
                   autoFocus="on"/>
               </div>
               <div className="col-3">
                   <input type="submit" value="search" className="btn btn-primary w-100"/>
               </div>
           </div>
        </form>
 <h1>
     {weatherTemp.cityname}
 </h1>
        <ul>
            <li>
                Local time:<LocalTime date= {weatherTemp.date}/>
            </li>
            <br/>
            <li className="text-capitalize">
               {weatherTemp.description}
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="http://openweathermap.org/img/wn/" alt="MostlyClouldy" className="float-left"/> 
                  <div className="float-left">
                    <span className="temprature">{Math.round(weatherTemp.temp)}</span>  
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
                       humidity:{weatherTemp.humidity} %
                    </li>
                    <li>
                        wind:{weatherTemp.wind} km/h
                    </li>
                </ul>
            </div>
        </div>
        
    
    </div>
    )
} else{
    
    const apikey="3974d69436c99c72f5f2388d04551db4";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return "loading..."
}
}