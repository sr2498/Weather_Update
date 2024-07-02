import { useEffect, useRef, useState } from "react";
import React from "react";
import "./Temp.css";
import search_icon from "../assets/search-icon.png";
import sunny_icon from "../assets/sunny.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import cloud_icon from "../assets/cloud.png";
// import partly_cloud_icon from "../assets/partly_cloudy_day.png";
import rain_icon from "../assets/rain.png";
import night_icon from "../assets/bedtime.png";
// import thunderstorm_icon from "../assets/thunderstorm.png";

const Temp = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": sunny_icon,
    "01n": night_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": wind_icon,
    "04n": wind_icon,
    "09d": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=83087c670d3758775f8c5365949f256e`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || sunny_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data", error);
    }
  };

  useEffect(() => {
    search("Orlando");
  }, []);

  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search..." />
          <img
            src={search_icon}
            alt="Search"
            onClick={() => search(inputRef.current.value)}
          />
        </div>
        {weatherData ? (
          <>
            <img
              src={weatherData.icon}
              alt="Weather Icon"
              className="weather-icon"
            />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="column">
                <img src={humidity_icon} alt="Humidity Icon" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="column">
                <img src={wind_icon} alt="Wind Icon" />
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Temp;
