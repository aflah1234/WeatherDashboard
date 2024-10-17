import React from 'react';
import '../style/WeatherCard.css'; 

const WeatherCard = ({ weatherData }) => {
    return (
        <div className="weather-card">
            <h2>{`${weatherData.name}, ${weatherData.sys.country}`}</h2>
            <p>Temperature: <span>{weatherData.main.temp.toFixed(1)}</span> °C</p>
            <p>Weather: <span>{weatherData.weather[0].description}</span></p>
            <p>Humidity: <span>{weatherData.main.humidity}</span>%</p>
            <p>Wind Speed: <span>{weatherData.wind.speed}</span> m/s</p>
        </div>
    );
};

export default WeatherCard;
