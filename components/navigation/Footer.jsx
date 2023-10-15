import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { CCircle } from "react-bootstrap-icons";

export function Footer() {
  return (
    <>
      <Navbar
        fixed="bottom"
        role="navigation"
        bg="success"
        data-bs-theme="dark"
        className="p-3"
      >
        <Container className="d-flex justify-content-center">
          <div>Copyrigh</div>
          <CCircle
            style={{ marginRight: "10px", marginLeft: "10px" }}
            color=""
          />
          <div>2023 Taco-Bros</div>
        </Container>
      </Navbar>
    </>
  );
}
