import React from 'react'
import './Footer.css'
import footer_logo from '../assets/f1.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-left">
            <img src="" alt="footerlogo"/>
        </div>
        <div className="footer-right">
            <p>F1Boxxd</p>
            <div className="footer-links">
                <li>About Us</li>
                
                <li>Support</li>
            
                <li>Social</li>
                <div className="infogrid">
                    <p>Team</p>
                    <p>Contact us</p>
                     <a href="https://www.instagram.com/f1boxxd/" className="instaicon" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                </div>
            </div>
        </div>
        <hr/>
        <div className="copyright">
            <p>Copyright @ 2025 All Rights</p>
        </div>
    </div>
  )
}
export default Footer
