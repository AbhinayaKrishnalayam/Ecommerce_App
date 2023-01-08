import React, { useContext } from "react";

import { ProductContext } from "../Contexts/ProductContext";

import Products from "../Components/Products";
import Hero from "../Components/Hero";

const Home = () => {
  const productsctxt = useContext(ProductContext);
  let filteredProducts=[];

  if (productsctxt.products.length > 0) {
    filteredProducts = productsctxt.products.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );
  }

  return (
    <div>
      <Hero />
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:flex-cols-5 gap-[5px] max-w-sm mx-auto md:max-w-none ">
            {filteredProducts.length > 0 &&
              filteredProducts.map((products) => {
                return <Products product={products} key={products.id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
