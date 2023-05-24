import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-3 z-[100] absolute w-full">
      <h1 className="text-brand text-4xl font-bold cursor-pointer">MOVIELAB</h1>
      <div>
        <button className=" text-secondary-500 font-bold pr-4">Sign In</button>
        <button className="bg-brand-200 px-6 py-4 rounded text-secondary-500 font-bold cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
