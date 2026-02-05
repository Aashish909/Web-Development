import { Link } from "react-router-dom";

const RestaurantCard = (info) => {
  // console.log("Card info =", info.link.split("/")[5]);

  return (
    <Link to={`/restaurantMenu/${info.link.split("/").at(-1)}`}>
      <div className="min-w-[265px] h-[152px] relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            info?.cloudinaryImageId
          }
          alt={info?.name}
        />

        <div className="w-full h-full bg-gradient-to-t from-gray-800 to-transparent absolute bottom-0 rounded-b-lg">
          <p className="absolute bottom-0 text-white ml-2 mb-2 text-2xl font-bold">
            {[
              info?.aggregatedDiscountInfoV3?.header,
              info?.aggregatedDiscountInfoV3?.subHeader,
            ]
              .filter(Boolean)
              .join(" ")}
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-lg mt-2">{info?.name}</h2>

        <p className="flex items-center gap-1 font-semibold text-base">
          <i className="fi fi-ss-circle-star text-green-500 mt-1"></i>
          {info?.avgRating} • <span>{info?.sla?.slaString}</span>
        </p>

        <p className="text-gray-400 line-clamp-1">
          {info?.cuisines?.join(", ")}
        </p>

        <p className="text-gray-400 line-clamp-1">{info?.locality}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
