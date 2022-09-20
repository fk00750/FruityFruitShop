import React from "react";

function HomeProducts() {
  const buttonStyle = {
    fontSize: "15px",
    color: "#fff",
    borderColor: "#18ab29",
    fontWeight: "bold",
    borderTopRightRadius: "35px",
    borderBottomLeftRadius: "35px",
    textShadow: "1px 1px 0px #2f6627",
  };

  return (
    <div>
      <div className="container mx-auto my-12  sm:flex">
        <div className="flex flex-col space-x-4 mx-4 text-center items-center justify-between shadow-md my-2 py-8">
          <img className="" src="/images/leechiView.png" alt="" />
          <b className="font-semibold text-xs">Red Cherry Apple</b>
          <span className="text-xl font-extrabold text-green-600">$55 kg</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            rem officiis?
          </p>
          <button
            style={buttonStyle}
            className="px-5 w-fit text-center my-2 h-8 rounded-md bg-green-600 mx-2"
          >
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col space-x-4 mx-4 text-center items-center justify-between shadow-md my-2 py-8">
          <img className="" src="/images/grapeView.png" alt="" />
          <b className="font-semibold text-xs">Red Cherry Apple</b>
          <span className="text-xl font-extrabold text-green-600">$55 kg</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            rem officiis?
          </p>
          <button
            style={buttonStyle}
            className="px-5 w-fit text-center my-2 h-8 rounded-md bg-green-600 mx-2"
          >
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col space-x-4 mx-4 text-center items-center justify-between shadow-md my-2 py-8">
          <img className="" src="/images/mangoView.png" alt="" />
          <b className="font-semibold text-xs">Red Cherry Apple</b>
          <span className="text-xl font-extrabold text-green-600">$55 kg</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            rem officiis?
          </p>
          <button
            style={buttonStyle}
            className="px-5 w-fit text-center my-2 h-8 rounded-md bg-green-600 mx-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
