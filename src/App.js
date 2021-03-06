import React, { useState } from "react";

const api = {
  key: "44254310b8c4292da943cfb3d98ccb20",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(api.base+'weather?q='+query+'&APPID=44254310b8c4292da943cfb3d98ccb20')
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(weather);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "Decemeber"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return [day + " ", date + " ", month + " ", year]
  }

  return (
    <div className={(typeof weather.main != "undefined") 
    ? ((weather.weather[0].main === 'Rain') 
    ? 'app rain' : ((weather.weather[0].main === 'Snow') 
    ? 'app snow' : (weather.main.temp > 16 + 273) 
    ? 'app warm' : 'app')) : 'app'}>
      <main>
        <div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round((weather.main.temp - 273.15) *1.8) + 32 }°F
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}


export default App;
