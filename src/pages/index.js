import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

export default () => 
<div>

  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>

  <Container>
    <Row>
      <Col>Hello world</Col>
      <Col>Alex</Col>
    </Row>
    This is a container
  </Container>
</div>