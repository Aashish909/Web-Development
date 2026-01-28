import React from "react";

const Cards = ({ data }) => {
  return (
    <div>
      {data.map((singleItem) => (
        <div key={singleItem.id}>
          <img src={singleItem.image} alt="" />
          <h1>{singleItem.name}</h1>
          <p>{singleItem.price}</p>
          <p>{singleItem.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
