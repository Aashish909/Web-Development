import React, { useEffect, useState } from "react";
import { fixedRestaurants } from "../utils/fixedRestaurants";
import RestaurantCard from "./RestaurantCard";

const TopRestaurant = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const data =
      fixedRestaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setData(data || []);
  }, []);

  function handlePrev() {
    if (value <= 0) return;
    setValue((prev) => prev - 54);
  }

  function handleNext() {
    if (value >= 424) return;
    setValue((prev) => prev + 54);
  }

  // async function fetchData() {
  //   const response = await fetch(
  //     "https://corsproxy.io/?" +
  //       encodeURIComponent(
  //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&page_type=DESKTOP_WEB_LISTING",
  //       ),
  //   );

  //   const result = await response.json();

  //   console.log(
  //     result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants,
  //   );
  // }

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="mt-10">
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl">Top restaurant chains in Delhi</h1>
        <div className="flex gap-3">
          <div
            onClick={handlePrev}
            className={`rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300
              ${
                value <= 0
                  ? "bg-gray-100 opacity-40 pointer-events-none cursor-not-allowed"
                  : "bg-gray-200 cursor-pointer hover:bg-gray-300"
              }
            `}
          >
            <i className="fi-rr-arrow-small-left text-2xl mt-1"></i>
          </div>

          <div
            onClick={handleNext}
            className={`rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300
                    ${
                      value >= 424
                        ? "bg-gray-100 opacity-40 pointer-events-none cursor-not-allowed"
                        : "bg-gray-200 cursor-pointer hover:bg-gray-300"
                    }
                  `}
          >
            <i className="fi-rr-arrow-small-right text-2xl mt-1"></i>
          </div>
        </div>
      </div>
      {/* <div className={`flex mt-4  duration-1000`}></div> */}

      <div
        style={{ translate: `-${value}%` }}
        className="flex mt-4 gap-5 w-full duration-1000"
      >
        {fixedRestaurants.map((item) => (
          <div key={item?.info?.id} className="hover:scale-95 duration-300">
            <RestaurantCard item={item} />
          </div>
        ))}
      </div>
      <hr className="border text-gray-300 mt-10" />
    </div>
  );
};

export default TopRestaurant;
