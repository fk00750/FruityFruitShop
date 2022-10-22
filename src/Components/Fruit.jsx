import React from "react";
import { MdStarRate } from "../Collection/ReactIconsCollection";

import { CartState } from "../Context/CartContext";

function Fruit({ fruit }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col space-x-4 mx-4 text-center items-center justify-between border border-gray-200 rounded-md  my-2 py-8 hover:bg-white hover:shadow-md hover:rounded-md">
          <img className="h-64" src={fruit.image} alt="" />
          <b className="font-semibold text-xs xl:text-xl">{fruit.variety}</b>
          <div className="flex">
            {[...Array(Math.round(fruit.rating))].map((item, index) => {
              return <MdStarRate key={index} color="#FFDF00" />;
            })}
          </div>
          <span className="text-xl font-extrabold text-green-600">
            ₹ {fruit.price} kg
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            rem officiis?
          </p>

          {cart.some((p) => p._id === fruit._id) ? (
            <button
              className="btn px-5 w-fit text-center my-2 h-8 rounded-md bg-red-600 mx-2"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: fruit,
                });
              }}
            >
              Remove
            </button>
          ) : (
            <button
              className="btn px-5 w-fit text-center my-2 h-8 rounded-md bg-green-600 mx-2"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: fruit,
                });
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Fruit;
