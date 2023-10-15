import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  font-style: italic;
  margin-bottom: 4rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export function Contact() {
  return (
    <Section id="section-contact">
      <Container>
        <div className="text-center">
          <H2>Contact Us</H2>
          <H3>Lorem ipsum dolor sit amet consectetur.</H3>
        </div>

        <Form>
          <Row className="d-flex justify-content-around mb-4">
            <Col lg={4} md={6} sm={12} xs={12} align="center">
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="email" placeholder="Your Name" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Phone</Form.Label>
                  <Form.Control type="email" placeholder="Your Phone" />
                </Form.Group>
              </Row>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12} align="center">
              <TextArea className="border border-secondary"></TextArea>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Button size="lg" variant="success" style={{ width: "11rem" }}>
              Send Message
            </Button>
          </Row>
        </Form>
      </Container>
    </Section>
  );
}
