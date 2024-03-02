import React, { useState } from "react";
import food from "../assets/Food.json";
import Product from "./Product";

const Home = ({ cart, setCart }) => {
  const [products] = useState(food);

  return (
    <div className="container">
      {products.map((product, index) => (
        <Product key={index} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;
