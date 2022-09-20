import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";

function Product(props) {
  const [isAdding, setIsAdding] = useState(false);
  const { product } = props;
  const { cart, setCart } = useContext(CartContext);

  const AddToCart = (e, CartProduct) => {
    e.preventDefault();

    let _cart = { ...cart }; // {itemms : {}}

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[CartProduct._id]) {
      _cart.items[CartProduct._id] += 1;
    } else {
      _cart.items[CartProduct._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;
    setCart(_cart);

    setIsAdding(true); // set add btn to true
    setTimeout(() => {
      setIsAdding(false); // set add btn to false
    }, 1000);
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div className="shadow-md bg-white rounded-lg border flex flex-col hover:shadow-black bg-[url('public/images/background.jpg')] bg-no-repeat bg-cover bg-center">
        <div>
          <img
            src={product.image}
            alt=""
            className="object-cover w-full rounded-t-lg"
          />
          <div className="flex flex-col mx-2 my-4 ">
            <h5 className="font-semibold text-xl">Cultivar</h5>
            <span>
              {product.cultivar.charAt(0).toUpperCase() +
                product.cultivar.slice(1)}
            </span>
            <h5 className="font-bold text-xl">Location</h5>
            <span>
              {product.location.charAt(0).toUpperCase() +
                product.location.slice(1)}
            </span>
            <div className="flex justify-between items-center">
              <span className="bg-gray-500 text-white  px-1 rounded-lg">
                Price - <i>{product.price}</i>
              </span>
              <button
                onClick={(e) => {
                  AddToCart(e, product);
                }}
                className={`${
                  isAdding ? "bg-green-500" : "bg-blue-500"
                } text-white px-5 text-center rounded-lg`}
              >
                ADD{isAdding ? "ED" : ""}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
