import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ViewCart from "./components/ViewCart";
import { cartContext } from "./components/cartContext";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
  );
};

export default App;
