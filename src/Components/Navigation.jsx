import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import AuthContext from "../Context/AuthProvider";
import { useLogout } from "../hooks/useLogout";

function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { login } = useContext(AuthContext);
  const { logout } = useLogout()

  const result = JSON.parse(localStorage.getItem("token"))


  // cart style
  const cartStyle = {
    background: "red",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };

  const buttonStyle = {
    fontSize: "15px",
    borderColor: "#18ab29",
    borderTopRightRadius: "35px",
    borderBottomLeftRadius: "35px",
    textShadow: "1px 1px 0px #2f6627",
  };

  // cart context
  const { cart } = useContext(CartContext);

  const handleClick = () => {
    logout()
  }

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4  pt-5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <div className="flex items-center">
              <img
                src="/images/freshfruit_logo.png"
                alt=""
                className="h-14 sm:h-24  -mr-2.5"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-green-600 font-mono">
                Fruity
              </span>
            </div>
          </Link>
          <div className="flex md:order-2">
            {result ? (
              <Link to="me">
                <button
                  type="button"
                  style={buttonStyle}
                  className="px-5 text-center font-bold text-white my-2 h-8 rounded-md bg-green-600 mx-2 hover:text-green-600 hover:bg-white hover:border hover:border-green-400 hover:font-normal"
                >
                  Me
                </button>
              </Link>
            ) : (
              <Link to="sign-up">
                <button
                  type="button"
                  style={buttonStyle}
                  className="px-5 text-center font-bold text-white my-2 h-8 rounded-md bg-green-600 mx-2 hover:text-green-600 hover:bg-white hover:border hover:border-green-400 hover:font-normal"
                >
                  Sign Up
                </button>
              </Link>
            )}

            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="sr-only"></span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              navbarOpen
                ? "justify-between items-center w-full md:flex md:w-auto md:order-1"
                : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            }
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <Link to="/">
                <li
                  className="block py-2 pr-4 pl-3 rounded text-gray-500 hover:text-black  hover:border-green-600 hover:border-r-0 hover:border-l-0 hover:border-t-0 hover:border-2 md:p-0 xl:text-2xl"
                  aria-current="page"
                >
                  Home
                </li>
              </Link>
              <Link to="/about-us">
                <li className="block py-2 pr-4 pl-3 rounded text-gray-500 hover:text-black  hover:border-green-600 hover:border-r-0 hover:border-l-0 hover:border-t-0 hover:border-2 md:p-0 xl:text-2xl">
                  About Us
                </li>
              </Link>
              <Link to="fruits">
                <li className="block py-2 pr-4 pl-3 rounded text-gray-500 hover:text-black  hover:border-green-600 hover:border-r-0 hover:border-l-0 hover:border-t-0 hover:border-2 md:p-0 xl:text-2xl">
                  Fruits
                </li>
              </Link>
              <Link to="pricing">
                <li className="block py-2 pr-4 pl-3 rounded text-gray-500 hover:text-black  hover:border-green-600 hover:border-r-0 hover:border-l-0 hover:border-t-0 hover:border-2 md:p-0 xl:text-2xl">
                  Pricing
                </li>
              </Link>
              <li className="block py-2 pr-4 pl-3 rounded text-gray-500 hover:text-black  hover:border-green-600 hover:border-r-0 hover:border-l-0 hover:border-t-0 hover:border-2 md:p-0 xl:text-2xl">
                <button onClick={handleClick}>LogOut</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
