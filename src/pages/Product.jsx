import React, { useContext } from 'react'
import { ShopContext } from '../Component/Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcum from '../Component/Breadcum/Breadcum'
import Productdisplay from '../Component/ProductDisplay.jsx/Productdisplay'
import Description from '../Component/Description/Description'
import Relatedp from '../Component/Relatedproducts/Relatedp'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId} = useParams();
  const product= all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcum product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <Relatedp/>
    </div>
  )
}

export default Product 
