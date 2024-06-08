import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css';


const Navbar = () => {
   //const navigate = useNavigate(); //in case I want to create my own links instead of using bootstrap elements

  return (
    <div className='navbar' role="navigation">
      {/* <h1>Lotta Java</h1> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">LOTTA JAVA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item" >
                <Link className='nav-link remove-underline' to={"/home"} > Home </Link>
                </li>
                <li className="nav-item" >
                  <Link className='nav-link remove-underline' to={"/menu"} > Menu </Link>
                  </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" aria-disabled="false">Contact</a>
                </li>
              </ul>
            </div>
          </div>
</nav>
    </div>

);
};

// function Navbar() {
//   return (
//     <div>
//       <div className="container text-center">
//         <div className="row">
//             <div className="col">
//                     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                         <div className="container-fluid">
//                         <a className="navbar-brand" href="#">CoffeeShop</a>
//                           <div className='container'>
//                                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                                     <span className="navbar-toggler-icon"></span>
//                                 </button>
//                                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                                     <div className="navbar-nav">
//                                     <a className="nav-link active" aria-current="page" href="#">Home</a>
//                                     <a className="nav-link" href="#">Menu</a>
//                                     <a className="nav-link" href="#">Shopping Cart</a>
//                                     <a className="nav-link" href="#">Contact</a>
//                                     </div>
//                                 </div>
//                                 </div>
//                           </div>
//                     </nav>
                
//             </div>
//         </div>
//       </div>      
//     </div>
//   )
// }

export default Navbar