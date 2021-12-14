import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getOneProduct } from "../../helpers/getOneProduct";

const ItemDetailContainer = ({ propiedad }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOneProduct
      .then((result) => {
        setItem(result);
      })
      .catch((error) => {
        alert("Se ha producido un error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3>Hola {propiedad}</h3>
      {loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
