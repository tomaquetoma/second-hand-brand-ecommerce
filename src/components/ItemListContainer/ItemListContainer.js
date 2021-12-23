import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      getFetch
        .then((result) => {
          setProducts(result.filter((prod) => prod.category === idCategory));
        })
        .catch((error) => {
          alert("Se ha producido un error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
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
    }
  }, [idCategory]);

  return (
    <Container>
      <Row>
        <h3>Hola, soy {greeting}</h3>

        {loading ? <h1>Cargando...</h1> : <ItemList products={products} />}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
