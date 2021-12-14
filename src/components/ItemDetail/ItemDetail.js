import React from "react";

const ItemDetail = ({ item }) => {
  console.log(item[0]);
  return (
    <div key={item[0].id} className="flex bg-warning">
      <h3>ItemDetail</h3>
      <img src={item[0].image} alt={item[0].image} />
      <strong>
        <p>USD {item[0].price} </p>
      </strong>
      <p> {item[0].description} </p>
    </div>
  );
};

export default ItemDetail;
