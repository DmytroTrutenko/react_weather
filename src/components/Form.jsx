import React from "react"

const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <p className="title">Weather forecast for</p>
        <input type="text" name="city" placeholder="Enter a city"/>
        <button className="btn">Get the weather</button>
    </form>
);


export default Form