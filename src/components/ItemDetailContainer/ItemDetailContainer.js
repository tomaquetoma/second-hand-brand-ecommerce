import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ propiedad }) => {
  const [item, setItem] = useState([]);

  const { idDetail } = useParams();

  useEffect(() => {
    getFetch
      .then((result) => {
        setItem(result.filter((prod) => prod.id === parseInt(idDetail)));
      })
      .catch((error) => {
        alert("Se ha producido un error", error);
      });
  }, [idDetail]);

  return (
    <>
      <h3>Hola, soy {propiedad}</h3>
      {item.map((it) => (
        <ItemDetail it={it} />
      ))}
    </>
  );
};

export default ItemDetailContainer;
