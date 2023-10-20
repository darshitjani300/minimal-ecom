import React from "react";

const Hero = () => {
  return (
    <div className="px-5 xl:w-[75%] xl:mx-auto my-4">
      <div className="grid min-h-[80vh] grid-cols-12 gap-3">
        <div className="col-span-6 h-[300px]  md:h-full">
          <img
            src="images/hero/hero1.jpg"
            className="object-cover h-full w-full  object-center"
            alt="hero1"
          />
        </div>
        <div className="md:col-span-3 h-[300px] col-span-6 md:h-full">
          <img
            src="images/hero/hero2.jpg"
            className="object-cover  h-full w-full"
            alt="hero1"
          />
        </div>
        <div className="md:col-span-3 h-[300px]  col-span-12 grid grid-cols-12 md:grid-cols-none gap-3 md:grid-rows-2 md:h-full">
          <div className="md:row-span-1 col-span-6">
            <img
              src="images/hero/hero3.jpg"
              className="object-cover h-full w-full"
              alt="hero1"
            />
          </div>
          <div className="md:row-span-1 col-span-6">
            <img
              src="images/hero/hero4.jpg"
              className="object-cover  h-full w-full"
              alt="hero1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
