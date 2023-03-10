import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContexts } from "../Contexts/CartContexts";

const CartItem = (props) => {
  const { id, title, image, price, amount } = props.item;
  const ctxt = useContext(CartContexts);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="flex gap-x-3 h-[20px] text-sm">
              <div className="flex flex-1 max-w-[50px] items-center h-full border text-primary font-medium">
                <div
                  onClick={() => ctxt.decreaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer "
                >
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                <div
                  onClick={() => ctxt.increseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer "
                >
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex-1 flex items-center justify-around w-16 ">
                $ {price}
              </div>
              <div className="flex-1 flex justify-end items-center text-primary font-medium w-10">{`$ ${parseFloat(
                price * amount
              ).toFixed(2)}`}</div>
              <div
                onClick={() => ctxt.removeFromCart(id)}
                className="text-xl cursor-pointer"
              >
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
