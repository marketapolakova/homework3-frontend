import "./App.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/dashboard" as={Link}>
              Dashboard
            </Nav.Link>
            <Nav.Link to="/autobazar" as={Link}>
              Autobazar
            </Nav.Link>
            <Nav.Link to="/colorSchemaChanger" as={Link}>
              Změnit barvu
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
