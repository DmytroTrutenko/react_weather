import React from 'react';
import './App.css';
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Axios from "axios";

const API_KEY = '333bc1acb6d85651ff5c3ed5b4ae087e';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunset: undefined,
        pressure: undefined,
        error: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value; //берем из формы введенный город

        if (city) {
            const api_url = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = api_url.data;

            let date = new Date(data.sys.sunset*1000);
            let hours = date.getHours(); // Minutes part from the timestamp
            let minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
            let seconds = "0" + date.getSeconds();
            let sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            let pressure = data.main.pressure;
            let pressureInMmHg = Math.floor(pressure * 0.75006);

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: pressureInMmHg,
                sunset: sunset_date,
                error: ""
            });
        }
    };

    render() {
        return (
            <div>
                <Info/>
                <Form getWeather={this.getWeather}/>
                <Weather temp={this.state.temp}
                         city={this.state.city}
                         country={this.state.country}
                         pressure={this.state.pressure}
                         sunset={this.state.sunset}
                         error={this.state.error}/>
            </div>
        )
    }
}

export default App;
