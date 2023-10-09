import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 0;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
`;

const H3 = styled.h3``;

export function Tacos() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <H2>Our Tacos</H2>
          <H3>Lorem ipsum dolor sit amet consectetur.</H3>
        </div>
        <Row></Row>
      </Container>
    </Section>
  );
}
