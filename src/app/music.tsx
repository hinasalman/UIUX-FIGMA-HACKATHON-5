import React from 'react';

export default function Music() {
  return (
    <main className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="w-full max-w-7xl p-5 flex flex-col md:flex-row items-center bg-black gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-green-500 font-bold">Categories</h3>
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl mt-4">
            Enhance Your Music Experience
          </h1>

          {/* Timer */}
          <div className="flex justify-center md:justify-start mt-5 gap-4">
            {[
              { label: 'Hours', value: '23' },
              { label: 'Days', value: '05' },
              { label: 'Minutes', value: '59' },
              { label: 'Seconds', value: '35' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center"
              >
                <span className="font-bold text-lg">{item.value}</span>
                <span className="text-xs md:text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-green-500 hover:bg-green-800 text-white font-bold rounded-sm px-6 py-2 mt-6">
            Shop Now!
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="../music.png"
            alt="music speaker"
            className="w-full h-auto shadow-md rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
