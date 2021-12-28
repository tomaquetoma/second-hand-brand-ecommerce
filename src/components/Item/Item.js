import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const Item = ({ product }) => {
  const { id, image, name, price, stock } = product;

  return (
    <Col sm={3}>
      <div key={id} className="my-3">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "250px", width: "300px" }}
            className="p-1 m-2 border"
          />
          <Card.Body>
            <Card.Title className="my-2">{name}</Card.Title>
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
    </Col>
  );
};

export default Item;
