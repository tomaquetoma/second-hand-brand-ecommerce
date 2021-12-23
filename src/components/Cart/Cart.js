import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Cart = () => {
  const { cartList, emptyCart } = useContext(CartContext);

  return (
    <Container>
      <Row>
        <Col sm={9}>
          {cartList.map((itCart) => (
            <div className="my-2 p-2 border border-1 rounded">
              <Row>
                <Col>
                  <img
                    src={itCart.image}
                    style={{ height: "100px", width: "150px" }}
                    alt="imagen producto cart"
                    className="p-2 m-2 border border-1 rounded"
                  />
                </Col>
                <Col>
                  <div className="p-2 m-2 border border-1 rounded">
                    <h5> {itCart.name} </h5>
                    <p>
                      Cantidad: {itCart.quantity} - Precio Unitario: USD
                      {itCart.price}
                    </p>
                    <h5> TOTAL: USD {itCart.quantity * itCart.price} </h5>
                    <p> ID REF: {itCart.id} </p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
        <Col sm={3}>
          <Button className="btn btn-success container-fluid mb-2">
            Finalizar Compra
          </Button>
          <Link to="/">
            <Button className="btn btn-primary container-fluid mb-2">
              Seguir Comprando
            </Button>
          </Link>
          <Button
            className="btn btn-danger container-fluid mb-2"
            onClick={emptyCart}
          >
            Vaciar Carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
