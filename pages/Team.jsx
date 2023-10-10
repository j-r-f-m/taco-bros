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
    img: "../public/images/team_1.jpg",
    name: "Bro 1",
    contents:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  },
  {
    id: uniqid(),
    img: "../public/images/team_1.jpg",
    name: "Bro 2",
    contents:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..",
  },
];

export function Team() {
  const allTacos = tacos.map((taco) => (
    <Col lg={6} md={12} sm={12} xs={12} align="center" key={taco.id}>
      {" "}
      <Card
        border="light"
        bg="light"
        className=" m-3"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={taco.img} roundedCircle />
        <Card.Body>
          <Card.Title>{taco.name}</Card.Title>
          <Card.Text>{taco.contents}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Section>
      <Container fluid>
        <div className="text-center">
          <H2>The Taco Bros</H2>
          <H3>Lorem ipsum dolor sit amet consectetur.</H3>
        </div>
        <Row className="d-flex justify-content-around">{allTacos}</Row>
      </Container>
    </Section>
  );
}
