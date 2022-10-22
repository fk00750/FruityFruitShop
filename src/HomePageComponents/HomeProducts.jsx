import React from "react";
import { MdStarRate } from "react-icons/md";

function HomeProducts() {
  return (
    <div>
      <div className="container mx-auto my-12  sm:flex">
        <div className="flex flex-col space-x-4 mx-4 text-center items-center justify-between  my-2 py-8 hover:bg-white hover:shadow-md hover:rounded-md  xl:w-1/3">
          <img className="" src="/images/leechiView.png" alt="" />
          <b className="font-semibold text-xs xl:text-xl">Shahi Litchi</b>
          <div className="flex">
            {[...Array(5)].map((item,index) => {
              return <MdStarRate key={index} color="#FFDF00" />;
            })}
          </div>
          <span className="text-xl font-extrabold text-green-600">$55 kg</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            rem officiis?
          </p>
          <button className="btn px-5 w-fit text-center my-2 h-8 rounded-md bg-green-600 mx-2">
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col space-x-4 mx-4 text-center items-center justify-between  my-2 py-8 hover:bg-white hover:shadow-md hover:rounded-md xl:w-1/3">
          <img className="" src="/images/grapeView.png" alt="" />
          <b className="font-semibold text-xs xl:text-xl">Nashik Grapes</b>
          <div className="flex">
            {[...Array(5)].map((item,index) => {
              return <MdStarRate key={index} color="#FFDF00" />;
            })}
          </div>
          <span className="text-xl font-extrabold text-green-600">$55 kg</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            rem officiis?
          </p>
          <button className="btn px-5 w-fit text-center my-2 h-8 rounded-md bg-green-600 mx-2">
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col space-x-4 mx-4 text-center items-center justify-between  my-2 py-8 hover:bg-white hover:shadow-md hover:rounded-md  xl:w-1/3">
          <img className="" src="/images/mangoView.png" alt="" />
          <b className="font-semibold text-xs xl:text-xl">Gir Kesar</b>
          <div className="flex">
            {[...Array(5)].map((item,index) => {
              return <MdStarRate key={index} color="#FFDF00" />;
            })}
          </div>
          <span className="text-xl font-extrabold text-green-600">$55 kg</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
            rem officiis?
          </p>
          <button className="btn px-5 w-fit text-center my-2 h-8 rounded-md bg-green-600 mx-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
