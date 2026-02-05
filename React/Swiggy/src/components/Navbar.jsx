import React from "react";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      icon: "fi fi-rr-shopping-bag",
      label: "Swiggy Corporate",
    },
    {
      id: 2,
      icon: "fi fi-rr-search",
      label: "Search",
    },
    {
      id: 3,
      icon: "fi fi-rr-badge-percent",
      label: "Offers",
    },
    {
      id: 4,
      icon: "fi fi-sr-life-ring",
      label: "Help",
    },
    {
      id: 5,
      icon: "fi fi-rr-user",
      label: "Sign In",
    },
    {
      id: 6,
      icon: "fi fi-rr-shopping-cart-add",
      label: "Cart",
    },
  ];

  return (
    <>
      <div className="w-full shadow-md h-24 flex justify-center items-center">
        <div className=" w-[70%] flex justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                className="w-24"
                src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                alt=""
              />
            </Link>
            <div className="flex items-center gap-2">
              <p className="font-bold border-b-2  border-black ">Other</p>
              <i className="fi fi-rr-angle-small-down mt-1 text-2xl text-orange-500"></i>
            </div>
          </div>

          <div className="flex items-center gap-14">
            {navItems.map((item) => (
              <div key={item.id} className="flex items-center gap-2 ">
                <i className={"mt-1 text-gray-700 " + item.icon}></i>
                <p className=" text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
