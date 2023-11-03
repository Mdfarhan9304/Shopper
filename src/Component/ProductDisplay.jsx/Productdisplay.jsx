import React, { useContext } from "react";
import "./Productdisplay.css";
import start_icon from "../Assets/star_icon.png";
import stardull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const Productdisplay = (props) => {
  const { product } = props;
  const {addtoCart, removeCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productimg">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="product-rightstart">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={stardull} alt="" />
          <p>(23)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum
          repudiandae quo nobis, facilis repellendus et deserunt unde est
          quaerat consequuntur id, voluptates molestiae qui?
        </div>
        <div className="productdisplay-rights">
            <h1>Select Size</h1>
            <div className="productdisplay-rightsm">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addtoCart(product.id)}}>ADD TO CART</button>
        <p className="right-category"><span>Category :</span> Women, T-shirt, Croptop</p>
        <p className="right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default Productdisplay;
