import React,{useState} from "react";
import "./Weather";
export default function WeatherTemprature(props) {
   const [unit,setUnit]=useState("celsius")

   function fahreiheit(){
       return (props.celsius *9/5)+32;
   }
   function convertTofahreiheit(event){
       event.preventDefault();
       setUnit("fahreiheit")
   }
   function convertTocelsius (event){
    event.preventDefault();
    setUnit("celsius")
   }
  if (unit==="celsius"){
      return (
       <div className="WeatherTemperature">
         <span className="temperature">{Math.round(props.celsius)}</span>
         <span className="unit"> °C | <a href='/' onClick={convertTofahreiheit}>
          °F   </a> </span>
       </div>
     );
  }
  else {
    return (<div className="WeatherTemperature">
    <span className="temperature">{Math.round(fahreiheit())}</span>
    <span className="unit">°C |
     <a href='/' onClick={convertTocelsius}>
    °F</a>
    </span>
</div>
);
  }
}