import React from 'react'
import './RelatedProducts.css'
import data_product from '../assets/Frontend_Assets/data'
import Item from '../Items/Item'


export const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
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
export default RelatedProducts
