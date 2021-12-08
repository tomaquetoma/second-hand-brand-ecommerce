import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ItemCount = ({ initial, stock }) => {
  const [contador, setContador] = useState(initial);
  // // const [contadorDate, setContadorDate] = useState(Date());
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState();

  const handlerSuma = (valor) => {
    stock > contador
      ? setContador((prev) => prev + valor)
      : alert("NO HAY MAS ITEMS DISPONIBLES");
    // setContadorDate(Date());
  };

  const handlerResta = (valor) => {
    initial < contador
      ? setContador((prev) => prev - valor)
      : alert("SELECCIONE AL MENOS UN ITEM");
    // setContadorDate(Date());
  };

  const onAdd = () => {
    return setCantidadSeleccionada(contador);
  };

  const onReset = () => {
    return setCantidadSeleccionada(0);
  };

  // useEffect(() => {
  //   // alert("Probando el useEffect");
  //   console.log("esto se deberia de haber ejecutado primero");
  // }, []);

  // useEffect(() => {
  //   // alert("Probando el useEffect");
  //   alert("esto se deberia de haber ejecutado segundo");
  // }, []);

  return (
    <div>
      <ButtonGroup
        aria-label="Basic example"
        className="container-fluid border border-dark rounded my-2 p-0 d-flex align-items-center"
      >
        <Button variant="light" onClick={() => handlerResta(1)}>
          -
        </Button>
        <span className="container-fluid align-middle">{contador}</span>
        <Button variant="light" onClick={() => handlerSuma(1)}>
          +
        </Button>
      </ButtonGroup>
      <Button
        variant="outline-secondary"
        className="container-fluid"
        onClick={() => onAdd()}
      >
        Añadir al Carrito
      </Button>
      <Button
        variant="outline-secondary"
        className="container-fluid my-2"
        onClick={() => onReset()}
      >
        Quitar del carrito
      </Button>
      <p>Añadiste {cantidadSeleccionada} items al carrito</p>
      {/* <p>{contadorDate}</p> */}
    </div>
  );
};

export default ItemCount;
