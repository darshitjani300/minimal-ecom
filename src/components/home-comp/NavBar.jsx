import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  let cart = useSelector((state) => state.cart);

  return (
    <>
      {!open && (
        <div className="shadow-md sticky top-0 left-0 bg-white">
          <div className="px-5 py-4 md:py-3 lg:w-[95%] xl:w-[75%] mx-auto">
            <div className="flex justify-between items-center">
              <NavLink to="/">
                <div className="logo">
                  <img src="images/logo/logo.png" className="w-20" alt="logo" />
                </div>
              </NavLink>
              <div className="sm:flex sm:items-center sm:gap-5">
                <div className="hidden sm:flex sm:gap-5 sm:text-[1.1rem] lg:gap-7 lg:text-[1.1rem] 2xl:text-[1.1rem]">
                  <a href="">CATEGORIES</a>
                  <a href="">PRODUCT PAGE</a>
                </div>
                <div className="flex items-center gap-7">
                  <NavLink to="cart">
                    <motion.div className="relative" whileTap={{ scale: 0.8 }}>
                      <AiOutlineShoppingCart className="text-[1.7rem] cursor-pointer sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.9rem]" />
                      <p className="absolute right-0 top-[-50%] translate-x-[50%] bg-red-600 px-2 rounded-[50%] text-white font-semibold">
                        {cart.length < 1 ? "" : cart.length}
                      </p>
                    </motion.div>
                  </NavLink>
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
