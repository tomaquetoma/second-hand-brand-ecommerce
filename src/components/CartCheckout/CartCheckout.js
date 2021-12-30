import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  const { emptyCart, totalCart } = useContext(CartContext);

  return (
    <div>
      <div>
        <p className="fs-4">Total: USD {totalCart} </p>
      </div>
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
    </div>
  );
};

export default CartCheckout;