import React,{createContext,useState,useEffect} from 'react'

export const ShopContext=createContext(null);
   const getDefaultCart =()=>{
        let cart={};
        for(let index=0;index<300+1;index++){
            cart[index]=0;
        }
        return cart;
    }
const ShopContextProvider=(props)=>{
    const [all_product,setAll_product]=useState([]);
    const [cartItems,setCartItems]=useState(getDefaultCart());

    useEffect (()=>{
        fetch('http://localhost:4000/allproducts').then((response)=>response.json())
        .then((data)=>setAll_product(data))
    },[])
    const addToCart=(itemId)=>{
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      
    }
    const removeFromCart=(itemId)=>{
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            if(cartItems[items]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(items))
                totalAmount+=itemInfo.new_price*cartItems[items];
            }
        }
             return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const items in cartItems){
            if(cartItems[items]>0){
                totalItem+=cartItems[items];
            }
        }
        return totalItem;
    }

      const contextValue={getTotalCartAmount,getTotalCartItems,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children};
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
