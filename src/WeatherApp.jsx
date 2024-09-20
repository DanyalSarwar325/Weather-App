import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function App() {
    const [weather, setWeather] = useState({
        city: "Lahore",
        Temperature: null,
        Humidity: null,
        Temp_max: null,
        Temp_min: null,
        Feels_like: null,
    });

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiKey = "111cacdc6d89478c4a039941318f7db8"; // Replace with your actual API key
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=${apiKey}`);
            const data = await response.json();
            const weatherData = {
                city: data.name,
                Temperature: data.main.temp , // Kelvin
                Humidity: data.main.humidity,
                Temp_max: data.main.temp_max, // Kelvin
                Temp_min: data.main.temp_min, // Kelvin
                Feels_like: data.main.feels_like // Kelvin
            };
            setWeather(weatherData);
        };

        fetchWeatherData();
    }, []);

    const updateInfo = (result) => {
        setWeather(result);
    }

    return (
        <>
            <div className="heading">
                <h1>Weather App Using React Js</h1>
            </div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox Info={weather} />
        </>
    );
}
