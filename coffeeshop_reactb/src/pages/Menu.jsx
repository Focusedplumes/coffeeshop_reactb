import React from 'react'
import './Menu.css';
import { fakeMenuItems } from '../fakeData'



export default function Menu() {
  return (
    
    <div className='item-container'>
        {fakeMenuItems.map(item => (
        <> <div className='item'>
            <div key={item.id}>{item.itemName}</div>
            <div>{item.description} Price: {item.price}</div>
            <img src={item.imageUrl} alt={item.itemName} className='item-img' />
            </div>
            </>
            
        ))}
  </div>
  );
}


