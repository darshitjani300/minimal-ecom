import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {!open && (
        <div className="shadow-md">
          <div className="px-5 py-4 md:py-3 lg:w-[95%] xl:w-[90%] mx-auto">
            <div className="flex justify-between items-center">
              <div className="logo">
                <img src="images/logo/logo.png" className="w-20" alt="logo" />
              </div>
              <div className="sm:flex sm:items-center sm:gap-5">
                <div className="hidden sm:flex sm:gap-5 sm:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] font-medium">
                  <a href="">CATEGORIES</a>
                  <a href="">PRODUCT PAGE</a>
                </div>
                <div className="flex items-center gap-7">
                  <motion.div>
                    <AiOutlineShoppingCart className="text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.9rem]" />
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <AiOutlineMenu
                      onClick={handleClick}
                      className="text-[1.5rem] sm:hidden"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div className="h-screen w-screen bg-white">
          <div className="w-full pt-10 pr-5 flex justify-end">
            <motion.div whileTap={{ scale: 0.8 }}>
              <AiOutlineClose className="text-[2rem]" onClick={handleClick} />
            </motion.div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center font-medium mt-10">
            <a href="" className="text-[1.2rem] tracking-wide">
              Categories
            </a>
            <a href="" className="text-[1.2rem] tracking-wide">
              Product Page
            </a>
            <a href="" className="text-[1.2rem] tracking-wide">
              Cart
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
