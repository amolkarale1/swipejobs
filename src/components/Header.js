import React from 'react'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function Header({personName}) {
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
              <h3>{personName}</h3>
            </Col>
          </Row>
    )
}

export default Header
