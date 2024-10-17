import React, { useState } from 'react';
import axios from 'axios';
import './style/App.css';  
import WeatherCard from './components/WeatherCard'; 
import weatherIcon from './assets/weather-icon.png.jpeg';

const apiKey = 'befd984de4d3c050671d4eb935e6c660';

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const getWeather = async () => {
        if (!city) {
            setError('Please enter a city name.');
            return;
        }
        setError('');
        setLoading(true);
        setWeatherData(null);

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            setWeatherData(response.data);
        } catch (error) {
            setError('City not found.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={darkMode ? 'App dark-mode' : 'App'}>
            <div className="container">
            <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
                <h1>Weather Dashboard</h1>
                <div className="toggle-container">
                    <label htmlFor="toggle">Dark Mode</label>
                    <input
                        type="checkbox"
                        id="toggle"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                    />
                    <button onClick={getWeather}>Get Weather</button>
                </div>
                {loading && <div className="loading">Loading...</div>}
                {error && <div className="error">{error}</div>}
                {weatherData && <WeatherCard weatherData={weatherData} />}
            </div>
        </div>
    );
}

export default App;
