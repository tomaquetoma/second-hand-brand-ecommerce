import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <div className="bg bg-warning mx-5 px-3">
            <Link to="/">
              <Navbar.Brand>SECOND HAND BRAND</Navbar.Brand>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            className="container-fluid d-flex justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <ListGroup>
                  <Link
                    className="bg bg-danger"
                    activeClassName="bg bg-primary"
                    to="/categoria/hogar-muebles-jardin"
                  >
                    <ListGroup.Item> Hogar, Muebles y Jardín</ListGroup.Item>
                  </Link>

                  <Link to="/categoria/electrodomesticos">
                    <ListGroup.Item> Electrodomésticos </ListGroup.Item>
                  </Link>

                  <Link to="/categoria/tecnologia">
                    <ListGroup.Item> Tecnología </ListGroup.Item>{" "}
                  </Link>

                  <Link to="/categoria/deportes">
                    <ListGroup.Item> Deportes </ListGroup.Item>{" "}
                  </Link>
                </ListGroup>
              </NavDropdown>
              {/* <Nav.Link href="#link">Compras</Nav.Link>
              <Nav.Link href="#link">Ventas</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>

          <div className=" container-fluid">
            <InputGroup>
              <FormControl
                placeholder="Buscar..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <Button variant="outline-secondary" id="button-search">
                Buscar
              </Button>
            </InputGroup>
          </div>
          <CartWidget />
          <div className="ms-4">
            <Button variant="outline-secondary" id="button-login">
              Login
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
