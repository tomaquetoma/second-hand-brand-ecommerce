import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const { id, image, name, price, description, stock } = item;

  const initial = 1;

  const { addToCart } = useContext(CartContext);

  const onAdd = (cant) => {
    // const message = `Agregaste ${cantidad} producto`;
    // cantidad === 1 ? alert(message) : alert(`${message}s`);
    setGoCart(false);
    addToCart({ ...item, quantity: cant });
  };

  const [goCart, setGoCart] = useState(true);

  return (
    <div key={id} className="border border-dark border-2 rounded container-sm">
      <h4>
        {id} - {name}
      </h4>
      <div className="container p-3">
        <div className="row">
          <div className="col">
            <img
              src={image}
              alt="imagen"
              style={{ height: "300px", width: "400px" }}
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

            {goCart ? (
              <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
            ) : (
              <Link to="/cart/">
                <Button variant="outline-success" className="container-fluid">
                  Ir al Carrito
                </Button>
              </Link>
            )}

            <Link to="/">
              <Button
                variant="outline-primary"
                className="container-fluid mt-2"
              >
                Seguir Comprando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
