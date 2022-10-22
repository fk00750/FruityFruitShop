import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div className="background_img container mx-auto flex items-center justify-between xl:justify-around min-w-full">
        <div className="w-2/3">
          <span className="font-semibold text-sm xl:text-lg">
            FRESH FRUITS FROM ALL OVER INDIA
          </span>
          <h1 className="text-5xl font-bold text-green-600 xl:text-8xl">
            Eat as
          </h1>
          <h1 className="text-5xl font-bold text-green-600 xl:text-8xl">
            you want
          </h1>
          <p className="text-sm text-gray-700 xl:text-lg pt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className="flex items-center flex-wrap">
            <Link to="fruits">
              <button className="px-5 btn text-center font-bold text-white my-2 h-8 xl:h-10 rounded-md bg-green-600 mx-2 hover:text-green-600 hover:bg-white hover:border hover:border-green-400 hover:font-normal">
                Add to Cart
              </button>
            </Link>
            <button className="px-5 btn text-center font-bold text-white my-2 h-8 xl:h-10 rounded-md bg-green-600 mx-2 hover:text-green-600 hover:bg-white hover:border hover:border-green-400 hover:font-normal">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
