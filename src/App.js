import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <center>
      <NavBar />
      <ItemListContainer greeting="ESTO ES EL ITEMLISTCONTAINER" />
    </center>
  );
}

export default App;
