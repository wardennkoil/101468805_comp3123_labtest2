import React from 'react';

function WeatherCard({ data }) {
    const {
        name,
        main: { temp, humidity },
        weather,
        wind: { speed },
    } = data;

    const weatherDescription = weather[0].description;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <img src={iconUrl} alt={weatherDescription} />
            <p>{weatherDescription}</p>
            <p>Temperature: {temp}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {speed} m/s</p>
        </div>
    );
}

export default WeatherCard;
