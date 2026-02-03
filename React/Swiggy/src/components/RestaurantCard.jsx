import React from "react";

const RestaurantCard = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="min-w-[265px] h-[152px] relative ">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            item?.info?.cloudinaryImageId
          }
          alt=""
        />
        <div className="w-full h-full bg-gradient-to-t from-gray-800  from to-1% to-transparent to-40% absolute bottom-0 rounded-b-lg">
          <p className="absolute bottom-0 text-white ml-2 mb-2 text-2xl font-bold">
            {item?.info?.aggregatedDiscountInfoV3?.header +
              " " +
              item?.info?.aggregatedDiscountInfoV3?.subHeader}
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-lg mt-2">{item?.info?.name}</h2>
        <p className="flex items-center gap-1 font-semibold text-base">
          <i className="fi fi-ss-circle-star text-green-500 mt-1"></i>
          {item?.info?.avgRating} • <span>{item?.info?.sla?.slaString}</span>
        </p>
        <p className="text-gray-400 line-clamp-1">
          {item?.info?.cuisines?.join(", ")}
        </p>
        <p className="text-gray-400 line-clamp-1">{item?.info?.locality}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
