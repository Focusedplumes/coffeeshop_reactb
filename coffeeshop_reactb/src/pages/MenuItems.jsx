import React from 'react';
import './Menu.css';
import MenuItem from './MenuItems'; // Import MenuItems
import { fakeMenuItems } from '../fakeData'


// function CartItem({ menuItems, updateShoppingCart }){
//   return (
//     <div className='item-container'>
//       {menuItems.map(item => (
//         <MenuItem 
//           key={item.id} 
//           item={item} 
//           updateShoppingCart={updateShoppingCart} 
//         />
//       ))}
//     </div>
//   );
// }

export default function MenuItems({image, altText, price, item, updateShoppingCart}) {
  const addToCart = () => {
    updateShoppingCart(item);
  };

  return (
    
    <div className='col-4'>
      {fakeMenuItems.map(item => (
        
        <div className="card mb-3" style={{maxWidth: "270px"}}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={image} className='img-fluid rounded-start h-100' alt={altText} />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card-body' >
              <h5 className='card-title'>
                  <> <div className='item'>
                    <div key={item.id} className="item-names">{item.itemName}</div>
                    <div className='item-description'>{item.description} Price: {item.price}</div>
                    <img src={item.imageUrl} alt={item.itemName} className='item-img' />
                    </div>
                  </>
              </h5>
              <p className='card-text'><small className="text-body-secondary">{`$${price}`}</small></p>
              <button onClick={addToCart} className="btn btn-primary">Add To Cart</button>
              
            
            </div>
          </div>
        </div>
         ))}
        
       

    </div>
  )
}





