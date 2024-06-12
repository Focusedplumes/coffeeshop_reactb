import React from 'react'

export default function MenuItems({image, altText, price, item}) {
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
              <a href="#" className="btn btn-primary">Go To Cart OneDay</a>
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

function MenuItem({ item, updateShoppingCart }){
const addToCart = () => {
  updateShoppingCart(item);
};

 <button onClick={addToCart}>Add To Cart</button>
};