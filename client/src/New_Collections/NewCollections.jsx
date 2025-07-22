import React from 'react'
import './newCollections.css'
import new_collection from '../assets/Frontend_Assets/new_collections'
import Item from '../Items/Item'

export const NewCollections = () => {
  return (
    <div className="new-Collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
          {new_collection.map((items,i)=>{
               return <Item key={i} id={items.id} 
            name={items.name} image={items.image} alt=""
            new_price={items.new_price} 
            old_price={items.old_price}/>
          })} 
        </div>
        </div>
  )
}

export default NewCollections
