import React from "react";

export default function localTime (props){
    console.log(props.date);
    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    let day =days[props.date.getDay()];
    let hours =props.date.getHours();
    if (hours<10){
         hours=`0${hours}`;
    }
    let minutes =props.date.getMinutes();
    if (minutes < 10){
        minutes =`0${minutes}`;
       }
    return <div>
         {day} {hours}:{minutes}
    </div>
    }