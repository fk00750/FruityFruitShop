import React from "react";
import CartProduct from "../Components/CartProduct";
import { CartState } from "../Context/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const navigate = useNavigate();

  const getEachFruitTotalPrice = (fruit) => {
    const sum = fruit.qty * fruit.price;
    return sum;
  };

  const getTotal = () => {
    let total = 0;
    cart.map((fruit) => {
      return (total += getEachFruitTotalPrice(fruit));
    });
    return total;
  };

  const getTax = () => {
    const total = getTotal();
    const taxValue = (total / 100) * 18;
    const grandTotal = total + taxValue;
    return grandTotal;
  };

  const previousPage = () => {
    navigate("/fruits");
  };

  return !cart.length ? (
    <div>
      <div className="flex items-center space-x-2 mx-4 my-4">
        <FaArrowLeft />
        <h1
          className="text-md font-medium text-blue-500 xl:text-lg cursor-pointer"
          onClick={previousPage}
        >
          Go to Fruits
        </h1>
      </div>
      <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" />
    </div>
  ) : (
    <div className="mx-2">
      <div className="shadow-lg  mx-auto space-y-8 my-12 container bg-gray-100 rounded-md py-2 xl:flex xl:flex-grow">
        {/* heading  */}
        <div className="xl:flex-1">
          <div className="px-4 py-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium xl:text-2xl">Shopping Cart</h1>
              <h2 className="text-xl font-medium xl:text-2xl">
                {cart.length} items
              </h2>
            </div>
          </div>
          {cart.map((fruit) => {
            return (
              <CartProduct
                key={fruit._id}
                fruit={fruit}
                getEachFruitTotalPrice={getEachFruitTotalPrice}
                dispatch={dispatch}
              />
            );
          })}
          <div className="flex justify-between items-center mt-6 pt-6 mx-2">
            <div className="flex items-center space-x-2">
              <FaArrowLeft />
              <h1
                className="text-md font-medium text-blue-500 xl:text-lg cursor-pointer"
                onClick={previousPage}
              >
                Continue Shopping
              </h1>
            </div>
            <div className="flex justify-center  items-center">
              <span className="text-sm font-medium text-gray-400 mr-1 xl:text-xl">
                Subtotal:
              </span>
              <span className="text-lg font-bold text-gray-800 ">
                ₹ {getTotal()}
              </span>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="bg-gray-800 p-5 rounded overflow-visible mx-2 xl:w-1/4">
          <h1 className="text-xl font-medium text-gray-100 block pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mx-4 pb-4">
            <div className="space-x-4">
              <span className="text-2xl  text-gray-100">Item</span>
              <i className="text-lg font-medium text-gray-400">{cart.length}</i>
            </div>
            <span className="text-lg font-medium text-gray-100">
              {getTotal()}
            </span>
          </div>
          <div className="mx-4 flex justify-between pb-6 flex-wrap">
            <div className="text-lg text-gray-100 flex flex-wrap space-x-1 xl:flex-col">
              <span>Subtotal</span>
              <i>(including Taxes )</i>
            </div>
            <div>
              <span className="text-lg font-medium text-gray-100">
                {getTax()}
              </span>
            </div>
          </div>
          <div>
            <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
