import React, { useContext, useState, useEffect } from "react";

import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContexts } from "../Contexts/CartContexts";

import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const cartCtxt = useContext(CartContexts);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <div
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all `}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}></Link>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative pl-5"
      >
        <BsBag className="text-2xl " />
        <div className="bg-red-500 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center absolute -bottom-1 left-6 ">
          {cartCtxt.itemAmount}
        </div>
      </div>
    </div>
  );
};

export default Header;
