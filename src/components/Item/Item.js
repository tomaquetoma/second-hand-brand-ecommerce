import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({ product }) => {
  const initial = 1;

  return (
    <div key={product.id} className="my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>
            {product.id} - {product.name}
          </Card.Title>
          <p>Precio: USD {product.price}</p>
          <p> Stock disponible: {product.stock} </p>
          <Button variant="secondary" className="container-fluid my-2">
            Descripción
          </Button>
          <ItemCount initial={initial} stock={product.stock} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
