import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../assets/Frontend_Assets/breadcrum_arrow.png'

export const Breadcrums = (props) => {
  const { product } = props;

  if (!product) return null; 

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> 
      SHOP <img src={arrow_icon} alt="" /> 
      {product.category} <img src={arrow_icon} alt="" /> 
      {product.name}
    </div>
  )
}

export default Breadcrums
