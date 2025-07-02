import React from 'react'
import'./Popular.css'
import data_product from '../assets/Frontend_Assets/data'
import Item from '../Items/Item'

export const Popular = () => {
  return (
    <div className="Popular">
       <h1>Popular lately</h1>
       <hr/>
       <div className="popular-items">
        
        {data_product.map((items,i)=>{
            return <Item key={i} id={items.id} 
            name={items.name} image={items.image} alt=""
            new_price={items.new_price} 
            old_price={items.old_price}/>
        })}
       </div>
    </div>
  )
}
export default Popular;
