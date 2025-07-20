import React from 'react'
import './Footer.css'
import footer_logo from '../assets/f1.png'


export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="Footer_logo" />
            
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Developers</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
        <a href="https://www.instagram.com/f1boxxd/" className="instaicon" target="_blank">
        <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.pinterest.com/rishavisthesuspect/" className="pinterestIcon" target="_blank">
        <i className="fa-brands fa-pinterest"></i></a>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025-All rights Reserved</p>
        </div>
    </div>
  )
}
export default Footer
