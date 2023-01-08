import React from "react";

import image from "../Components/img/fashion-online-shopping-sites.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 px-20">
      <div className="container mx-auto flex justify-around h-full ">
        <div className="flex flex-col">
          <div className="font-semibold flex items-center">
            <div className="w-10 h-[2px] bg-red-500 mr-3 "></div>New Tread
          </div>
          <h1 className="text-[60px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-black"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
