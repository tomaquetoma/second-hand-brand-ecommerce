import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <center>
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting="ITEMLISTCONTAINER desde APP" />
            }
          />
          <Route
            exact
            path="/categoria/:idCategory"
            element={
              <ItemListContainer greeting="ITEMLISTCONTAINER desde APP" />
            }
          />

          <Route
            exact
            path="/detalle/:idDetail"
            element={
              <ItemDetailContainer propiedad="ITEMDETAILCONTAINER desde APP" />
            }
          />
        </Routes>
      </center>
    </BrowserRouter>
  );
}

export default App;
