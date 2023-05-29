import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-3 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-brand text-4xl font-bold cursor-pointer">
          MOVIELAB🧪
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className=" text-white font-bold pr-4 text-lg">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-brand-200 px-6 py-4 rounded text-secondary-500 font-bold cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
