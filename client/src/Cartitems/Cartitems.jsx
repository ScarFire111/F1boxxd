import React,{useContext} from 'react'
import './Cartitems.css'
import all_product from '../assets/Frontend_Assets/all_product'
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../assets/Frontend_Assets/cart_cross_icon.png'

export const Cartitems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className="cartitems">
     <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
     </div> 
     <hr />
    {all_product.map((e)=>{
        if (cartItems[e.id]>0)
        {
            return   <div className="cartitems-format cartitems-format-main">
        <img src={e.image} alt="" className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>Rs.{e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>Rs.{e.new_price*cartItems[e.id]}</p>
        <img className='cartitems-remove-item' src={remove_icon} onClick={()=>(removeFromCart(e.id))} alt="" />
        <hr/>
     </div>
        }
        return null;
    })}
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>Rs.{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>Rs.{getTotalCartAmount()}</h3>
                </div>
                <button>CHECKOUT</button>
            </div>
        </div>
    </div>
   

    </div>
  )
}

export default Cartitems
