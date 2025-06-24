import React from 'react'
import './Hero.css'
import Michael_photo from '../assets/MichaelSchumacher.png'
import F2004 from '../assets/F2004.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>Michael Schumacher Special</h2>
          <p>new<img src={F2004} alt="" className="F2004"></img></p>
          <p>collections for</p>
          <p>everyone</p>

          <div className="hero-latest-button">See-More</div>
        </div>
        <div className="hero-right">
           <div className='hero-hand-icon'>
              <img src={Michael_photo} alt="" />
            </div>  
        </div>
        
    </div>
    
  )
}
export default Hero;
