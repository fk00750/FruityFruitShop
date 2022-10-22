import React from "react";
import { useState } from "react";
import {
  GiThreeLeaves,
  GiFruitBowl,
  GiHorizonRoad,
  MdOutlineClose,
  FaLocationArrow,
  FaCity,
} from "../Collection/ReactIconsCollection";

function SideBar({ fruitFarm, flyToFarm, setPopupInfo }) {
  let [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const handleClick = (store) => {
    flyToFarm(store.geometry.coordinates);
    setPopupInfo(store);
    setIsSideBarVisible(false);
  };

  return !isSideBarVisible ? (
    <FaLocationArrow
      className="absolute top-10 xl:top-16  left-5 hover:rotate-45 active:rotate-45 w-8 h-8"
      onClick={() => {
        setIsSideBarVisible(true);
      }}
    />
  ) : (
    <div className="absolute w-full lg:w-1/4 bg-gray-50 h-full top-0 left-0 overflow-auto border border-r-gray-400">
      <MdOutlineClose
        className="absolute right-2 top-2 w-8 h-8"
        onClick={() => {
          setIsSideBarVisible(false);
        }}
      />
      <div className="heading">
        <h1 className="text-2xl p-4 font-serif">
          <GiThreeLeaves /> Your Fruits Location
        </h1>
      </div>
      <div id="listing">
        {fruitFarm.map((farm, index) => {
          return (
            <div
              className="rounded-md shadow-lg  justify-center mx-6 my-4 pl-2 py-2 space-x-4  bg-[url('src/Map/images/BgFruitSets.png')] bg-no-repeat bg-center bg-cover pt-16 pb-16"
              key={index}
            >
              <div>
                <div className="flex items-center space-x-2">
                  <FaCity fontSize="24px" />
                  <h1
                    className="text-2xl xl:text-3xl cursor-pointer"
                    onClick={() => handleClick(farm)}
                  >
                    {farm.properties.city}
                  </h1>
                </div>
                <div className="flex items-center space-x-2">
                  <GiFruitBowl fontSize="24px" />
                  <span className="text-xl">{farm.properties.name}</span>
                </div>
                <div className="flex  items-center space-x-2">
                  <GiHorizonRoad fontSize="24px" />
                  <span className="text-xl">{farm.properties.address}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
