import React,{useState,useEffect} from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/Admin_Assets/cross_icon.png'
const Listproduct = () => {
   const [allproducts,setAllProducts]=useState([]);
   const fetchInfo=async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});

   }

   useEffect(()=>{
    fetchInfo();
   },[])
  return (
    <div className="list-product">
             <h1>All Products List</h1>
             <div className="listproduct-format-main">
              <p>Products</p>
              <p>Title</p>
              <p>Old Price</p>
              <p>New Price</p>
              <p>Category</p>
              <p>Remove</p>
             </div>

             <div className="listproduct-allproducts">
              <hr />
              {allproducts.map((product,index)=>{
                return <div key={index} className="listproduct-format-main listproduct-format">
                     <img src={product.image} alt="" className="listproduct-product-item" />
                     <p>{product.name}</p>
                     <p>Rs.{product.old_price}</p>
                     <p>Rs.{product.new_price}</p>
                     <p>{product.category}</p>
                     <img src={cross_icon} alt="" className="listproduct-remove-icon" />
                </div>
              })}
             </div>
    </div>
  )
}

export default Listproduct