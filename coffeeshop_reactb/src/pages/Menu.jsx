import React from 'react'
import { fakeMenuItems } from '../fakeData'


export default function Menu() {
  return (
    <div>
    {fakeMenuItems.map(item => (
        <div key={item.id}>{item.itemName}</div>
        <div>Price: {item.price}</div>
        <img src={item.imageUrl} alt={item.itemName} />
    ))}
  </div>
  );
}


