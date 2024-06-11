import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Join <span className="text-[#7747ff]">Data Care</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Create your account
        </div>
        <form className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="fullname"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Sign Up
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Already have an account?{' '}
          <Link className="text-sm text-[#7747ff]" to="/login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
