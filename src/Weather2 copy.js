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
import arrow from "./assets/arrow-return-right.svg"
import moisture from "./assets/moisture.svg";
import pressure from "./assets/chevron-bar-contract.svg";
import visibility from "./assets/eye.svg";
import graphUp from "./assets/graph-up.svg";
import graphDown from "./assets/graph-down.svg";
import lon from "./assets/lon.svg";
import lat from "./assets/lat.svg";
import add from "./assets/plus-circle.svg";
import loc from "./assets/geo-alt.svg";

class Weather2 extends React.Component {
  state = {
    initialCity: "",
    searchCity: "lodz",
    cityName: "",
    country: "",
    sunrise: "",
    sunset: "",
    visibile: "",
    lati: "",
    longi: "",
    dt: "",
    feelsLike: "",
    humidity: "",
    pressureS: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    weatherDescription: "",
    weatherIcon: "",
    wind: "",

    placeholder: "Which city you looking for ?",
    // API limitations only allowed me to make new key=value for each day. Then render items thru WeekDaysNames
    // [0]
    nextTemp: "",
    nextDayTemp: "",
    nextNightTemp: "",
    nextHumidity: "",
    nextIcon: "",
    // [1]
    nextTemp1: "",
    nextDayTemp1: "",
    nextNightTemp1: "",
    nextHumidity1: "",
    nextIcon1: "",
    // [2]
    nextTemp2: "",
    nextDayTemp2: "",
    nextNightTemp2: "",
    nextHumidity2: "",
    nextIcon2: "",
    // [3]
    nextTemp3: "",
    nextDayTemp3: "",
    nextNightTemp3: "",
    nextHumidity3: "",
    nextIcon3: "",
    // [4]
    nextTemp4: "",
    nextDayTemp4: "",
    nextNightTemp4: "",
    nextHumidity4: "",
    nextIcon4: "",
    // [5]
    nextTemp5: "",
    nextDayTemp5: "",
    nextNightTemp5: "",
    nextHumidity5: "",
    nextIcon5: "",
    // [6]
    nextTemp6: "",
    nextDayTemp6: "",
    nextNightTemp6: "",
    nextHumidity6: "",
    nextIcon6: "",
    // [7]
    nextTemp7: "",
    nextDayTemp7: "",
    nextNightTemp7: "",
    nextHumidity7: "",
    nextIcon7: "",
   

  }
  
  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&lang=en&units=metric&appid=9f2cfde814fdf260de080e5cebd5fe76`)
  .then(response => response.json())
  .then(data => this.setState({
    cityName: data.name,
    country: data.sys.country,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    visibile: data.visibility,
    lati: data.coord.lat,
    longi: data.coord.lon,
    dt: data.dt,
    feelsLike: data.main.feels_like.toFixed(0),
    humidity: data.main.humidity,
    pressureS: data.main.pressure,
    temp: data.main.temp.toFixed(0),
    temp_max: data.main.temp_max.toFixed(0),
    temp_min: data.main.temp_min.toFixed(0),
    weatherDescription: data.weather[0].description,
    weatherIcon: data.weather[0].icon,
    windy: data.wind.speed

    
  }))
  setTimeout(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lati}&lon=${this.state.longi}&exclude=hourly&units=metric&appid=493436ba75c03f213671d765e59f1d81`)
  .then(response => response.json())
  .then(data => this.setState({
    nextTemp: data.daily[0].temp.day.toFixed(0),
    nextHumidity: data.daily[0].humidity,
    nextDayTemp: data.daily[0].temp.day.toFixed(0),
    nextNightTemp: data.daily[0].temp.night.toFixed(0),
    nextIcon: data.daily[0].weather[0].icon,
    nextTemp1: data.daily[1].temp.day.toFixed(0),
    nextHumidity1: data.daily[1].humidity,
    nextDayTemp1: data.daily[1].temp.day.toFixed(0),
    nextNightTemp1: data.daily[1].temp.night.toFixed(0),
    nextIcon1: data.daily[1].weather[0].icon,
    nextTemp2: data.daily[2].temp.day.toFixed(0),
    nextHumidity2: data.daily[2].humidity,
    nextDayTemp2: data.daily[2].temp.day.toFixed(0),
    nextNightTemp2: data.daily[2].temp.night.toFixed(0),
    nextIcon2: data.daily[2].weather[0].icon,
    nextTemp3: data.daily[3].temp.day.toFixed(0),
    nextHumidity3: data.daily[3].humidity,
    nextDayTemp3: data.daily[3].temp.day.toFixed(0),
    nextNightTemp3: data.daily[3].temp.night.toFixed(0),
    nextIcon3: data.daily[3].weather[0].icon,
    nextTemp4: data.daily[4].temp.day.toFixed(0),
    nextHumidity4: data.daily[4].humidity,
    nextDayTemp4: data.daily[4].temp.day.toFixed(0),
    nextNightTemp4: data.daily[4].temp.night.toFixed(0),
    nextIcon4: data.daily[4].weather[0].icon,
    nextTemp5: data.daily[5].temp.day.toFixed(0),
    nextHumidity5: data.daily[5].humidity,
    nextDayTemp5: data.daily[5].temp.day.toFixed(0),
    nextNightTemp5: data.daily[5].temp.night.toFixed(0),
    nextIcon5: data.daily[5].weather[0].icon,
    nextTemp6: data.daily[6].temp.day.toFixed(0),
    nextHumidity6: data.daily[6].humidity,
    nextDayTemp6: data.daily[6].temp.day.toFixed(0),
    nextNightTemp6: data.daily[6].temp.night.toFixed(0),
    nextIcon6: data.daily[6].weather[0].icon,
    nextTemp7: data.daily[7].temp.day.toFixed(0),
    nextHumidity7: data.daily[7].humidity,
    nextDayTemp7: data.daily[7].temp.day.toFixed(0),
    nextNightTemp7: data.daily[7].temp.night.toFixed(0),
    nextIcon7: data.daily[7].weather[0].icon,
   
  }));
  // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lati}&lon=${this.state.longi}&exclude=hourly&units=metric&appid=493436ba75c03f213671d765e59f1d81`)
  // .then(response => response.json())
  // .then(data => console.log(data))
  // console.log(`lati ${this.state.lati} / longi ${this.state.longi}`)
  }, 1000);
  
 }

  GetWeather = ()  => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity}&lang=en&units=metric&appid=9f2cfde814fdf260de080e5cebd5fe76`)
  .then(response => response.json())
  .then(data => this.setState({
    cityName: data.name,
    country: data.sys.country,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    visibile: data.visibility,
    lati: data.coord.lat,
    longi: data.coord.lon,
    dt: data.dt,
    feelsLike: data.main.feels_like.toFixed(0),
    humidity: data.main.humidity,
    pressureS: data.main.pressure,
    temp: data.main.temp.toFixed(0),
    temp_max: data.main.temp_max.toFixed(0),
    temp_min: data.main.temp_min.toFixed(0),
    weatherDescription: data.weather[0].description,
    weatherIcon: data.weather[0].icon,
    windy: data.wind.speed,
    searchCity: this.state.initialCity

    
  }))
  setTimeout(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lati}&lon=${this.state.longi}&exclude=hourly&units=metric&appid=493436ba75c03f213671d765e59f1d81`)
  .then(response => response.json())
  .then(data => this.setState({
    nextTemp: data.daily[0].temp.day.toFixed(0),
    nextHumidity: data.daily[0].humidity,
    nextDayTemp: data.daily[0].temp.day.toFixed(0),
    nextNightTemp: data.daily[0].temp.night.toFixed(0),
    nextIcon: data.daily[0].weather[0].icon,
    nextTemp1: data.daily[1].temp.day.toFixed(0),
    nextHumidity1: data.daily[1].humidity,
    nextDayTemp1: data.daily[1].temp.day.toFixed(0),
    nextNightTemp1: data.daily[1].temp.night.toFixed(0),
    nextIcon1: data.daily[1].weather[0].icon,
    nextTemp2: data.daily[2].temp.day.toFixed(0),
    nextHumidity2: data.daily[2].humidity,
    nextDayTemp2: data.daily[2].temp.day.toFixed(0),
    nextNightTemp2: data.daily[2].temp.night.toFixed(0),
    nextIcon2: data.daily[2].weather[0].icon,
    nextTemp3: data.daily[3].temp.day.toFixed(0),
    nextHumidity3: data.daily[3].humidity,
    nextDayTemp3: data.daily[3].temp.day.toFixed(0),
    nextNightTemp3: data.daily[3].temp.night.toFixed(0),
    nextIcon3: data.daily[3].weather[0].icon,
    nextTemp4: data.daily[4].temp.day.toFixed(0),
    nextHumidity4: data.daily[4].humidity,
    nextDayTemp4: data.daily[4].temp.day.toFixed(0),
    nextNightTemp4: data.daily[4].temp.night.toFixed(0),
    nextIcon4: data.daily[4].weather[0].icon,
    nextTemp5: data.daily[5].temp.day.toFixed(0),
    nextHumidity5: data.daily[5].humidity,
    nextDayTemp5: data.daily[5].temp.day.toFixed(0),
    nextNightTemp5: data.daily[5].temp.night.toFixed(0),
    nextIcon5: data.daily[5].weather[0].icon,
    nextTemp6: data.daily[6].temp.day.toFixed(0),
    nextHumidity6: data.daily[6].humidity,
    nextDayTemp6: data.daily[6].temp.day.toFixed(0),
    nextNightTemp6: data.daily[6].temp.night.toFixed(0),
    nextIcon6: data.daily[6].weather[0].icon,
    nextTemp7: data.daily[7].temp.day.toFixed(0),
    nextHumidity7: data.daily[7].humidity,
    nextDayTemp7: data.daily[7].temp.day.toFixed(0),
    nextNightTemp7: data.daily[7].temp.night.toFixed(0),
    nextIcon7: data.daily[7].weather[0].icon,
    
  }));
  console.log("/////////LOG/////////")
  console.log(`lati ${this.state.lati} / longi ${this.state.longi}`)
  console.log(`humidity ${this.state.nextHumidity}`)
  }, 1000);
 
}


 


  render() {
    const WeekDaysNames = [
      {
        temp: this.state.nextTemp,
        dayTemp: this.state.nextDayTemp,
        nightTemp: this.state.nextNightTemp,
        humidity: this.state.nextHumidity,
        icon: this.state.nextIcon,
      },
      {
        temp: this.state.nextTemp2,
        dayTemp: this.state.nextDayTemp2,
        nightTemp: this.state.nextNightTemp2,
        humidity: this.state.nextHumidity2,
        icon: this.state.nextIcon2,
      },
      {
        temp: this.state.nextTemp3,
        dayTemp: this.state.nextDayTemp3,
        nightTemp: this.state.nextNightTemp3,
        humidity: this.state.nextHumidity3,
        icon: this.state.nextIcon3,
      },
      {
        temp: this.state.nextTemp4,
        dayTemp: this.state.nextDayTemp4,
        nightTemp: this.state.nextNightTemp4,
        humidity: this.state.nextHumidity4,
        icon: this.state.nextIcon4,
      },
      {
        temp: this.state.nextTemp5,
        dayTemp: this.state.nextDayTemp5,
        nightTemp: this.state.nextNightTemp5,
        humidity: this.state.nextHumidity5,
        icon: this.state.nextIcon5,
      },
      {
        temp: this.state.nextTemp6,
        dayTemp: this.state.nextDayTemp6,
        nightTemp: this.state.nextNightTemp6,
        humidity: this.state.nextHumidity6,
        icon: this.state.nextIcon6,
      },
      {
        temp: this.state.nextTemp7,
        dayTemp: this.state.nextDayTemp7,
        nightTemp: this.state.nextNightTemp7,
        humidity: this.state.nextHumidity7,
        icon: this.state.nextIcon7,
      },
      {
        temp: this.state.nextTemp8,
        dayTemp: this.state.nextDayTemp8,
        nightTemp: this.state.nextNightTemp8,
        humidity: this.state.nextHumidity8,
        icon: this.state.nextIcon8,
      }
    ]
    let newSunrise = this.state.sunrise
    let newSunset = this.state.sunset
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var sunriseDate = new Date(newSunrise * 1000);
    var sunsetDate = new Date(newSunset * 1000);
    // Hours part from the timestamp
    var hours = sunriseDate.getHours();
    var hoursS = sunsetDate.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + sunriseDate.getMinutes();
    var minutesS = "0" + sunsetDate.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + sunriseDate.getSeconds();
    var secondsS = "0" + sunsetDate.getSeconds();
    
    // Will display time in 10:30:23 format
    var sunriseTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var sunsetTime = hoursS + ':' + minutesS.substr(-2) + ':' + secondsS.substr(-2);
    

    const Search = (e) => {
      this.setState({
        initialCity: e.target.value
      })
    }
  const UpdateSearch = () => {
      this.setState({
        searchCity: this.state.initialCity
      })
      
    }
    
    console.log(`searchiCity -  ${this.state.searchCity}, initial city  - ${this.state.initialCity}`)
    const {searchCity, initialCity, cityName, country, sunrise, sunset, visibile, lati, longi, dt, feelsLike, humidity, pressureS, temp, temp_max, temp_min, weatherDescription, weatherIcon, windy, placeholder} = this.state
    return  <div>
    <Header />
    <div className="search-grid">
      <input type="text" placeholder={this.state.placeholder} onClick={() => this.setState({placeholder: ""})} onMouseLeave={() => this.setState({placeholder: "🌍 Search cities "})} onChange={Search}/>
      <button onClick={this.GetWeather}>
        <img src={search} alt="" />
      </button>
    </div>
    <div className="main-weather">
      <div>
        <h1 className="temperature">
          {temp}<span>°</span>
        </h1>
      </div>
      <div className="temperature-details">
        <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="sky" />
      </div>
    </div>
    <div className="weather-description">
      <p>{weatherDescription}</p>
    </div>
    <div className="current-location">
      <h1>
        {cityName},<span> {country}</span>
      </h1>
    </div>
    <div className="weather-sunrise">
      <img src={sun} alt="" />
      <p>sunrise {sunriseTime}</p>
      <img src={moon} alt="" />
      <p>sunset {sunsetTime}</p>
    </div>
    <div className="weather-details">
      <div className="weather-details-left">
        <h3><img src={arrow} alt="" /> Today</h3>
        <ul>
          <li>
            <img src={thermo} alt="" /> feels like {feelsLike} ° C
          </li>
          <li>
            <img src={graphDown} alt="" /> min. temp {temp_min} ° C
          </li>
          <li>
            <img src={graphUp} alt="" /> max. temp {temp_max} ° C
          </li>
          <li>
            <img src={moisture} alt="" /> humidity {humidity} %
          </li>
          <li>
            <img src={wind} alt="" /> wind {windy} m/s
          </li>
          <li>
            <img src={pressure} alt="" /> pressure {pressureS} hPa
          </li>
          <li>
            <img src={visibility} alt="" /> visibility {visibile} m
          </li>
        </ul>
      </div>
      <div className="weather-details-center"></div>
      <div className="weather-details-right">
        <h3><img src={arrow} alt="" /> Location</h3>
        <ul>
          <li>
            <img src={lon} alt="" /> longitude {longi}
          </li>
          <li>
            <img src={lat} alt="" /> latitude {lati}
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
    <div className="daily-forecast-title"><h3><img src={arrow} alt="" /> Daily forecast for next 6 days</h3></div>
    <div className="forecast">
      <div className="day">
        <p>Mon</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.nextIcon}@2x.png`} alt="" />
        <h2>{this.state.nextTemp}°</h2>
        <div className="day-details">
          <img src={sun} alt="" />
          <p className="day-info">{this.state.nextDayTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moon} alt="" />
          <p className="day-info">{this.state.nextNightTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moisture} alt="" />
          <p className="day-info">{this.state.nextHumidity}%</p>
        </div>
      </div>
      <div className="day">
        <p>Mon</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.nextIcon}@2x.png`} alt="" />
        <h2>{this.state.nextTemp}°</h2>
        <div className="day-details">
          <img src={sun} alt="" />
          <p className="day-info">{this.state.nextDayTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moon} alt="" />
          <p className="day-info">{this.state.nextNightTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moisture} alt="" />
          <p className="day-info">{this.state.nextHumidity}%</p>
        </div>
      </div>
      <div className="day">
        <p>Mon</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.nextIcon}@2x.png`} alt="" />
        <h2>{this.state.nextTemp}°</h2>
        <div className="day-details">
          <img src={sun} alt="" />
          <p className="day-info">{this.state.nextDayTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moon} alt="" />
          <p className="day-info">{this.state.nextNightTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moisture} alt="" />
          <p className="day-info">{this.state.nextHumidity}%</p>
        </div>
      </div>
      <div className="day">
        <p>Mon</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.nextIcon}@2x.png`} alt="" />
        <h2>{this.state.nextTemp}°</h2>
        <div className="day-details">
          <img src={sun} alt="" />
          <p className="day-info">{this.state.nextDayTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moon} alt="" />
          <p className="day-info">{this.state.nextNightTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moisture} alt="" />
          <p className="day-info">{this.state.nextHumidity}%</p>
        </div>
      </div>
      <div className="day">
        <p>Mon</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.nextIcon}@2x.png`} alt="" />
        <h2>{this.state.nextTemp}°</h2>
        <div className="day-details">
          <img src={sun} alt="" />
          <p className="day-info">{this.state.nextDayTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moon} alt="" />
          <p className="day-info">{this.state.nextNightTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moisture} alt="" />
          <p className="day-info">{this.state.nextHumidity}%</p>
        </div>
      </div>
      <div className="day">
        <p>Mon</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.nextIcon}@2x.png`} alt="" />
        <h2>{this.state.nextTemp}°</h2>
        <div className="day-details">
          <img src={sun} alt="" />
          <p className="day-info">{this.state.nextDayTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moon} alt="" />
          <p className="day-info">{this.state.nextNightTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moisture} alt="" />
          <p className="day-info">{this.state.nextHumidity}%</p>
        </div>
      </div>
      <div className="day">
        <p>Mon</p>
        <img src={`http://openweathermap.org/img/wn/${this.state.nextIcon}@2x.png`} alt="" />
        <h2>{this.state.nextTemp}°</h2>
        <div className="day-details">
          <img src={sun} alt="" />
          <p className="day-info">{this.state.nextDayTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moon} alt="" />
          <p className="day-info">{this.state.nextNightTemp}°</p>
        </div>
        <div className="day-details">
          <img src={moisture} alt="" />
          <p className="day-info">{this.state.nextHumidity}%</p>
        </div>
      </div>
      
    </div>
    <footer>
      <img src={add} alt="" />
      <p>
        Add <span>{cityName},  {country}</span> to favourite list
      </p>
      <select>
        <option>Washington</option>
        <option>Albuquerque</option>
      </select>
    </footer>
  </div>
  }
}
export default Weather2;