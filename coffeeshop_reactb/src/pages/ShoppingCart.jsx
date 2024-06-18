import React from 'react';


//steps for shopping cart
// - create shopping cart state in parent
// - create function to update shopping cart in parent
// - pass state to cart component
// - pass update function to menu item component
// - when add button in menu item component is click, trigger update shopping cart function and pass item (or just id) to add to cart
// - this will bubble up to parent and update state of cart to display what has been added
// - make sure to update shopping cart state, don't override it

// - example



function ShoppingCart({ shoppingCart }) {// remember to take in props
  return(
      <div>
          {shoppingCart && shoppingCart.length > 0 ? (
              shoppingCart.map(cartItem => (
              <p key={cartItem.id}>{`${cartItem.item}-$${cartItem.price}`}</p>
              ))
          ) : (
              <p>You have no items in the cart</p>
          )}
      </div> 
  );
}


export default ShoppingCart;