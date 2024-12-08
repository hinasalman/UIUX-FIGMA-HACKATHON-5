import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckFill } from "react-icons/ri";

const Delivery = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="sm:w-full lg:w-[70%] flex flex-wrap gap-y-8 sm:justify-center lg:justify-evenly">
        {/* Box 1 */}
        <div className="w-[90%] sm:w-[260px] h-auto flex justify-center items-center flex-col gap-y-3 text-center mx-auto">
          <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <TbTruckDelivery className="text-3xl text-slate-400" />
          </div>
          <div>
            <h1 className="font-bold">FREE AND FAST DELIVERY</h1>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-[90%] sm:w-[260px] h-auto flex justify-center items-center flex-col gap-y-3 text-center mx-auto">
          <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <TfiHeadphoneAlt className="text-3xl text-slate-400" />
          </div>
          <div>
            <h1 className="font-bold">24/7 CUSTOMER SERVICE</h1>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-[90%] sm:w-[260px] h-auto flex justify-center items-center flex-col gap-y-3 text-center mx-auto">
          <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
            <RiShieldCheckFill className="text-3xl text-slate-400" />
          </div>
          <div>
            <h1 className="font-bold">MONEY BACK GUARANTEE</h1>
            <p className="text-sm">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
