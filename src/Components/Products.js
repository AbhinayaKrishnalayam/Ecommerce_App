import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContexts } from "../Contexts/CartContexts";

const Products = (props) => {
  const { addToCart } = useContext(CartContexts);
  const { id, image, category, title, price } = props.product;

  return (
    <div>
      <div className="border h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(props.product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 text-primary drop-shadow-xl bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`Products/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gary-500">{category}</div>
        <Link to={`Products/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default Products;
