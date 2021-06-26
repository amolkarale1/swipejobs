import React from 'react'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function Header() {
    return (
        <Row>
            <Col
              style={{
                backgroundColor: "black",
                color: "white",
              }}
              className="text-start"
            >
              <h3>swipe jobs</h3>
            </Col>
            <Col
              style={{
                backgroundColor: "black",
                color: "white",
              }}
              className="text-end"
            >
              <h3>Jim Rose</h3>
            </Col>
          </Row>
    )
}

export default Header
