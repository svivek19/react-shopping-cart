import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-800 flex p-4 font-bold text-lg justify-between text-white items-center">
      <div>
        <h3>Shopping Cart</h3>
      </div>
      <ul className="flex gap-6 mx-4">
        <li className="hover:text-amber-400">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-amber-400">
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
