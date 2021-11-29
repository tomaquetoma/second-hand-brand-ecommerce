import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <div className="bg bg-primary mx-5 px-3">
            <Navbar.Brand href="#home">SECOND HAND BRAND</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="container-fluid d-flex justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Categoria 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Categoria 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Categoria 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Categoria 3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Compras</Nav.Link>
              <Nav.Link href="#link">Ventas</Nav.Link>
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
