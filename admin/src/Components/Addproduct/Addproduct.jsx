import React,{useState} from 'react'
import './addproduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'

const Addproduct = () => {
    const [image,setImage]=useState(false);
    const imageHandler=(e)=>{
     setImage(e.target.files[0]);
    }
    const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"clothes",
        new_price:"",
        old_price:""
    })

    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product=async ()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;

        let formdata=new FormData();
        formdata.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formdata,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data});

        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method: 'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product added"):alert("Failed")
            })
        }
    }
  return (
   <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type-here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type-here' />
        </div>
         <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler}type="text" name='new_price' placeholder='type-here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selecter'>
                <option value="clothes">Clothes</option>
                <option value="engine_Models">Engine Models</option>
                <option value="car_Models">Car Models</option>
                <option value="posters">Posters</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img  src={image?URL.createObjectURL(image):upload_area} alt="" className="addproduct-thumbnail-img" />
            </label>
            {/*Sooo what happened here is, if image is true, then the selected image is shown, if false, the upload image is shown */}
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_Product()}} className="addproduct-btn">
            Add
        </button>
   </div>
  )
}

export default Addproduct