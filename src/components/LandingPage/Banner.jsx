import React from "react";

function Banner() {
  return (
    <div className="w-full py-4 md:py-14 px-3 sm:px-10 lg:px-20">
      <div className=" text-gray-900 leading-snug font-light sm:font-extralight">
        <p className=" banner_text mb-0 md:mb-4 text-5xl sm:text-5xl md:text-7xl">
          Driving Ecommerce 
          <span className="md:mt-4 rounded-md block">Success with AI</span>
        </p>
        <p className="text-xl pr-3 sm:text-3xl md:text-4xl font-semibold mt-6">Increase Revenue, ROAS and Lower CAC.</p>
      </div>
    </div>
  );
}

export default Banner;
