import React from 'react'
import './Breadcum.css'
import arrow from '../Assets/breadcrum_arrow.png'

const Breadcum = (props) => {
    const {product} = props;
  return (
    <div className='breadcum'>
        HOME  <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
      
    </div>
  )
}

export default Breadcum
