import React from 'react'

function Navbar() {
  return (
    <div>
      <div class="container text-center">
        <div className="row">
            <div className="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                        <a className="navbar-brand" href="#">CoffeeShop</a>
                          <div className='container'>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    <a className="nav-link" href="#">Menu</a>
                                    <a className="nav-link" href="#">Shopping Cart</a>
                                    <a className="nav-link" href="#">Contact</a>
                                    </div>
                                </div>
                                </div>
                          </div>
                    </nav>
                
            </div>
        </div>
      </div>      
    </div>
  )
}

export default Navbar