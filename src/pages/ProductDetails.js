import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import { CartContexts } from "../Contexts/CartContexts";

import { ProductContext } from "../Contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContexts);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  
  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading.....
      </div>
    );
  }
  const { title, price, description, image } = product;
  return (
    <div className="pt-32 pb-12 lg:py-32 h-full flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 bg-purple-200">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {title}
              <div className="text-xl text-red-500 font-medium mb-6">
                {price}
              </div>
            </h1>
          </div>
          <p className="mb-8">{description}</p>
          <button
            onClick={() => addToCart(product, product.id)}
            className="bg-black py-4 px-8 text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
