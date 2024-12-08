import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-full">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-4 md:px-8 w-full">
        <div className="text-center flex-1">
          Summer sale for all swim suits and free express delivery - 50% OFF!
          <a href="a" className="underline hover:text-slate-300">
            {" "}
            Shop Now{" "}
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="text-white text-sm font-normal leading-[21px]">
            English
          </div>
          <RiArrowDropDownLine className="text-white text-3xl" />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-wrap items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-black px-4 md:px-20">
          Exclusive
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-slate-600 hover:text-black">
            Home
          </a>
          <a href="#" className="text-slate-600 hover:text-black">
            Contact
          </a>
          <a href="#" className="text-slate-600 hover:text-black">
            About
          </a>
          <a href="#" className="text-slate-600 hover:text-black">
            Signup
          </a>
        </nav>

        {/* Icons and Search */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Search Input */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-slate-100 outline-none text-sm"
            />
            <CiSearch />
          </div>

          {/* Icons */}
          <CiHeart className="text-xl sm:text-2xl" />
          <FaShoppingCart className="text-xl sm:text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
