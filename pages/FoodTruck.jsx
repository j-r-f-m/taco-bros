import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { TruckText } from "./FoodTruckText";

const Section = styled.section`
  padding: 6rem 0;
  background: rgba(248, 249, 250);
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 4rem;
`;

export function Foodtruck() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <H2>Our Taco Truck</H2>
          <H3>Lorem ipsum dolor sit amet consectetur.</H3>
        </div>
        <Row className="text-center d-flex algin-items-center justify-content-around ">
          <Col md={6}>
            <Image src="images/food-truck-md.jpg" rounded fluid />
          </Col>
          <Col
            className="d-flex align-items-center justifiy-content-center"
            md={6}
          >
            <p>{TruckText}</p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
