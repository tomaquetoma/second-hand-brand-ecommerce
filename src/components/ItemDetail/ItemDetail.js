import React from "react";

const ItemDetail = ({ it }) => {
  const { id, image, name, price, description, stock } = it;

  return (
    <div
      key={id}
      className="bg-warning border border-dark border-4 rounded container-sm"
    >
      <h4>
        {id} - {name}
      </h4>
      <div className="container p-3">
        <div className="row">
          <div className="col">
            <img
              src={image}
              alt="imagen"
              className="border border-dark border-2 rounded"
            />
          </div>
          <div className="col ">
            <div className="border border-dark border-2 rounded p-1 bg bg-light my-3">
              <h4>{name}</h4>
              <p>
                Precio: USD {price} - Stock: {stock}
              </p>
            </div>

            <p className="border border-dark border-2 rounded p-2 bg bg-light">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
