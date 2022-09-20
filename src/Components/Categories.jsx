import React from "react";
import { useEffect } from "react";

function Categories(props) {
  const { image, name, price, col } = props.fruit;

  const bgStyle = {
    backgroundImage: `url("${image}")`,
    paddingLeft: "0.5rem",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    textAlign: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/product?name=apple`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div style={bgStyle}>
        <h1 className="text-2xl font-bold ">{name}</h1>
        <h3 className="text-sm pb-8">
          Best Price <span>${price}</span>
        </h3>
        <button className="bg-black rounded-md px-2 ">View all</button>
      </div>
    </>
  );
}

export default Categories;
