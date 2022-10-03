import React from "react";
import { useState } from "react";
import {
  GiThreeLeaves,
  GiFruitTree,
  GiFruitBowl,
  GiHorizonRoad,
  GiHamburgerMenu,
} from "react-icons/gi";

import {
  MdOutlineClose
} from 'react-icons/md'

function SideBar({ stores, flyToStore, setPopupInfo }) {
  let [isSideBarVisible , setIsSideBarVisible] = useState(false)

  const handleClick = (store) => {
    flyToStore(store.geometry.coordinates);
    setPopupInfo(store);
    setIsSideBarVisible(false)
  };


  return !isSideBarVisible ? (
    <GiHamburgerMenu className="absolute top-5 left-5 border border-black w-8 h-8" onClick={() => {
      setIsSideBarVisible(true)
    }}/>
  ) : (
    <div className="absolute w-full lg:w-1/4 bg-white h-full top-0 left-0 overflow-hidden border border-r-gray-400">
      <MdOutlineClose className="absolute right-2 top-2 w-8 h-8" onClick={() => {
        setIsSideBarVisible(false)
      }}/>
      <div className="heading">
        <h1 className="text-2xl p-4 ">
          <GiThreeLeaves /> Your Fruits Location
        </h1>
      </div>
      <div id="listing">
        {stores.map((store, index) => {
          return (
            <div className="flex mx-2 my-4 border border-black px-2 py-2 space-x-4" key={index}>
              <div className="border border-black w-24 h-24"></div>
              <div>
                <h1
                  className="text-2xl cursor-pointer"
                  onClick={() => handleClick(store)}
                >
                  {store.properties.city}
                </h1>
                <div>
                  <GiFruitBowl />
                  <span>{store.properties.item}</span>
                </div>
                <div>
                  <GiHorizonRoad />
                  <span>{store.properties.address}</span>
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
