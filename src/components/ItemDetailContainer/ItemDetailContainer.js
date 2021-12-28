import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idDetail } = useParams();

  useEffect(() => {
    getFetch
      .then((result) => {
        setItem(result.filter((prod) => prod.id === parseInt(idDetail)));
        setLoading(false);
      })
      .catch((error) => {
        alert("Se ha producido un error", error);
      });
  }, [idDetail]);

  return (
    <>{loading ? <Loading /> : item.map((it) => <ItemDetail it={it} />)}</>
  );
};

export default ItemDetailContainer;
