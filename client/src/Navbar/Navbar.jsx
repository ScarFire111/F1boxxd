import React from 'react'
import './Navbar.css'

import cart_icon from '../assets/cart-logo.png'
import logo from '../assets/nav-logo.png'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='F1boxxd logo'></img>
        <p>F1Boxxd</p>
      </div>
      <ul className='nav-menu'>
        <li>Clothes<hr></hr></li>
        <li>Car Models<hr></hr></li>
        <li>Engine Models<hr></hr></li>
        <li>Posters<hr></hr></li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon"></img>   
      </div>
    </div>
   
  )
}

export default Navbar