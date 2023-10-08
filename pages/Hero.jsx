import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const styleHeader = {
  paddingTop: "17rem",
  paddingBottom: "12.5rem",
  textAlign: "center",
};

const styleH3 = {
  fontSize: "1.5rem",
  lineHeight: "1.5rem",
  marginBottom: "25px",
};

const styleH1 = {
  fontSize: "3.25rem",
  fontWeight: "700",
  lineHeight: "3.25rem",
  marginBottom: "2rem",
};

export function Hero() {
  return (
    <header style={styleHeader}>
      <Container>
        <h3 style={styleH3}>Hi we are the Taco Brothers</h3>
        <h1 style={styleH1}>Do you want tacos?</h1>
        <Button variant="success" size="lg">
          We have them
        </Button>
      </Container>
    </header>
  );
}
