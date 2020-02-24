import React from "react";

class Weather extends React.Component {

    render() {
        const {temp, city, country, pressure, sunset} = this.props;
        return (
            <div>
                {city &&
                <div>
                    <p>Местоположение : {city}, {country}</p>
                    <p>Температура : {temp}°</p>
                    <p>Давление : {pressure}</p>
                    <p>Заход солнца : {sunset}</p>
                </div>
                }
            </div>
        )
    }
}

export default Weather;