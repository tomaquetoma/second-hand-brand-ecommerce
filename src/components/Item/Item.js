import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import Col from "react-bootstrap/esm/Col";
// import Row from "react-bootstrap/esm/Row";
// import Container from "react-bootstrap/esm/Container";

const Item = ({ product }) => {
  const initial = 1;

  const { id, image, name, category, price, stock } = product;

  return (
    <div key={id} className="col my-2">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={image} className="p-2" />
        <Card.Body>
          <Card.Title>
            {id} - {name}
          </Card.Title>
          <p>{category}</p>
          <p>Precio: USD {price}</p>
          <p> Stock disponible: {stock} </p>

          <Link to={`/detalle/${id}`}>
            <Button variant="secondary" className="container-fluid my-2">
              Descripción
            </Button>
          </Link>
          <ItemCount initial={initial} stock={stock} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
