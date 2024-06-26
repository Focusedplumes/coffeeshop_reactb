import React from 'react'
import './Menu.css';
import { fakeMenuItems } from '../fakeData'
import MenuItem from './MenuItems'; //do not change this



export default function Menu({ menuItems = [], updateShoppingCart }) {
  // By setting a default value of [] for menuItems, you prevent the undefined error.
  return (
    
    <div className='item-container'>
        {fakeMenuItems.map(item => (
        <> <div className='item'>
            <div key={item.id} className="item-names">{item.itemName}</div>
            <div className='item-description'>{item.description} Price: {item.price}</div>
            <img src={item.imageUrl} alt={item.itemName} className='item-img' />
            </div>
            </>
            
        ))},

<div className='item-container'>
      {menuItems.map(item => (
        <MenuItem 
          key={item.id} 
          item={item}
          itemName={item.itemName}
          updateShoppingCart={updateShoppingCart} 
        />
      ))}
    </div>
  </div>
  );
};


