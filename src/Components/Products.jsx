import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

function Products() {
  // http://localhost:3000/api/product

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product?sort=name")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      });
  }, []);

  return (
    <div>
      <h1>Products !!</h1>
      <div className="grid grid-cols-3 gap-4 my-8 mx-8">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
