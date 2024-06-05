import './App.css';
import {useState, useEffect} from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout'
// import './components/Home';
import Home from './components/Home';
import Weather from './components/Weather';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout />
  }
])

function App() {
  const weatherApiKey = 'dc607689992b371fbab3d718fb9f6e3b';
  const [userCity, setUserCity] = useState(null)
  const [currentTemp, setCurrentTemp] = useState(null) 
 
 

 useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position)
          const { latitude, longitude } = position.coords;
          // //Anchorage 61.2181, -149.9003
          // getWeatherData(61.2181, -149.9003)
          // // Death Valley 36.4614, -116.8656
          // getWeatherData(36.4614, -116.8656)
          // //browser
          getWeatherData(latitude, longitude)
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [])

  async function getWeatherData(lat, lon){
    console.log(lat)
    console.log(lon)
    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
    console.log('weatherAPIResponse', weatherAPIResponse)
    if(weatherAPIResponse.status != 200){
      alert('could not get weather data')
    }
    let jsonData = await weatherAPIResponse.json()
    console.log('jsonData', jsonData)
    setUserCity(jsonData.name)
    setCurrentTemp(Math.round(jsonData.main.temp))
  }

  return (
    <div className="App">
      
      <Weather currentTemp={currentTemp} userCity={userCity} />
    </div>
  );
}

export default App;
