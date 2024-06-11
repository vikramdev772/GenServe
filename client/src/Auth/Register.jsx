import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../screens/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="max-w-md w-full relative flex flex-col p-10 rounded-md text-white bg-gray-800">
          <div className="text-2xl font-bold mb-2 text-white text-center">
            Join <span className="text-blue-400">Data Care</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-gray-400">
            Create your account
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">
              <label
                htmlFor="fullname"
                className="block text-gray-400 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                className="rounded border border-gray-600 text-sm w-full font-normal leading-[18px] text-white bg-gray-700 tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-500 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="email"
                className="block text-gray-400 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="rounded border border-gray-600 text-sm w-full font-normal leading-[18px] text-white bg-gray-700 tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-500 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="password"
                className="block text-gray-400 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded border border-gray-600 text-sm w-full font-normal leading-[18px] text-white bg-gray-700 tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-500 outline-0"
              />
            </div>

            <button
              type="submit"
              className="text-lg px-8 py-2 border-0 shadow-md bg-blue-500 text-white rounded-md transition duration-300 transform-gpu hover:bg-gradient-to-r from-blue-400 to-blue-600 active:translate-y-1"
            >
              Sign Up
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem] text-gray-400">
            Already have an account?
            <Link className="text-sm text-blue-400" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
