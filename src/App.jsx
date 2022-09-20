import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import SingleProduct from "./Pages/SingleProduct";
import CartContext from "../CartContext";
// import { CartContext } from "../CartContext";


function App() {
  const [cart, setCart] = useState({})

  // get cart item locally
  useEffect(() => {
    const cart = window.localStorage.getItem("cart")
    setCart(JSON.parse(cart))
  },[])


  // set cart item locally
  useEffect(() => {
    window.localStorage.setItem("cart" , JSON.stringify(cart))
  },[cart])


  return (
    <>
      <BrowserRouter>
      <CartContext.Provider value={{ cart , setCart }}>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:_id" exact element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
