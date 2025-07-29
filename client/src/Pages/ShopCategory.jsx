import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../assets/Frontend_Assets/dropdown_icon.png'
import Item from '../Items/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className="shop-category">
       <img className="shopcategory-banner" src={props.banner} alt="" />
       <div className="shopcategory-indexSort">
        <p>
          <span>Showing xx many</span> out of 36 products
        </p>
       </div>
       <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
       </div>
       <div className="shopcategory-products">
        {all_product.map((items,i)=>{

          if(props.category===items.category){
                return <Item key={i} id={items.id} 
            name={items.name} image={items.image} alt=""
            new_price={items.new_price} 
            old_price={items.old_price}/>
          }
          else{
            return null;
          }

        })}
       </div>
    </div>
  )
}


export default ShopCategory