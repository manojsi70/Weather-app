import React, { useState } from "react";
import "./weather.css";

function Weatherapp() {
   let [city, setCity] = useState("");
   let [wDetails, setWDetails] = useState();

   let getdata = (e) => {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
      )
         .then((responce) => responce.json())
         .then((finaldata) => {
            console.log(finaldata);
            
            if (finaldata.cod === "404") {
               setWDetails(undefined);
            } else {
               setWDetails(finaldata);
            }
         });

      e.preventDefault();

      setCity("");
   };

   return (
      <>
         <div className="main-container">
            <div className="weatherboxI">
               <h1>Weather App</h1>
               <p>Welcome to the Weather App</p>
               <p>
                  Please enter your city name to get the current weather
                  information.
               </p>
               <form onSubmit={getdata}>
                  <div className="btn-i">
                     <input
                        type="text"
                        placeholder="Enter city name"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                     />
                     <button onClick={getdata}>Get Weather</button>
                  </div>
               </form>
            </div>
            <div className="weatherInfo" id="weatherInfo1">
               {wDetails !== undefined ? (
                  <>
                     <h2>
                        City: {wDetails.name}{" "}
                        <span className="spani">{wDetails.sys.country}</span>
                     </h2>
                     <p>
                        Temperature:
                        <span> {wDetails.main.temp}</span> <sup>o</sup>C <br />
                        <span> Feels Like: {wDetails.main.feels_like}</span>
                        <sup>o</sup>C <br />
                        <span> Min-Temp: {wDetails.main.temp_min}</span>
                        <sup>o</sup>C
                     </p>
                     <p>Humidity: {wDetails.main.humidity}%</p>
                     <p>Description: {wDetails.weather[0].description}</p>
                     <p>Clouds: {wDetails.clouds.all}% 
                     <img src={`https://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`} alt="clouds" width={60} height={50} /></p>
                     <p>Wind Speed: {wDetails.wind.speed} km/h</p>
                     <div>
                        {/* <a href={`https://www.weather-forecast.com/locations/${wDetails.id}/forecasts/latest`}>Weather Forecast</a> */}
                     </div>
                  </>
               ) : (
                  "Enter Your City name"
               )}
            </div>
         </div>
      </>
   );
}

export default Weatherapp;
