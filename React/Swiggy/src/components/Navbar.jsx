import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router";
import { Coordinates } from "../context/contextApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, toggleSearchLocationBar } from "../redux/toggleSlice";
import SigninBtn from "./SigninBtn";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const dispatch = useDispatch();
  const { setCoordinate } = useContext(Coordinates);

  const visible = useSelector(
    (state) => state.toggleSlice.searchLocationBarToggle,
  );
  const loginVisible = useSelector((state) => state.toggleSlice.loginToggle);
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const userData = useSelector((state) => state.authSlice.userData);

  const [searchResult, setSearchResult] = useState([]);
  const [address, setAddress] = useState("");

  const navItems = [
    // {
    //   id: 1,
    //   icon: "fi fi-rr-shopping-bag",
    //   label: "Corporate",
    //   path: "/corporate",
    // },
    { id: 2, icon: "fi fi-rr-search", label: "Search", path: "/search" },
    // { id: 3, icon: "fi fi-rr-badge-percent", label: "Offers", path: "/offers" },
    // { id: 4, icon: "fi fi-sr-life-ring", label: "Help", path: "/help" },
    { id: 5, icon: "fi fi-rr-user", label: "Sign In" },
    { id: 6, icon: "fi fi-rr-shopping-cart-add", label: "Cart", path: "/cart" },
  ];

  function getGPS() {
    dispatch(toggleSearchLocationBar());
  }

  function handleLogin() {
    dispatch(toggleLogin());
  }

  async function searchLocation(val) {
    if (!val) return;
    const res = await fetch(
      `https://blinkit.com/location/autoSuggest?query=${val}&lat=28.46&lng=77.06`,
    );
    const data = await res.json();
    setSearchResult(data.ui_data);
  }

  async function fetchLatAndLong(id) {
    if (!id) return;
    dispatch(toggleSearchLocationBar());

    const res = await fetch(`https://blinkit.com/location/info?place_id=${id}`);
    const data = await res.json();

    setCoordinate({
      lat: data.coordinate.lat,
      lng: data.coordinate.lon,
    });
    setAddress(data.location_info.formatted_address);
  }

  return (
    <>
      {/* ================= LEFT SIDEBAR (LOCATION) ================= */}
      <div
        onClick={getGPS}
        className={`w-full fixed inset-0 bg-black/40 z-30 transition-opacity
        ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <div
        className={`fixed top-0 left-0 h-full bg-white z-40
        w-full sm:w-[70%] md:w-[40%] lg:w-[37%]
        px-6 md:px-10 py-6 shadow-2xl transition-transform duration-500
        ${visible ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end mb-6">
          <i
            className="fi fi-rr-cross cursor-pointer text-xl"
            onClick={getGPS}
          ></i>
        </div>

        <input
          onChange={(e) => searchLocation(e.target.value)}
          placeholder="Search for area, street name..."
          className="w-full border px-4 py-3 rounded-md focus:outline-none focus:border-orange-500"
        />

        <ul className="mt-6 border-t">
          {searchResult?.suggestions?.map((data) => (
            <li
              key={data.meta.place_id}
              onClick={() => fetchLatAndLong(data.meta.place_id)}
              className="flex gap-4 py-4 cursor-pointer hover:bg-gray-50"
            >
              <i className="fi fi-rr-marker text-orange-500 mt-1"></i>
              <div>
                <p className="text-sm font-medium">{data.title.text}</p>
                <p className="text-xs text-gray-500">{data.subtitle.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="sticky top-0 bg-white shadow-md z-20">
        <div className="h-20 flex justify-center items-center">
          <div className="w-full max-w-[1200px] px-4 flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center gap-6">
              <Link to="/">
                <img
                  className="w-20 sm:w-24 flex-shrink-0"
                  src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                />
              </Link>

              <div
                onClick={getGPS}
                className="flex sm:hidden items-center gap-2 cursor-pointer text-sm mt-1"
              >
                <span className="font-bold border-b border-black">Other</span>
                <span className="truncate max-w-40 text-gray-500">
                  {address || "Mumbai, India"}
                </span>
                <i className="fi fi-rr-angle-small-down text-orange-500"></i>
              </div>

              <div
                onClick={getGPS}
                className="hidden sm:flex items-center gap-2 cursor-pointer"
              >
                <span className="font-bold border-b-2 border-black text-sm">
                  Other
                </span>
                <span className="text-sm truncate max-w-44 text-gray-500">
                  {address || "Mumbai, India"}
                </span>
                <i className="fi fi-rr-angle-small-down text-orange-500"></i>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item,index) =>
                item.label === "Sign In" ? (
                  <div
                    key={index}
                    onClick={handleLogin}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {userData?.photo ? (
                      <img
                        src={userData.photo}
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <i className={`${item.icon}`}></i>
                    )}
                    <span>{userData?.name || "Sign In"}</span>
                  </div>
                ) : (
                  <Link key={index} to={item.path}>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <i className={`${item.icon}`}></i>
                      <span>{item.label}</span>
                      {item.label === "Cart" && cartData.length > 0 && (
                        <span className="text-orange-500">
                          {cartData.length}
                        </span>
                      )}
                    </div>
                  </Link>
                ),
              )}
            </div>

            {/* Mobile Icons */}

            <div className="flex md:hidden gap-6">
              {navItems.map((item,index) =>
                item.label === "Sign In" ? (
                  <i
                    key={index}
                    className={`${item.icon} text-xl cursor-pointer`}
                    onClick={handleLogin}
                  ></i>
                ) : (
                  <Link key={index} to={item.path}>
                    <i className={`${item.icon} text-xl cursor-pointer`}></i>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      {/* ================= RIGHT SIDEBAR (LOGIN) ================= */}
      <div
        onClick={handleLogin}
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity
          ${loginVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full bg-white z-40
          w-full sm:w-[70%] md:w-[40%] lg:w-[37%]
          px-6 md:px-10 py-6 shadow-2xl transition-transform duration-500
          ${loginVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Cross Button – ALWAYS visible */}
        <div className="flex justify-start">
          <i
            className="fi fi-rr-cross text-xl cursor-pointer"
            onClick={handleLogin}
          ></i>
        </div>

        {/* Content */}
        {userData?.email ? (
          <UserProfile />
        ) : (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-4xl border-b-2 border-black pb-3">
                Login
              </h2>
              <img
                className="w-28"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                alt="login"
              />
            </div>

            <SigninBtn />

            <p className="text-sm mt-4 opacity-70">
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
