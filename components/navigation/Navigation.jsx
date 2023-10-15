import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Events, scrollSpy } from "react-scroll";

export function Navigation() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="success"
        data-bs-theme="dark"
        clas
      >
        <Container>
          <Navbar.Brand href="#">Taco Bros</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="tacos" className="nav-link">
                Tacos
              </Link>
              <Link to="food-truck" className="nav-link">
                Foodtruck
              </Link>

              <Link to="team" className="nav-link">
                Team
              </Link>
              <Link to="contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
