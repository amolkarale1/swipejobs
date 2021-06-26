import React, { useContext } from "react";
import { JobDetailsContext } from "../context/JobContext";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container, Card, Button, Media } from "react-bootstrap";
import {
  CalendarFill,
  GeoAlt,
  Gear,
  PersonCircle,
} from "react-bootstrap-icons"

import Header from  "./Header"
import CompanyDetails from './CompanyDetails'
import WorkerOptions from './WorkerOptions'

function WorkerProfile() {
  const state = useContext(JobDetailsContext);
  if (state.state.length > 0) {
    const { personName, matchingJobs } = state.state[0]
  }
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Header></Header>
          <Row>
            <Col
              md={12}
              style={{ padding: "15px", backgroundColor: "lightblue" }}
            >
              <CompanyDetails/>
              <WorkerOptions/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkerProfile;
