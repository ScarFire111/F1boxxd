import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='items'>
      <img src={props.image} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Rs.{props.new_price}
        </div>
        <div className="item-price-old">
          Rs.{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item;
