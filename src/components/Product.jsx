import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-11/12 md:w-1/2 mx-auto p-4">
      <div className="bg-gray-200 shadow-md rounded-md p-4">
        <div className="w-full h-3/4 mx-auto">
          <img
            src={product.image}
            alt={`${product.name} - Image`}
            className="w-full h-48 object-contain mb-4"
          />
        </div>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <h2 className="text-xl font-semibold text-gray-600">
          ₹{product.price}
        </h2>
        <button className="bg-slate-800 w-full text-white px-4 font-semibold py-2 rounded-md mt-4 hover:bg-slate-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
