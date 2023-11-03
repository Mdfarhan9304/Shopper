import { createContext, useState } from "react";
import all_product from '../Assets/all_product'

export const ShopContext= createContext(null);
const getdeafult = () =>{
    let cart= {};
    for(let index=0 ; index < all_product.length+1; index++){
        cart[index] =0
    }
    return cart;
}

const ShopContextProvider = (props)=> {
    const [carti, setcardi]= useState(getdeafult());


  const addtoCart = (itemId) => {
    setcardi((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeCart = (itemId) => {
    setcardi((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const totalcartamount = () => {
    let totalamnt= 0;
    for(const item in carti){
      if(carti[item]>0){
        let cartinfo = all_product.find((product)=> product.id===Number(item))
        totalamnt += cartinfo.new_price * carti[item];
      }
      
      
    }
    return totalamnt
  }

  const totalitem = () => {
    let itemm=0;
    for(const item in carti){
      if(carti[item]>0){
        itemm+= carti[item]
      }
    }
    return itemm;
  }
   
  const contextValue = {totalcartamount, all_product, carti, addtoCart, removeCart, totalitem};
   

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;