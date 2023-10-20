import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeCart } from "../../redux/CartSlice";
import { motion } from "framer-motion";

const Cart = () => {
  let cart = useSelector((state) => state.cart);
  console.log(cart);
  let dispatch = useDispatch()
  return (
    <div className="h-screen w-screen bg-white">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      {cart.map((x) => {
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
                onClick={() => dispatch(removeCart(x.id))}
              >
                Remove
              </motion.button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
