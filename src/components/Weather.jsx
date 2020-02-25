import React from "react";
import location_img from '../assets/location.png'
import feels_guy_img from '../assets/feels-guy.png'
import pressure_img from '../assets/pressure.png'
import sunrise_img from '../assets/sunrise.png'
import sunset_img from '../assets/sunset.png'
import temperature_img from '../assets/temperature.png'
import water_img from '../assets/water.png'

const Weather = ({temp, city, country, pressure, sunset, sunrise, feels_like, humidity, error}) => (
    <div className="infoWeath">
        {
            city && <div>
                <p><img src={location_img} alt={'img'}/>Location : <span>{city}, {country}</span></p>
                <p><img src={temperature_img} alt={'img'}/>Temperature : <span>{temp}°</span></p>
                <p><img src={feels_guy_img} alt={'img'}/>Feels Like : <span>{feels_like}°</span></p>
                <p><img src={water_img} alt={'img'}/>Humidity: <span>{humidity}%</span></p>
                <p><img src={pressure_img} alt={'img'}/>Pressure :<span> {pressure} mmHg</span></p>
                <p><img src={sunrise_img} alt={'img'}/>Sunrise :<span> {sunrise}</span></p>
                <p><img src={sunset_img} alt={'img'}/>Sunset : <span>{sunset}</span></p>
            </div>
        }
        {error && <p className="error">Enter city name!!!</p>}
    </div>
);


export default Weather;