import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <center>
      <NavBar />

      <ItemListContainer greeting="ITEMLISTCONTAINER desde APP" />
    </center>
  );
}

export default App;
