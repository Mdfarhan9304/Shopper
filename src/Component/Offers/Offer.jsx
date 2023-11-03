import React from "react";
import "./Offer.css";
import excl from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={excl} alt="" />
      </div>
    </div>
  );
};

export default Offer;
