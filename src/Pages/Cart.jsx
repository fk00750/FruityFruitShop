import React from "react";
import { useContext } from "react";
import { useState } from "react";
import CartProduct from "../Components/CartProduct";
import CartContext from "../../CartContext";
import { useEffect } from "react";

function Cart() {
  let total = 0;
  const [product, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const [priceFetch, isPriceFetch] = useState(false);

  useEffect(() => {
    if (!cart.items) {
      return;
    }

    // if already fetched simply return
    if (priceFetch) {
      return;
    }

    fetch("http://localhost:3000/api/product/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        isPriceFetch(true);
      });
  }, [cart]);

  const getQty = (productId) => {
    return cart.items[productId];
  };

  const increment = (productId) => {
    const ExistingQty = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = ExistingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = (productId) => {
    const ExistingQty = cart.items[productId];
    if (ExistingQty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productId] = ExistingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const handleDelete = (productId) => {
    const _cart = { ...cart };
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;

    setCart(_cart);

    // fitler out
    const updatedProductList = product.filter(
      (product) => product._id !== productId
    );
    setProducts(updatedProductList);
  };

  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total = sum + total;
    return sum;
  };

  return !product.length ? (
    <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" />
  ) : (
    <div className="container mx-auto border  mt-10 shadow-md">
      {/* heading  */}
      <div className="border border-black px-4 py-4">
        <div className="border border-b-gray-400 pb-8 border-x-0 border-t-0 flex justify-between">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.totalItems} items</h2>
        </div>
        {/* Product  */}
        {product.map((product) => (
          <CartProduct
            product={product}
            getQty={getQty}
            increment={increment}
            decrement={decrement}
            handleDelete={handleDelete}
            total={total}
            getSum={getSum}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
