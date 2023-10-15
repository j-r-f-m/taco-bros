import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uniqid from "uniqid";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const Section = styled.section`
  padding: 6rem 0;
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 4rem;
`;

const tacos = [
  {
    id: uniqid(),
    img: "images/al-pastor.jpg",
    name: "Al Pastor",
    contents:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: uniqid(),
    img: "images/al-pastor.jpg",
    name: "Al Pastor",
    contents:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: uniqid(),
    img: "images/al-pastor.jpg",
    name: "Al Pastor",
    contents:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: uniqid(),
    img: "images/al-pastor.jpg",
    name: "Al Pastor",
    contents:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: uniqid(),
    img: "images/al-pastor.jpg",
    name: "Al Pastor",
    contents:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: uniqid(),
    img: "images/al-pastor.jpg",
    name: "Al Pastor",
    contents:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export function Tacos() {
  const allTacos = tacos.map((taco) => (
    <Col lg={4} md={6} sm={12} xs={12} align="center" key={taco.id}>
      {" "}
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={taco.img} />
        <Card.Body>
          <Card.Title>{taco.name}</Card.Title>
          <Card.Text>{taco.contents}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Section id="section-tacos">
      <Container>
        <div className="text-center">
          <H2>Our Tacos</H2>
          <H3>Lorem ipsum dolor sit amet consectetur.</H3>
        </div>
        <Row>{allTacos}</Row>
      </Container>
    </Section>
  );
}
