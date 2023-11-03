import React, { useContext } from "react";
import "./Cartitem.css";
import { ShopContext } from "../Context/ShopContext";
import removei from "../Assets/cart_cross_icon.png";

const Cartitem = () => {
  const { totalcartamount, all_product, carti, removeCart } = useContext(ShopContext);
  return (
    <div className="cartitem">
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (carti[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitem-format-main">
                <img src={e.image} alt="" className="picon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="qty">{carti[e.id]}</button>
                <p>${e.new_price * carti[e.id]}</p>
                <img
                  className="ricon"
                  src={removei}
                  alt=""
                  onClick={() => removeCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="down">
        <div className="cart-item-total">
          <h1>Cart Total</h1>
          <div>
            <div className="titem">
              <p>Subtotal</p>
              <p>${totalcartamount()}</p>
            </div>
            <hr />
            <div className="titem">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="titem">
              <h3>Total</h3>
              <h3>${totalcartamount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="pcode">
          <p>If you have have a promocode, Enter it here</p>
          <div className="pbox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
