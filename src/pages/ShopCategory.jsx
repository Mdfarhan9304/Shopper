import React, { useContext } from 'react'
import { ShopContext } from '../Component/Context/ShopContext'
import down from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Item/Item'
import './ShopCategory.css'

const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} className='banner' alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 25 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={down} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
          if(props.category=== item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-exploremore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory