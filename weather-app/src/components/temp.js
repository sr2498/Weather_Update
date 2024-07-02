import { useState } from "react";
import "./Temp.css";
import search_icon from "../assets/search-icon.png";
import sunny_icon from "../assets/sunny.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
// import cloud_icon from "../assets/cloud.png";
// import partly_cloud_icon from "../assets/partly_cloudy_day.png";
// import rain_icon from "../assets/rain.png";
// import night_icon from "../assets/bedtime.png";
// import thunderstorm_icon from "../assets/thunderstorm.png";

import React from "react";

const Temp = () => {
  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input type="search" placeholder="Search..." />
          <img src={search_icon} alt="" />
        </div>
        <img src={sunny_icon} alt="" className="weather-icon" />
        <p className="temperature">23&deg</p>
        <p className="location">Orlando</p>
        <div className="weather-data">
          <div className="column">
            <img src={humidity_icon} alt="" />
            <div>
              <p>82%</p>
              <span>Humidity</span>
            </div>
          </div>

          <div className="column">
            <img src={wind_icon} alt="" />
            <div>
              <p>8.4 Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Temp;
