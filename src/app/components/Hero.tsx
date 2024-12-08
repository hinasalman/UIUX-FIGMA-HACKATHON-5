import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center items-center py-10 px-4"> {/* Added padding for smaller screens */}
      <div className="max-w-[1440px] flex flex-wrap gap-6 justify-center">
        {/* Left Sidebar */}
        <div className="border-r-2 border-neutral-200 p-4 md:p-10 hidden md:block">
          <ul className="space-y-4">
            {[
              "Women's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoors",
              "Beauty & Makeup",
              "Kids' Fashion",
              "Travel & Lifestyle",
              "Baby's & Toys",
              "Groceries & Pets",
              "Sports & Outdoors",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150"
              >
                <span>{item}</span>
                {index < 2 && <IoIosArrowForward className="text-lg ml-2" />}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row items-center bg-black rounded-lg p-6 md:px-10">
          {/* Text Section */}
          <div className="text-white flex flex-col justify-center space-y-3 md:space-y-5 sm:w-full md:w-[300px] lg:w-[300px]">
            <div className="flex items-center gap-2">
              <FaApple className="text-2xl md:text-4xl" />
              <span className="text-sm md:text-base font-semibold">
                iPhone 14 Series
              </span>
            </div>
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Up to 10%
            </h1>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Off Voucher
            </h1>
            <Link
              href={"#products"}
              className="underline underline-offset-4 hover:font-semibold flex items-center gap-2"
            >
              Shop Now
              <FaArrowRight />
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-6 md:mt-0 ml-auto">
            <img
              src="../iphone.png"
              alt="iphone"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
