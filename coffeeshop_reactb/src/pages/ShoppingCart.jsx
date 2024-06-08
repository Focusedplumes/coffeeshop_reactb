import React from 'react'

//steps for shopping cart
// - create shopping cart state in parent
// - create function to update shopping cart in parent
// - pass state to cart component
// - pass update function to menu item component
// - when add button in menu item component is click, trigger update shopping cart function and pass item (or just id) to add to cart
// - this will bubble up to parent and update state of cart to display what has been added
// - make sure to update shopping cart state, don't override it

// - example

export default function ShoppingCart() {
  return (
    <div>ShoppingCart</div>
    const [menuItems, setMenuItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

    const updateShoppingCart = (shoppingCartItem) => {
    setShoppingCart([...shoppingCart, shoppingCartItem]);
  };
      <Navbar shoppingCart={shoppingCart} /> // keep passing this down till it gets to your shopping cart component

      <Body 
        updateShoppingCart={updateShoppingCart} //keep passing this down until it gets to your menu item component
        --other props--
      />


menu item component // remember to take it props

  const addToCart = () => {
    props.updateShoppingCart(props.item);
  };
  
   <button onClick={addToCart}>Add To Cart</button>

shopping cart component // remember to take in props

<div>
    {props.shoppingCart && props.shoppingCart.length > 0 ? (
        props.shoppingCart.map(cartItem => (
        <p key={cartItem.id}>{`${cartItem.item}-$${cartItem.price}`}</p>
        ))
    ) : (
        <p>You have no items in the cart</p>
    )}
</div> 
  )
}
