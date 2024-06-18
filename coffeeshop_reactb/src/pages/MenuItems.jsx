import React from 'react';
import './Menu.css';
import MenuItem from './MenuItems'; // Import MenuItems

function CartItem({ menuItems, updateShoppingCart }){
  return (
    <div className='item-container'>
      {menuItems.map(item => (
        <MenuItem 
          key={item.id} 
          item={item} 
          updateShoppingCart={updateShoppingCart} 
        />
      ))}
    </div>
  );
}

export default function MenuItems({image, altText, price, item, updateShoppingCart}) {
  const addToCart = () => {
    updateShoppingCart(item);
  };

  return (
    <div className='col-4'>
        <div className="card mb-3" style={{maxWidth: "270px"}}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={image} className='img-fluid rounded-start h-100' alt={altText} />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{item}</h5>
              <p className='card-text'><small className="text-body-secondary">{`$${price}`}</small></p>
              <button onClick={addToCart} className="btn btn-primary">Add To Cart</button>
              {/* <a href="http://localhost:3000/ShoppingCart" className="btn btn-primary">Cart</a> // this needs to add item to shopping cart */}
              
            </div>
          </div>
        </div>
        {/* <div className="col-3">
        Card 2  
        </div>
        <div className="col-3">
        Card 3   
        </div>
        <div className="col-3">
        Card 4   
        </div> */}

    </div>
  )
}





