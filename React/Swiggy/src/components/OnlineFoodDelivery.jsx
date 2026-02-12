import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useDispatch } from "react-redux";
import { setFilterVal } from "../redux/filterSlice";

const OnlineFoodDelivery = ({ data = [], title }) => {
  // console.log("onlinefood", data);

  const filterOptions = [
    {
      filterName: "Rating 4.0+",
    },
    {
      filterName: "Offers",
    },
    {
      filterName: "Rs. 300-500",
    },
    {
      filterName: "Less than Rs. 300",
    },
  ];
  const [activeBtn, setActiveBtn] = useState(null);

  const dispatch = useDispatch();

  function handleFilterBtn(filterName) {
    setActiveBtn(activeBtn === filterName ? null : filterName);
  }
  dispatch(setFilterVal(activeBtn));
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8 mt-4">{title}</h1>

      <div className="my-6 flex flex-wrap gap-3">
        {filterOptions.map((data) => (
          <button
            onClick={() => handleFilterBtn(data.filterName)}
            className={
              "filterBtn flex gap-2 " +
              (activeBtn === data.filterName ? "active" : "")
            }
          >
            <p> {data.filterName}</p>

            <i className="fi fi-rr-cross hidden text-sm mt-1"></i>
          </button>
        ))}
      </div>

      <div
        className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
      >
        {data.map(({ info, cta }) => (
          <div key={info.id} className="hover:scale-95 duration-300">
            <RestaurantCard {...info} link={cta?.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineFoodDelivery;
