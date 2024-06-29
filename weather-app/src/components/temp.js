import React from "react";
import "./style.css";

const Temp = () => {
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
          />

          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </div>

      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
      </article>
    </>
  );
};

export default Temp;
