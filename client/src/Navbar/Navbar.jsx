import React, { useState } from 'react'
import './Navbar.css'

import cart_icon from '../assets/cart-logo.png'
import logo from '../assets/nav-logo.png'
import cart_logo from '../Navbar/f1.png'
const Navbar = () => {

  const [menu,setMenu]=useState("shop");
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='F1boxxd logo'></img>
       <div id="logo"> <span id="F1"><img src={cart_logo} alt="WebsiteLogo"></img></span>
        </div>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu('Clothes')}>Clothes<hr></hr></li>
        <li onClick={()=>setMenu('Car_Models')}>Car Models<hr></hr></li>
        <li onClick={()=>setMenu('Engine_Models')}>Engine Models<hr></hr></li>
        <li onClick={()=>setMenu('Posters')}>Posters<hr></hr></li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon"></img>   
         <div className='nav-cart-count'>0</div>
      </div>
     
    </div>
   
  )
}

export default Navbar