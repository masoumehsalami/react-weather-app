import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import CityWeatherInfo from "./CityWeatherInfo";
export default function Weather(props){
    const[city,setCity]=useState(props.defaultCity)  
    const [weatherTemp,setWeatherTemp]   = useState({ready:false})
    function handleResponse(response){
        console.log(response.data)
        setWeatherTemp({
            ready:true,
            temp:response.data.main.temp,
            wind:response.data.wind.speed,
            description:response.data.weather[0].description,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt *1000),
            icon:response.data.weather[0].icon,
            cityname:response.data.name,
        });  
    }
    function search(){
        const apikey="3974d69436c99c72f5f2388d04551db4";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    } 
    function handler(event){
       event.preventDefault();
       search(city);
    }
    function handlerCity(event){
        setCity(event.target.value)
    }
    if (weatherTemp.ready){
    return(
    <div className="Weather">
        Amazing Weather search Engine
        <form onSubmit={handler}>
           <div className="row">
               <div className="col-9">
                   <input type="search"
                   placeholder="Enter a City..."
                   className="form-control"
                   autoFocus="on"
                   onChange={handlerCity}/>
               </div>
               <div className="col-3">
                   <input type="submit" value="search" className="btn btn-primary w-100"/>
               </div>
           </div>
        </form>
        <CityWeatherInfo data={weatherTemp}/>    
     </div>
    );
} else{
    search();
    return "loading...";
}
 }