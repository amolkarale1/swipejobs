import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container, Card, Button, Media } from "react-bootstrap";

function WorkerOptions() {
  return (
    <Row className="mb-3 g-1">
      <Col>
        <Button style={{ width: "100%" }} variant="secondary">
          No thanks
        </Button>
      </Col>

      <Col>
        <Button style={{ width: "100%" }} variant="dark">
          I will take it
        </Button>
      </Col>
    </Row>
  );
}

export default WorkerOptions;
