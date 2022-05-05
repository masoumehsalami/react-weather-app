import React from "react";
import "./Weather.css";

export default function Weather(){
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
        <ul>
            <li>
                Local time : Friday 20:08
            </li>
            <li>
                Weather IS like Raining
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="http://openweathermap.org/img/wn/" alt="MostlyClouldy" className="float-left"/> 
                  <div className="float-left">
                    <span className="temprature">6</span>  
                    <span className="unit"> °c</span>
                </div>
                </div>
            </div>
            <div  className="col-6">
                <ul>
                    <li>
                        precipitaion : 15%0
                    </li>
                    <li>
                        humidity : 75%0
                    </li>
                    <li>
                        wind : 13km/h
                    </li>
                </ul>

            </div>
        </div>
        
    
    </div>
    )
}