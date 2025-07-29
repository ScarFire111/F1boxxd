import React from 'react'
import './CSS/Cart.css'
import { Cartitems } from '../Cartitems/Cartitems';


const Cart = () => {
  return (
    <div className='cart'>
        <Cartitems/>
    </div>
  )
}

export default Cart