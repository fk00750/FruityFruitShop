import React from "react";
import { AiFillDelete } from "../Collection/ReactIconsCollection";

function CartProduct({ fruit, dispatch, getEachFruitTotalPrice }) {
  return (
    <div className="">
      <div className="w-fit mx-4 my-2">
        <AiFillDelete
          fontSize="24px"
          cursor="pointer"
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: fruit,
            });
          }}
        />
      </div>
      <div className="flex  items-center justify-evenly border border-r-0 border-t-0 border-l-0 border-gray-400 py-2 mx-2">
        <div className="w-20 xl:w-32">
          <img src={fruit.image} alt="" />
        </div>
        <div className="font-medium w-1/4 xl:text-lg">
          <span>
            {fruit.variety.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            )}
          </span>
        </div>
        <div className="text- ">
          <select
            className="border border-gray-400 rounded-md py-2 "
            value={fruit.qty}
            onChange={(e) => {
              dispatch({
                type: "CHANGE_CART_QTY",
                payload: {
                  _id: fruit._id,
                  qty: e.target.value,
                },
              });
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <span className="xl:text-xl">₹ {getEachFruitTotalPrice(fruit)}</span>
      </div>
    </div>
  );
}

export default CartProduct;
