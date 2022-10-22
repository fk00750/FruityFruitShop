import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Filters from "../Components/Filters";
import Fruit from "../Components/Fruit";
import { CartState } from "../Context/CartContext";

function Fruits() {
  const {
    fruitState: { sort, byRating, byVitaminC, byVitaminB6, byPotassium },
  } = CartState();

  const [fruits, setFruits] = useState([]);

  // fetch fruits data
  useEffect(() => {
    const fetchFruitsDATA = async function () {
      const response = await fetch(
        "https://fruity-fruit-shop.herokuapp.com/api/product"
      );
      // const response = await fetch(
      //   "https://fruit-shop-api-22.herokuapp.com/api/product"
      // );
      const data = await response.json();

      if (response.ok) {
        setFruits(data);
      }
    };

    fetchFruitsDATA();
  }, []);

  const transformFruitsProducts = () => {
    // deep clone of fruits object
    const clone = JSON.parse(JSON.stringify(fruits));
    let sortedFruitProducts = clone;

    // sort the fruits in ascending & descending Order
    if (sort) {
      sortedFruitProducts = sortedFruitProducts.sort((fruitX, fruitY) => {
        return sort === "LowToHigh"
          ? fruitX.price - fruitY.price
          : fruitY.price - fruitX.price;
      });
    }

    // sort fruits by vitamin C presence (Higher to Lower)
    if (byVitaminC) {
      sortedFruitProducts = sortedFruitProducts.sort((fruitX, fruitY) => {
        return (
          Number(fruitY.nutrition_facts[0].vitaminC.split("%")[0]) -
          Number(fruitX.nutrition_facts[0].vitaminC.split("%")[0])
        );
      });
    }

    // sort fruits by vitamin B6 presence (Higher to Lower)
    if (byVitaminB6) {
      sortedFruitProducts = sortedFruitProducts.sort((fruitX, fruitY) => {
        return (
          Number(fruitY.nutrition_facts[0].vitaminB6.split("%")[0]) -
          Number(fruitX.nutrition_facts[0].vitaminB6.split("%")[0])
        );
      });
    }

    // sort fruits by Potassium presence (Higher to Lower)
    if (byPotassium) {
      sortedFruitProducts = sortedFruitProducts.sort((fruitX, fruitY) => {
        return (
          Number(fruitY.nutrition_facts[0].potassium.split("%")[0]) -
          Number(fruitX.nutrition_facts[0].potassium.split("%")[0])
        );
      });
    }

    return sortedFruitProducts;
  };

  return (
    <div className="flex flex-col xl:flex-row bg-gray-50">
      <Filters />
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 gap-4">
        {transformFruitsProducts().map((fruit) => (
          <Fruit key={fruit._id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
}

export default Fruits;
