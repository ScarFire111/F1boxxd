import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">  Description  </div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Discover premium quality with our handpicked selection of must-have essentials, tailored for modern lifestyles. Whether you're upgrading your wardrobe, refreshing your home, or finding the perfect gift, we've got something special for everyone. Trusted by over 10,000 happy customers and counting!</p>
            <p>We need to add more description</p>
        </div>
    </div>
  )
}

export default DescriptionBox
