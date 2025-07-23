import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import  Breadcrums  from '../Breadcrums/Breadcrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Relatedproducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {ProductId}=useParams();
  const product=all_product.find((e)=>e.id===Number(ProductId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
export default Product;