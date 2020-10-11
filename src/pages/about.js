import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col} from 'react-bootstrap';

export default function About() {
  return (
    <div>
    <Container>
        <Row><Col><h1>About Alex</h1></Col></Row>
        <p>Such wow. Very React.</p>
    </Container>
    </div>
  )
}