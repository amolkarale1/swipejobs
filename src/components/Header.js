import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Header({ personName }) {
  return (
    <Row>
      <Col
        className="text-start header"
      >
        <h3 data-testid="websitename"><span className="">Swipe jobs</span></h3>
      </Col>
      <Col
    
        className="text-end header"
      >
        <h3 data-testid="personname">{personName}</h3>
      </Col>
    </Row>
  );
}

export default Header;
