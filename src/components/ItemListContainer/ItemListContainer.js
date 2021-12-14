import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        alert("Se ha producido un error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-2">
      <h3>{greeting}</h3>
      {loading ? <h1>Cargando...</h1> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
