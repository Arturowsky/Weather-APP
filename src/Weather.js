import React, { useState, useEffect } from "react";

// STYLE
import "./sass/index.scss";
// COMPONENTS
import Header from "./components/Header";
// IMAGES
import search from "./assets/search.svg";
import sky from "./assets/sky-icon.png";
import small_img from "./assets/small_image.png";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import thermo from "./assets/thermometer-half.svg";
import wind from "./assets/arrow-up-right.svg";
import moisture from "./assets/moisture.svg";
import pressure from "./assets/chevron-bar-contract.svg";
import visibility from "./assets/eye.svg";
import graphUp from "./assets/graph-up.svg";
import graphDown from "./assets/graph-down.svg";
import lon from "./assets/lon.svg";
import lat from "./assets/lat.svg";
import add from "./assets/plus-circle.svg";
import loc from "./assets/geo-alt.svg";

const Weather = () => {
 
  const [searching, setSearching] = useState("Lodz");
  const [city, setCity] = useState([
  ])
 console.log(city)
  const Search = e => {
    setSearching(e.target.value)
  }
  useEffect(() => {})
  const SearchTown = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searching}&lang=en&units=metric&appid=493436ba75c03f213671d765e59f1d81`)
  .then(response => response.json())
  .then(data => setCity(...city,{name: data.name, country: data.sys.country, description: data.weather[0].description, temp: data.main.temp.toFixed(0), feelsLike: Math.ceil(data.main.feels_like), icon: data.weather[0].icon}
    ))

  }
  console.log(city)
  // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=51.75&lon=19.4667&exclude=hourly&units=metric&appid=493436ba75c03f213671d765e59f1d81')
  // .then(response => response.json())
  // .then(data => setTest(data.daily[4].weather[0].icon));
  // .then(data => console.log(data))
  return (
    <div>
      <Header />
      <div className="search-grid">
        <input type="text" placeholder="Which city you looking for ?"  onChange={Search}/>
        <button onClick={SearchTown}>
          <img src={search} alt="" />
        </button>
      </div>
      <div className="main-weather">
        <div>
          <h1 className="temperature">
            {[city.temp]}<span>°</span>
          </h1>
        </div>
        <div className="temperature-details">
          <img src={`http://openweathermap.org/img/wn/${[city.icon]}@2x.png`} alt="sky" />
        </div>
      </div>
      <div className="weather-description">
        <p>{[city.description]}</p>
      </div>
      <div className="current-location">
        <h1>
          {[city.name]}, <span>{[city.country]}</span>
        </h1>
      </div>
      <div className="weather-sunrise">
        <img src={sun} alt="" />
        <p>sunrise 4:01</p>
        <img src={moon} alt="" />
        <p>sunset 19:56</p>
      </div>
      <div className="weather-details">
        <div className="weather-details-left">
          <h3>Today</h3>
          <ul>
            <li>
              <img src={thermo} alt="" /> feels like {[city.feelsLike]} ° C
            </li>
            <li>
              <img src={graphDown} alt="" /> min.temp 22 ° C
            </li>
            <li>
              <img src={graphUp} alt="" /> max.temp 26 ° C
            </li>
            <li>
              <img src={moisture} alt="" /> humidity 32 %
            </li>
            <li>
              <img src={wind} alt="" /> wind 1.5 m/s
            </li>
            <li>
              <img src={pressure} alt="" /> pressure 1025 hPa
            </li>
            <li>
              <img src={visibility} alt="" /> visibility 12834 m
            </li>
          </ul>
        </div>
        <div className="weather-details-center"></div>
        <div className="weather-details-right">
          <h3>Location</h3>
          <ul>
            <li>
              <img src={lon} alt="" /> longitude - 122.54
            </li>
            <li>
              <img src={lat} alt="" /> latitude 45.24
            </li>
          </ul>
          <h3>Timezone</h3>
          <ul>
            <li>
              <img src={lon} alt="" /> longitude - 122.54
            </li>
            <li>
              <img src={lat} alt="" /> latitude 45.24
            </li>
          </ul>
        </div>
      </div>
      <div className="forecast">
        <div className="day">
          <p>Mon</p>
          <img src={small_img} alt="" />
          <h2>25°</h2>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info"> 32°</p>
          </div>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info">18°</p>
          </div>
          <div className="day-details">
            <img src={moisture} alt="" />
            <p className="day-info">32%</p>
          </div>
        </div>
        <div className="day">
          <p>Mon</p>
          <img src={small_img} alt="" />
          <h2>25°</h2>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info"> 18°</p>
          </div>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info">18°</p>
          </div>
          <div className="day-details">
            <img src={moisture} alt="" />
            <p className="day-info">32%</p>
          </div>
        </div>
        <div className="day">
          <p>Mon</p>
          <img src={small_img} alt="" />
          <h2>25°</h2>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info"> 18°</p>
          </div>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info">18°</p>
          </div>
          <div className="day-details">
            <img src={moisture} alt="" />
            <p className="day-info">32%</p>
          </div>
        </div>
        <div className="day">
          <p>Mon</p>
          <img src={small_img} alt="" />
          <h2>25°</h2>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info"> 18°</p>
          </div>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info">18°</p>
          </div>
          <div className="day-details">
            <img src={moisture} alt="" />
            <p className="day-info">32%</p>
          </div>
        </div>
        <div className="day">
          <p>Mon</p>
          <img src={small_img} alt="" />
          <h2>25°</h2>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info"> 18°</p>
          </div>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info">18°</p>
          </div>
          <div className="day-details">
            <img src={moisture} alt="" />
            <p className="day-info">32%</p>
          </div>
        </div>
        <div className="day">
          <p>Mon</p>
          <img src={small_img} alt="" />
          <h2>25°</h2>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info"> 18°</p>
          </div>
          <div className="day-details">
            <img src={sun} alt="" />
            <p className="day-info">18°</p>
          </div>
          <div className="day-details">
            <img src={moisture} alt="" />
            <p className="day-info">32%</p>
          </div>
        </div>
        
      </div>
      <footer>
        <img src={add} alt="" />
        <p>
          Add <span>{[city.name]}, {[city.country]}</span> to favourite list
        </p>
        <select>
          <option>Washington</option>
          <option>Albuquerque</option>
        </select>
      </footer>
    </div>
  );
};

export default Weather;
