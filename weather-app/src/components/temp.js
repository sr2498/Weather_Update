import React, { useEffect, useState } from "react";
import "./style.css";
import Weathercard from "./weathercard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("orlando");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url =
        "https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=83087c670d3758775f8c5365949f256e";

      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunrise } = data.sys;

      const myNewWeatherData = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunrise,
      };
      setTempInfo(myNewWeatherData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;
