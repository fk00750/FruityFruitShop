import React, { useState } from "react";
import {
  FaFilter,
  FaSearchLocation,
  AiOutlineClose,
  BiSort,
} from "../Collection/ReactIconsCollection";
import { CartState } from "../Context/CartContext";

function Filters() {
  const {
    fruitDispatch,
    fruitState: { sort, byRating, byVitaminC, byVitaminB6, byPotassium },
  } = CartState();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      {!showFilter ? (
        <div className="h-fit mb-8 w-fit mx-4 my-2">
          <div className="flex">
            <FaFilter fontSize="24px" />
            <button
              onClick={() => {
                setShowFilter(true);
              }}
              className="text-xl"
            >
              Filters
            </button>
          </div>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-md h-fit py-4 w-full xl:w-1/4">
          <div className="flex mx-2 my-2 justify-between">
            <div className="flex">
              <FaFilter fontSize="24px" />
              <span className="text-xl">Filters</span>
            </div>
            <AiOutlineClose
              onClick={() => {
                setShowFilter(false);
              }}
              fontSize="24px"
              cursor="pointer"
            />
          </div>
          {/* Sort By Price */}
          <div className="flex flex-col mx-4 my-8 space-y-4">
            <div className="flex">
              <h1>Sort By Price</h1>
              <BiSort fontSize="24px" />
            </div>
            <div className="mx-4">
              <div className="space-x-2">
                <input
                  type="radio"
                  name="default-radio"
                  onChange={() => {
                    fruitDispatch({
                      type: "SORT_BY_PRICE",
                      payload: "LowToHigh",
                    });
                  }}
                />
                <label htmlFor="priceAscending">Ascending</label>
              </div>
              <div className="space-x-2">
                <input
                  type="radio"
                  name="default-radio"
                  onChange={() => {
                    fruitDispatch({
                      type: "SORT_BY_PRICE",
                      payload: "HighToLow",
                    });
                  }}
                />
                <label htmlFor="priceDescending">Descending</label>
              </div>
            </div>
          </div>
          {/* Sort By Location */}
          <div className="flex flex-col mx-4 my-8 space-y-4">
            <div className="flex space-x-2">
              <h1>Sort By Location</h1>
              <FaSearchLocation fontSize="24px" />
            </div>
            <div className="flex space-x-2 mx-4">
              <select name="location" id="location">
                <option value="Location">Select Location</option>
                <option value="Allahabad">Allahabad</option>
                <option value="Nashik">Nashik</option>
                <option value="Gir">Gir</option>
                <option value="Tezpur">Tezpur</option>
              </select>
            </div>
          </div>
          {/* Sort by minerals in fruits */}
          <div className="mx-4 my-8">
            <div>
              <h1>Others</h1>
            </div>
            <div className="mx-4">
              <ul>
                <li className="space-x-2">
                  <input
                    type="Checkbox"
                    name="minerals"
                    checked={byVitaminC}
                    onChange={() => {
                      fruitDispatch({
                        type: "VITAMIN_C",
                      });
                    }}
                  />
                  <label htmlFor="priceAscending">Rich in VitaminC</label>
                </li>
                <li className="space-x-2">
                  <input
                    type="Checkbox"
                    name="minerals"
                    checked={byVitaminB6}
                    onChange={() => {
                      fruitDispatch({
                        type: "VITAMIN_B6",
                      });
                    }}
                  />
                  <label htmlFor="priceAscending">Rich in VitaminB6</label>
                </li>
                <li className="space-x-2">
                  <input
                    type="Checkbox"
                    name="minerals"
                    checked={byPotassium}
                    onChange={() => {
                      fruitDispatch({
                        type: "POTASSIUM",
                      });
                    }}
                  />
                  <label htmlFor="priceAscending">Rich in Potassium</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-black text-center w-fit mx-auto px-2 rounded-md">
            <button
              onClick={() => {
                fruitDispatch({
                  type: "CLEAR_FILTERS",
                });
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Filters;
