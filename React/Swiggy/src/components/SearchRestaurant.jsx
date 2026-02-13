import React from "react";

const SearchRestaurant = ({
  data: {
    card: {
      card: {
        info: {
          id,
          name: resName,
          avgRating,
          sla: { slaString },
          cloudinaryImageId,
          costForTwoMessage,
          cuisines,
          promoted = false,
          aggregatedDiscountInfoV3 = {},
        },
      },
    },
  },
}) => {
  return (
  <div className="bg-white  p-4 m-4 flex items-center gap-4">
        <div className="w-[30%]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/" +
              cloudinaryImageId
            }
            alt=""
          />

          {/* <button
            // onClick={handleAddToCart}
            className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-lg text-green-700 font-bold rounded-xl border px-10 py-2 drop-shadow"
          >
            ADD
          </button> */}
         {/* <AddToCartBtn
                     info={info}
                     resInfo={resInfo}
                    //  handleIsDiffRes={handleIsDiffRes}
                   /> */}
        </div>

      <div className="w-[70%] opacity-70">
          <p className="text-sm font-semibold line-clamp-1">By {resName}</p>
          <p className="text-[12px]  flex flex-reverse pt-1 lowercase font-semibold">
            <i className="fi fi-ss-star pr-1"></i>
            {avgRating} • {slaString} • {costForTwoMessage}
          </p>
          <p className="line-clamp-1">{cuisines.join(", ")}</p> 
    </div>
  </div>
  )
};

export default SearchRestaurant;


//Higher Order Component
export function withHoc(WrappedComponent){
  return (props)=> {
    return (
      <div className="relative">
        <p className="absolute top-9 text-sm left-6 px-1 bg-gray-600 text-white rounded-md">Ad</p>
        <WrappedComponent {...props} />
      </div>
    );
  }
}