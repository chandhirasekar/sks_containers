import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbars = [
    { title: "Home", active: true, route: "/" },
    { title: "About", active: true, route: "#about" },
    { title: "Product", active: true, route: "#product" },
    { title: "Gallery", active: true, route: "gallery" },
  ];
  return (
    <div className="fixed top-0 h-[100px] w-[100%] bg-white shadow-[0_2px_4px_0_rgba(0,0,0,.2)]">
      <div className="flex h-[100px] w-[90%]  mx-auto items-center justify-between">
        <div className="h-[200px] w-[100px] flex items-center justify-center">
          <img
            src="/sks-logo.jpg"
            alt="skslog"
            className="object-cover h-[100px]"
          />
        </div>
        <navbar className="lg:!flex xl:!flex gap-[20px] sm:hidden hidden">
          {navbars &&
            navbars.length != 0 &&
            navbars.map((item, i) => {
              return (
                <Link to={item.route} className="text-[18px] font-semibold">
                  {item.title}
                </Link>
              );
            })}
        </navbar>
        <button className=" hidden sm:hidden md:!block text-[18px] border px-[15px] py-[10px] rounded-[5px] bg-[#b28724] text-white font-medium">
          Contact us
        </button>
        <div className="h-[30px] lg:!hidden">
          <img src="/menu.png" className="h-full" alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
