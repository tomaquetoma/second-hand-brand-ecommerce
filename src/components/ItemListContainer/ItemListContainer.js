import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const initial = 1;
  const stock = 15;

  return (
    <div className="my-2">
      <h3>{greeting}</h3>
      <Card style={{ width: "18rem" }}>
        <h3> FALTA IMAGEN, mirar Card.Img comentado </h3>
        {/* <Card.Img variant="top" src="#" /> */}
        <Card.Body>
          <Card.Title>Nombre Item</Card.Title>
          <ItemCount initial={initial} stock={stock} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemListContainer;
