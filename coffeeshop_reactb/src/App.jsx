import {useState, useEffect} from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import React from 'react';
import './App.css';
import Layout from './components/Layout'
// import './components/Home';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Weather from './components/Weather';
import ShoppingCart from './pages/ShoppingCart';
import { fakeMenuItems } from './fakeData';
import Navbar from './components/Navbar';
import Body from './components/Body';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home />},
      { path: "menu", element: <Menu />},
    ]
  },
  {
    path: "/menu",
    element: <Menu />,
    
  },
  {
    path: "/ShoppingCart",
    element: <ShoppingCart />,
  }
  // {
  //   path: "/home",
  //   element: <Home />
  // }
])

function App() {

  const [menuItems, setMenuItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

    const updateShoppingCart = (shoppingCartItem) => {
    setShoppingCart([...shoppingCart, shoppingCartItem]);
  };

  return (
    <div>
      <Navbar shoppingCart={shoppingCart} />

      <Body 
        updateShoppingCart={updateShoppingCart} //keep passing this down until it gets to your menu item component
        //--other props--
        menuItems={fakeMenuItems} // Ensure menuItems is passed here
      />
      <ShoppingCart shoppingCart={shoppingCart} />
   </div>,
   <div>
    <RouterProvider router={router} />
   </div>
 );    
}

//   const weatherApiKey = '';
//   const [userCity, setUserCity] = useState(null)
//   const [currentTemp, setCurrentTemp] = useState(null) 

//  useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           console.log('position', position)
//           const { latitude, longitude } = position.coords;
//           // //Anchorage 61.2181, -149.9003
//           // getWeatherData(61.2181, -149.9003)
//           // // Death Valley 36.4614, -116.8656
//           // getWeatherData(36.4614, -116.8656)
//           // //browser
//           getWeatherData(latitude, longitude)
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//         }
//       );
//     }
//   }, [])

//   async function getWeatherData(lat, lon){
//     console.log(lat)
//     console.log(lon)
//     let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
//     console.log('weatherAPIResponse', weatherAPIResponse)
//     if(weatherAPIResponse.status != 200){
//       alert('could not get weather data')
//     }
//     let jsonData = await weatherAPIResponse.json()
//     console.log('jsonData', jsonData)
//     setUserCity(jsonData.name)
//     setCurrentTemp(Math.round(jsonData.main.temp))
//   }


//     <div>
      
      
      
// {/* //       <Weather currentTemp={currentTemp} userCity={userCity} /> */}
//     </div>


export default App;

