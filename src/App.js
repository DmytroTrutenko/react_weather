import React from 'react';
import './App.css';
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Axios from "axios";
import Contacts from "./components/Contacts";

const API_KEY = '333bc1acb6d85651ff5c3ed5b4ae087e';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunset: undefined,
        sunrise: undefined,
        pressure: undefined,
        feels_like: undefined,
        humidity: undefined,
        error: false
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value; //берем из формы введенный город

        if (city) {
            const api_url = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = api_url.data;
            console.log(data);

            let date = new Date(data.sys.sunset * 1000);
            let hours = date.getHours(); // Minutes part from the timestamp
            let minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
            let sunset_date = hours + ':' + minutes.substr(-2);

            let date2 = new Date(data.sys.sunrise * 1000);
            let hours2 = date2.getHours(); // Minutes part from the timestamp
            let minutes2 = "0" + date2.getMinutes(); // Seconds part from the timestamp
            let sunrise_date = hours2 + ':' + minutes2.substr(-2);


            let pressure = data.main.pressure;
            let pressureInMmHg = Math.floor(pressure * 0.75006);

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: pressureInMmHg,
                sunset: sunset_date,
                sunrise: sunrise_date,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                error: false
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunset: undefined,
                sunrise: undefined,
                pressure: undefined,
                feels_like: undefined,
                humidity: undefined,
                error: true
            })
        }
    };

    render() {
        return (
            <section className="main">
                <div className="content">
                    <div className="info">
                        <Info/>
                    </div>
                    <div className="form">
                        <Form getWeather={this.getWeather}/>
                        <Weather temp={this.state.temp}
                                 city={this.state.city}
                                 country={this.state.country}
                                 pressure={this.state.pressure}
                                 sunset={this.state.sunset}
                                 sunrise={this.state.sunrise}
                                 feels_like={this.state.feels_like}
                                 humidity={this.state.humidity}
                                 error={this.state.error}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default App;
