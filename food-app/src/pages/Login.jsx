import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assests/movieLab.png";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={bgImage}
          alt="Sign Up"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full py-24 px-4 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/80 text-white rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded-lg"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded-lg"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-brand py-3 my-6 rounded-lg font-bold ">
                  Log In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-700">
                  <p className="font-bold">
                    <input className="mr-2 " type="checkbox" />
                    Remember me
                  </p>
                  <p className="font-bold">Need help singing in?</p>
                </div>
                <p className="py-10 font-bold">
                  <span className="text-gray-700">New user?</span>{" "}
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
