import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, image, name, category, price, stock } = product;

  return (
    <div key={id} className="col-3 my-2">
      <Card style={{ width: "20rem" }} className="bg-success bg-gradient ">
        <Card.Title className="my-2">
          {id} - {name}
        </Card.Title>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "250px", width: "300px" }}
          className="p-1 m-2 border"
        />
        <Card.Body>
          <p>{category}</p>
          <p>Precio: USD {price}</p>
          <p> Stock disponible: {stock} </p>

          <Link to={`/detalle/${id}`}>
            <Button variant="secondary" className="container-fluid my-2">
              Descripción
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
