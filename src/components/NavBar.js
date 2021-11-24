import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SECOND HAND BRAND</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-5 container-fluid">
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
              <InputGroup className="mb-3  container-fluid">
                <FormControl
                  placeholder="Buscar..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-search">
                  Buscar
                </Button>
              </InputGroup>
              <Button
                variant="outline-secondary"
                id="button-login"
                className="mb-3 mx-3"
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
