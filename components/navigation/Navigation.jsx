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
            <Nav.Link href="#">Tacos</Nav.Link>
            <Nav.Link href="#">Foodtruck</Nav.Link>
            <Nav.Link href="#">Team</Nav.Link>
            <Nav.Link href="#">Kontakt</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
