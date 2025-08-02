import React,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../context/ShopContext'
export const ProductDisplay = (props) => {
    const {product}=props;
    const{addToCart}=useContext(ShopContext);
    if (!product) return null; 
  return (
    <div className="productdisplay">
       <div className="productdisplay-left">
             <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
             </div>
             <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
             </div>
       </div>
       <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon}alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    Rs{product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    Rs{product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
              Shortcoming on our behalf, product description api has not been yet added
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className="productdisplay-right-category"></p>
       </div>
    </div>
  )
}

export default ProductDisplay
