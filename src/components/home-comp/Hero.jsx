import React from "react";

const Hero = () => {
  return (
    <div className="px-5 xl:w-[75%] xl:mx-auto my-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        <div className="h-[200px] lg:h-full lg:w-full">
          <img
            src="images/hero/hero1.jpg"
            className="h-full lg:h-auto lg:w-full object-none"
            alt="hero1"
          />
        </div>
        <div className="h-[200px] lg:h-auto ">
          <img
            src="images/hero/hero2.jpg"
            className="h-full lg:h-auto w-auto object-cover"
            alt="hero1"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="h-[200px] lg:h-auto">
            <img
              src="images/hero/hero3.jpg"
              className="h-full lg:h-auto object-cover"
              alt="hero1"
            />
          </div>
          <div className="h-[200px] lg:h-auto">
            <img
              src="images/hero/hero4.jpg"
              className="h-full lg:h-auto object-cover"
              alt="hero1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
