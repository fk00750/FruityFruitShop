import React from "react";

function FeaturePrompt() {
  const numberStyle = {
    borderRadius: "50%",
    height: "35px",
    width: "35px",
  };
  
  return (
    <div>
      <div className="container mx-auto flex items-center justify-betarween xl:justify-around space-y-4 flex-wrap px-2 py-10">
        <div>
          <h1 className="text-2xl font-semibold">
            Our purpose is to deliver fresh fruit to you
          </h1>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            autem quam magni.
          </p>
        </div>
        <div>
          <div className="flex space-x-4 space-y-2 py-4">
            <div
              style={numberStyle}
              className="border text-center px-2 py-2 font-bold text-green-600 shadow-xl shadow-gray-400"
            >
              1
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Order Your Fruit</span>
              <i>Lorem ipsum dolor sit amet.</i>
            </div>
          </div>
          <div className="flex space-x-4 space-y-2">
            <div
              style={numberStyle}
              className="border text-center px-2 py-2 font-bold text-green-600 shadow-xl shadow-gray-400"
            >
              2
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Delivery and Pickup</span>
              <i>Lorem ipsum dolor sit amet.</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePrompt;
