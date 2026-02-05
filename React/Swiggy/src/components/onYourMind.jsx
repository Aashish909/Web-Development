import React, { useEffect, useState } from "react";
// import { fixedData } from "../utils/fixedData";

const OnYourMind = ({ data }) => {
  // const [data, setData] = useState([]);

  console.log("data::::", data);

  const [value, setValue] = useState(0);

  // console.log(fixedData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  // setData(fixedData?.data?.cards[0]?.card?.card?.imageGridCards?.info);

  //  useEffect(() => {
  //     const imageGridInfo =
  //       fixedData?.data?.cards[0]?.card?.card?.imageGridCards?.info;

  //     setData(imageGridInfo || []);
  //   }, []);
  // async function fetchData() {
  //   const data = await fetch(
  //     "https://corsproxy.io/?" +
  //       encodeURIComponent(
  //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&page_type=DESKTOP_WEB_LISTING",
  //       ),
  //   );

  //   const result = await data.json();
  //   console.log("on your mind:", result);
  //   setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function handlePrev() {
  //   value <= 0 ? "" : setValue((prev) => prev - 31);
  // }

  // function handleNext() {
  //   value >= 124 ? "" : setValue((prev) => prev + 31);
  // }

  function handlePrev() {
    if (value <= 0) return;
    setValue((prev) => prev - 31);
  }

  function handleNext() {
    if (value >= 124) return;
    setValue((prev) => prev + 31);
  }
  return (
    <div>
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl">What's in your mind?</h1>
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
                      value >= 124
                        ? "bg-gray-100 opacity-40 pointer-events-none cursor-not-allowed"
                        : "bg-gray-200 cursor-pointer hover:bg-gray-300"
                    }
                  `}
          >
            <i className="fi-rr-arrow-small-right text-2xl mt-1"></i>
          </div>
        </div>
      </div>
      <div
        style={{ translate: `-${value}%` }}
        className={`flex mt-4  duration-1000`}
      >
        {data.map((item) => (
          <img
            key={item.id}
            className="w-40"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}
            alt=""
          />
        ))}
      </div>

      <hr className="border text-gray-300 mt-4" />
    </div>
  );
};

export default OnYourMind;
