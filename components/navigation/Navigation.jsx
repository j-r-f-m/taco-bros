import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navigation() {
  return (
    <>
      <Navbar fixed="top" role="navigation" bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Taco Bros</Navbar.Brand>
          <Nav variant="underline">
            <Nav.Link href="#">Catering</Nav.Link>
            <Nav.Link href="#">Wann + Wo</Nav.Link>
            <Nav.Link href="#">Tacos</Nav.Link>
            <Nav.Link href="#">Über Uns</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
