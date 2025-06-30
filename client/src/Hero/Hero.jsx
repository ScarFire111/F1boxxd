import React from 'react'
import './Hero.css'
import legendsart from '../assets/legendsart.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>Michael Schumacher edition with many more classics!</h2>
          <p>We will help you</p>
          <p>Choose the best for yourself</p>

          <div className="hero-latest-button">See-More</div>
         
        </div>
        <div className="hero-right">
           <div className='hero-hand-icon'>
            <img src={legendsart} alt=" "></img>
            </div>  
        </div>
        
    </div>
    
  )
}
export default Hero;
