import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Navigation() {
  return (
    <>
      <Navbar fixed="top" role="navigation" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Jonas Mösch</Navbar.Brand>
          <Nav variant="underline">
            <Nav.Link href="#about-me">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
