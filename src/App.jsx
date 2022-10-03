import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import SingleProduct from "./Pages/SingleProduct";
import CartContext from "../CartContext";
import About from "./Pages/About";
import Fruits from "./Pages/Fruits";
import Pricing from "./Pages/Pricing";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
// import { CartContext } from "../CartContext";
import { AuthProvider } from "./Context/AuthProvider";
import User from "./UserComponents/User";
import Layout from "./Layout";
import Unauthorized from "./ErrorComponents/Unauthorized";
import PageNotFound from "./ErrorComponents/PagIsNotFound";
import RequireAuth from "./AuthComponents/RequireAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapBox from "./Map/MapBox";
// import { MapProvider } from "./Map/Context/MapContext";

function App() {
  const [cart, setCart] = useState({});

  // get cart item locally
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);

  // set cart item locally
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
          <AuthProvider>
            <CartContext.Provider value={{ cart, setCart }}>
              <Navigation></Navigation>
              <Routes>
                <Route path="/" element={<Layout />}>
                  {/* Public routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<About />} />
                  <Route path="/fruits" element={<Fruits />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="unauthorized" element={<Unauthorized />} />
                  <Route path="page_missing" element={<PageNotFound />} />
                  <Route
                    path="/products/:_id"
                    exact
                    element={<SingleProduct />}
                  />
                  <Route path="/map" element={<MapBox />} />

                  {/* protected routes */}
                  <Route element={<RequireAuth />}>
                    <Route path="/me" element={<User />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/cart" element={<Cart />} />
                  </Route>
                </Route>
              </Routes>
            </CartContext.Provider>
          </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
