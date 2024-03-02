import React from "react";

const Cart = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold my-5">Cart Products</h1>
      <div className="w-11/12 mx-auto mb-4 bg-gray-100 p-5 rounded flex justify-center">
        <div>
          <img
            src="https://www.onestalove.in/wp-content/uploads/2021/08/Home-Banner-Pizza.png"
            alt="Image"
            width={100}
          />
        </div>
        <div className="items-center mx-8 my-5">
          <h3 className="text-2xl">Product Name</h3>
          <p className="text-xl">$36 </p>
        </div>
      </div>
      <h1 className="mx-5 text-2xl my-10">
        Total Amount:{" "}
        <span className="font-bold mx-2 text-red-500">Rs: 230</span>
      </h1>
    </>
  );
};

export default Cart;
