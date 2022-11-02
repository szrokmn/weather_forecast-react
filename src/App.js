import './App.css';
import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";
import axios from "axios";

function App() {

const [weather, setWeather] = useState();
const {latitude, longitude} = usePosition();

const getWeatherData = async(lat, lon) => {
  const key = process.env.REACT_APP_WEATHER_DATA;
  // console.log(key)
  try{
    const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
    console.log(data)
    setWeather(data)
  }
  catch{
    console.log();
    // alert("Veriler Çekilemedi..")
  }
}

useEffect(()=> {
  latitude && longitude && getWeatherData(latitude, longitude)
});

  return (
    <div className="App">
     <h2>Hava Durumu</h2>
     <h3>Enlem Koordinat:{latitude}</h3>
     <h3>Boylam Koordinat:{longitude}</h3>
     <h3>Koordinat Bölgesi:{weather.name}</h3>
     <h3>Hava Sıcaklığı:{Math.ceil(weather.main.temp-273.15)}</h3>
     <h3>Durumu:{weather.weather.map(data=> data.main)}</h3>
     <h3>Özelliği:{weather.weather.map(data=> data.description)}</h3>
    </div>
  );
}

export default App;
