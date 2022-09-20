import React from "react";
import { useContext } from "react";
import CartContext from "../../CartContext";

function CartProduct(props) {
  const { product, getQty, increment, decrement, handleDelete, total, getSum } =
    props;

  return (
    <div className="flex justify-between ">
      {/* Product details  */}
      <div className="px-4 py-4 w-54 mt-5">
        <h3 className="font-semibold text-gray-600 text-xs uppercase text-center mb-6 ">
          Product Details
        </h3>
        <div className="flex">
          <div className="w-20">
            <img className="h-24" src={product.image} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4">
            <span className="font-semibold text-sm w-20">
              {product.cultivar}
            </span>
            <span className="text-red-500 ">{product.name}</span>
            <button
              onClick={() => handleDelete(product._id)}
              className="font-semibold text-xs text-gray-500  w-fit"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      {/* --- End ---  */}
      {/* Quantity  */}
      <div className="px-4 py-4 w-fit mt-5 flex flex-col items-center">
        <h3 className="font-semibold text-gray-600 text-xs uppercase text-center mb-6">
          Quantity
        </h3>
        <div className=" px-4 py-4 flex">
          <div className="mx-2 ">
            <button onClick={() => decrement(product._id)}>-</button>
          </div>
          <b className="mx-2 border border-gray-400 w-8 text-center">
            {getQty(product._id)}
          </b>
          <div className="mx-2">
            <button onClick={() => increment(product._id)}>+</button>
          </div>
        </div>
      </div>
      {/* --- End ---  */}
      {/* Price  */}
      <div className="px-4 py-4 w-fit mt-5 flex flex-col items-center ">
        <h3 className="font-semibold text-gray-600 text-xs uppercase text-center mb-6">
          Price
        </h3>
        <div className="px-4 py-4 flex">
          <span className="font-semibold w-5 text-center">{product.price}</span>
        </div>
      </div>
      {/* --- End ---  */}
      {/* Total Price  */}
      <div className="px-4 py-4 w-fit mt-5 flex flex-col items-center">
        <h3 className="font-semibold text-gray-600 text-xs uppercase text-center mb-6">
          Total Price
        </h3>
        <div className="px-4 py-4 flex">
          <span className="font-semibold">
            $ {getSum(product._id, product.price)}
          </span>
        </div>
      </div>
      {/* --- End ---  */}
    </div>
  );
}

export default CartProduct;
