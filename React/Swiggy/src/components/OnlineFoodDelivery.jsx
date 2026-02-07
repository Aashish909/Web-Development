import RestaurantCard from "./RestaurantCard";

const OnlineFoodDelivery = ({ data = [], title }) => {
  // console.log("onlinefood", data);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-8 mt-4">{title}</h1>

      <div className="grid grid-cols-4 gap-7">
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
