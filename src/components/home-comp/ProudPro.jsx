import React from "react";
import product from "../../Products/product";
import { motion } from "framer-motion";

const ProudPro = () => {
  return (
    <div className="px-5 xl:w-[75%] xl:mx-auto my-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-[1rem] font-semibold lg:text-[1.4rem]">
          Products we are proud of
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {product.map((x) => {
            return (
              <div key={x.id} className="border-[2px] p-4">
                <div>
                  <img src={x.img} alt="products" />
                  <p className="pt-5 text-[14px] sm:text-[1rem] lg:text-[1.1rem]">
                    {x.title}
                  </p>
                  <p className="pt-1 text-[15px] lg:text-[1.2rem] font-semibold">
                    {x.price}$
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className=" mt-1 p-2 border-[2px] text-[1.1rem] font-semibold border-black"
                  >
                    Add To Cart
                  </motion.button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProudPro;
