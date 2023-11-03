import Navbar from "./Component/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import menb from "./Component/Assets/banner_mens.png"
import womenb from "./Component/Assets/banner_women.png"
import kidb from "./Component/Assets/banner_kids.png"
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" banner={menb}/>} />
        <Route path="/women" element={<ShopCategory category="women" banner={womenb}/>} />
        <Route path="/kid" element={<ShopCategory category="kid" banner={kidb}/>} />
        <Route path="/product" element={<Product/>} >
        <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
