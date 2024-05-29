import React from 'react'
import HeaderArt from './images/coffeeShopInterior.jpg'

export default function Header() {
  return (
    <div className='row-6'>
      <div className="art">
          <header className="w-75 p-3">
            <img src={HeaderArt}  className="img-fluid"  alt="coffee header"/> 
          </header>
      </div>
      
    </div>
  )
}
