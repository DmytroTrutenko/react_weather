import React from "react";
import Contacts from "./Contacts";

const Weather = ({temp, city, country, pressure, sunset, sunrise, feels_like, humidity, error}) => (
    <div className="infoWeath">
        {
            city && <div>
                <p>Location : <span>{city}, {country}</span></p>
                <p>Temperature : <span>{temp}°</span></p>
                <p>Feels Like : <span>{feels_like}°</span></p>
                <p>Humidity: <span>{humidity}%</span></p>
                <p>Pressure :<span> {pressure} mmHg</span></p>
                <p>Sunrise :<span> {sunrise}</span></p>
                <p>Sunset : <span>{sunset}</span></p>
            </div>
        }
        {error && <p className="error">Введите название города!!</p>}
        <Contacts/>
    </div>
);


export default Weather;