import React from 'react'
import './Offers.css'
import exclusive_product from '../assets/exclusive_product.png'
export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
           <h1>Exclusive Michael Schumacher F2004 Model Car</h1>
           <p>ONLY FOR YOU!!!!</p>
           <button>See now!</button>
      </div>
      <div className="offers-right">
          <img src={exclusive_product} alt="" />
      </div>
    </div>
  )
}
export default Offers
