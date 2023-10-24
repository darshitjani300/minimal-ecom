import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeCart, addQuantity, decQuantity } from "../../redux/CartSlice";
import { motion } from "framer-motion";

const Cart = () => {
  let cart = useSelector((state) => state.cart);
  console.log(cart);
  let dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-[#F1F3F6]">
      <div className="bg-white w-[75%] mx-auto ">
        <NavLink to="/">
          <h1 className="text-2xl text-center p-2 border-[1px] shadow-sm">
            Cart
          </h1>
        </NavLink>
        <div className="flex gap-4">
          <div
            className="flex-grow flex flex-col gap-5
           p-3"
          >
            {cart.map((x) => {
              return (
                <div key={x.id} className="flex justify-between items-center">
                  <div className="flex flex-col gap-3 items-center">
                    <img src={x.img} className="h-[200px]" alt="" />
                    <div className="flex items-center gap-5">
                      <button
                        onClick={() => {
                          dispatch(decQuantity(x.id));
                        }}
                        className="border px-2 text-xl"
                      >
                        -
                      </button>
                      <h1 className="border px-3 text-xl">{x.quantity}</h1>
                      <button
                        onClick={() => dispatch(addQuantity(x.id))}
                        className="border px-2 text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col text-center gap-3">
                    <h1>{x.title}</h1>
                    <h1>${x.quantity * x.price}</h1>
                    <button
                      onClick={() => dispatch(removeCart(x.id))}
                      className="border-[2px] p-1 text-l font-medium"
                    >
                      REMOVE
                    </button>
                  </div>
                  <div className="">Delivery by Sun Nov 5 </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 p-5 min-w-[300px] border h-full">
            <div className="flex justify-between">
              <h1>Price ( items)</h1>
              <p>${cart.reduce((t, x) => (t += x.price * x.quantity), 0)}</p>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <h1>Discount</h1>
              <p className="text-green-500">-$4000</p>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <h1>Delivery Charges</h1>
              <span className="text-green-500">Free</span>
            </div>
            <div className="border-[1px] my-2"></div>
            <div className="flex justify-between gap-5 items-center">
              <h1>Total Amount</h1>
              <h1>
                ${cart.reduce((t, x) => (t += (x.price * x.quantity) ), 0)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
{
  /* 

}

{
  /* */
}
