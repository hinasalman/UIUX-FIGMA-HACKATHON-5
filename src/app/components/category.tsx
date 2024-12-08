import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

export default function Category() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="sm:w-full md:w-[80%] pb-10 px-4"> {/* Padding for smaller screens */}
        {/* Header Section */}
        <div className="flex flex-col sm:pl-[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-l-4 border-red-500 pl-3 ml-1">
            Categories
          </h3>
          <div className="flex">
            <h1 className="text-slate-800 font-bold sm:text-lg md:text-3xl lg:text-3xl pt-4">
              Browse By Category
            </h1>
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-5">
          {/* Box 1 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 w-full h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer transition-all duration-300">
            <FaMobileAlt className="text-4xl md:text-6xl font-bold" />
            <p className="font-normal">Phones</p>
          </div>
          {/* Box 2 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 w-full h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer transition-all duration-300">
            <HiOutlineDesktopComputer className="text-4xl md:text-6xl font-bold" />
            <p className="font-normal">Computer</p>
          </div>
          {/* Box 3 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 w-full h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer transition-all duration-300">
            <BsSmartwatch className="text-4xl md:text-6xl font-bold" />
            <p className="font-normal">Smartwatch</p>
          </div>
          {/* Box 4 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 w-full h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer transition-all duration-300">
            <FaCamera className="text-4xl md:text-6xl font-bold" />
            <p className="font-normal">Camera</p>
          </div>
          {/* Box 5 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 w-full h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer transition-all duration-300">
            <FaHeadphones className="text-4xl md:text-6xl font-bold" />
            <p className="font-normal">Headphone</p>
          </div>
          {/* Box 6 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 w-full h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer transition-all duration-300">
            <IoGameController className="text-4xl md:text-6xl font-bold" />
            <p className="font-normal">Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
