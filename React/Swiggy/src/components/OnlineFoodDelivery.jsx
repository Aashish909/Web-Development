import RestaurantCard from "./RestaurantCard";

const OnlineFoodDelivery = ({ data }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8 mt-4">
        Restaurant with online food delivery in Delhi
      </h1>

      <div className="grid grid-cols-4 gap-7">
        {data.map((item) => (
          <div key={item?.info?.id} className="hover:scale-95 duration-300">
            <RestaurantCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineFoodDelivery;
