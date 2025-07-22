import React from 'react'
import './Hero.css'



export const Hero = () => {
  return (
    <div className='hero'>
   
        <div className="hero-left">
          <h2>Max Verstappen edition with many more classics!</h2>
          <p>We will help you</p>
          <p>Choose the best for yourself</p>

          <div className="hero-latest-button">See-More</div>
         
        </div>
        <div className="hero-right">
              <div className="form-container-sign-up">
            <form>
              <div className="social-icons">
                <a href="https://github.com/ScarFire111/F1boxxd.git" className="giticon" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                 <a href="https://instagram.com/rish_829" className="instaicon" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
            
            
              </div>
            </form>
          </div>
        </div>
        
    </div>
    
  )
}
export default Hero;
