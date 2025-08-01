import React from 'react'
import navLogo from '../../assets/nav-logo.png'
import './Navbar.css'
import navProfile from '../../assets/Admin_Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
         <img src={navLogo} alt="" className="nav-logo" />
         <p>ADMIN </p>
      </div>
         <img src={navProfile} alt="" className="navprofile"/>
    </div>
  )
}

export default Navbar