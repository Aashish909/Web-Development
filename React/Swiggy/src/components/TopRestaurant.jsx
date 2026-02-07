import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const TopRestaurant = ({ data = [], title }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="mt-10">
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl">{title}</h1>

        <div className="flex gap-3">
          <div
            onClick={() => value > 0 && setValue(value - 54)}
            className={`rounded-full w-9 h-9 flex justify-center items-center
              ${
                value <= 0
                  ? "bg-gray-100 opacity-40 pointer-events-none"
                  : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
              }
            `}
          >
            <i className="fi-rr-arrow-small-left text-2xl mt-1"></i>
          </div>

          <div
            onClick={() => value < 424 && setValue(value + 54)}
            className={`rounded-full w-9 h-9 flex justify-center items-center
              ${
                value >= 424
                  ? "bg-gray-100 opacity-40 pointer-events-none"
                  : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
              }
            `}
          >
            <i className="fi-rr-arrow-small-right text-2xl mt-1"></i>
          </div>
        </div>
      </div>

      <div
        style={{ translate: `-${value}%` }}
        className="flex mt-4 gap-5 w-full duration-1000"
      >
        {data.length === 0 ? (
          <p className="text-gray-400">Loading restaurants...</p>
        ) : (
          data.map(({ info, cta }) => (
            <div key={info?.id} className="hover:scale-95 duration-300">
              <RestaurantCard {...info} link={cta?.link} />
            </div>
          ))
        )}
      </div>

      <hr className="border text-gray-300 mt-10" />
    </div>
  );
};

export default TopRestaurant;
