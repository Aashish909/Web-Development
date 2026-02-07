import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { Coordinates, Visibility } from "../context/contextApi";
import { searchPlaceData } from "../utils/searchPlaceData";

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

  const { vissible, setVisible } = useContext(Visibility);
  const [searchResult, setSearchResult] = useState([]);
  const [address, setAddress] = useState("");

  const { setCoordinate } = useContext(Coordinates);
  // console.log(searchResult);

  function getGPS() {
    setVisible((prev) => !prev);
  }

  function closeGpsSideBar() {
    setVisible((prev) => !prev);
  }

  // async function searchLocation() {
  //   const result = await fetch(
  //     "https://corsproxy.io/?" +
  //       encodeURIComponent(
  //         "https://www.swiggy.com/dapi/misc/place-autocomplete?input=delhi",
  //       ),
  //   );

  //   const data = await result.json();
  //   console.log(data);
  // }
  // useEffect(() => {
  //   searchLocation();
  // }, []);

  async function searchLocation(val) {
    if (val == "") return;
    const result = await fetch(
      `https://blinkit.com/location/autoSuggest?query=${val}&lat=28.4652382&lng=77.0615957&session_token=bffec870-2a62-494f-9c51-2cdfcbabec80`,
    );
    const data = await result.json();
    setSearchResult(data.ui_data);
  }

  // useEffect(() => {
  //   searchLocation();
  // }, []);

  // function searchResultFun(val) {
  //   if (val === "") return;
  //   setSearchResult(searchPlaceData.data);
  // }

  async function fetchLatAndLong(id) {
    if (id == "") return;
    // console.log(id);
    closeGpsSideBar();
    const result = await fetch(
      `https://blinkit.com/location/info?place_id=${id}&session_token=bffec870-2a62-494f-9c51-2cdfcbabec80`,
    );

    const data = await result.json();
    setCoordinate({
      lat: data.coordinate.lat,
      lng: data.coordinate.lon,
    });
    // console.log(data.location_info.formatted_address);
    setAddress(data.location_info.formatted_address);
  }
  return (
    <div className="relative w-full">
      {/* <div className="w-full">
        <div
          onClick={closeGpsSideBar}
          className={
            "w-full bg-black/50 z-30 h-full absolute " +
            (vissible ? "visible" : "invisible")
          }
        ></div>

        <div
          className={
            "bg-white w-1/3 h-full absolute px-40 py-5 top-0 z-40 duration-500 ease-in-out " +
            (vissible ? "left-0" : "-left-full")
          }
        >
          <p className="text-black font-bold cursor-pointer pb-4 pt-4">
            <i class="fi fi-rr-cross" onClick={closeGpsSideBar}></i>
          </p>
          <input
            onChange={(e) => searchLocation(e.target.value)}
            type="text"
            className="border p-4 focus:outline-none focus:shadow-2xl"
          />
          <div className="border p-5">
            <ul>
              {searchResult?.suggestions?.map((data) => (
                <div>
                  <i className="fi fi-rr-marker"></i>
                  <li onClick={() => fetchLatAndLong(data.meta.place_id)}>
                    {data.title.text}{" "}
                    <p className="text-sm opacity-65">{data.subtitle.text}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div> */}

      <div className="w-full">
        {/* Overlay */}
        <div
          onClick={closeGpsSideBar}
          className={
            "fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 " +
            (vissible ? "opacity-100 visible" : "opacity-0 invisible")
          }
        ></div>

        {/* Sidebar */}
        <div
          className={
            "fixed top-0 left-0 bg-white w-[420px] h-full z-40 " +
            "px-10 py-6 shadow-2xl transition-transform duration-500 ease-out " +
            (vissible ? "translate-x-0" : "-translate-x-full")
          }
        >
          {/* Close */}
          <div className="flex justify-end mb-6">
            <i
              className="fi fi-rr-cross text-xl text-gray-600 cursor-pointer hover:text-black"
              onClick={closeGpsSideBar}
            ></i>
          </div>

          {/* Input */}
          <input
            onChange={(e) => searchLocation(e.target.value)}
            type="text"
            placeholder="Search for area, street name..."
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm
                 focus:outline-none focus:border-orange-500 focus:shadow-md"
          />

          {/* Results */}
          <div className="mt-6 border-t">
            <ul>
              {searchResult?.suggestions?.map((data) => (
                <li
                  key={data.meta.place_id}
                  onClick={() => fetchLatAndLong(data.meta.place_id)}
                  className="flex gap-4 items-start py-4 cursor-pointer
                       hover:bg-gray-50 transition-all"
                >
                  <i className="fi fi-rr-marker text-orange-500 text-lg mt-1"></i>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {data.title.text}
                    </p>
                    <p className="text-xs text-gray-500">
                      {data.subtitle.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="w-full shadow-md h-20 flex justify-center items-center   z-20 ">
        <div className=" w-[70%] flex justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                className="w-24"
                src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                alt=""
              />
            </Link>
            <div
              onClick={getGPS}
              className="flex items-center gap-2 cursor-pointer max-w-xs"
            >
              <p className="flex items-center gap-2 overflow-hidden">
                <span className="font-bold text-sm border-b-2 border-black shrink-0">
                  Other
                </span>

                <span className="ml-1 font-semibold w-40 text-sm opacity-65 truncate">
                  {address}
                </span>
              </p>

              <i className="fi fi-rr-angle-small-down mt-1 text-2xl text-orange-500 shrink-0"></i>
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
      </div> */}

      <div className="sticky top-0 w-full bg-white shadow-md z-20">
        <div className="h-20 flex justify-center items-center">
          <div className="w-[75%] flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center gap-6">
              <Link to="/">
                <img
                  className="w-24 cursor-pointer"
                  src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                  alt="Swiggy"
                />
              </Link>

              {/* Location Selector */}
              <div
                onClick={getGPS}
                className="flex items-center gap-2 cursor-pointer max-w-xs hover:text-orange-500"
              >
                <span className="font-bold text-sm border-b-2 border-black">
                  Other
                </span>

                <span className="text-sm font-medium text-gray-500 truncate w-44">
                  {address || "Select your location"}
                </span>

                <i className="fi fi-rr-angle-small-down text-xl text-orange-500"></i>
              </div>
            </div>

            {/* Right Nav Items */}
            <div className="flex items-center gap-10">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-orange-500"
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
