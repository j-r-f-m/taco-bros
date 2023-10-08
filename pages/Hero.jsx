import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import heroBackground from "../public/images/hero_tacos.png";
import styled from "styled-components";

const Header = styled.header`
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: center;
  color: white;
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  @media (min-width: 768px) {
    padding-top: 17rem;
    padding-bottom: 12.5rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
`;

export function Hero() {
  return (
    <Header>
      <Container>
        <H3>Hi we are the Taco Brothers</H3>
        <H1>Do you want tacos?</H1>
        <Button variant="success" size="lg">
          We have them
        </Button>
      </Container>
    </Header>
  );
}
