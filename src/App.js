import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeatherByCity } from './services/weatherService';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [city, setCity] = useState('Toronto');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    try {
      const data = await getWeatherByCity(cityName);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
      <div className="App">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
  );
}

export default App;
