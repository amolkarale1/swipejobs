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
} from "react-bootstrap-icons";

import Header from "./Header";
import CompanyDetails from "./CompanyDetails";
import WorkerOptions from "./WorkerOptions";

function WorkerProfile() {
  const state = useContext(JobDetailsContext);
  if (state.state.length > 0) {
    const { personName, workerId, matchingJobs } = state.state[0];
    return (
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            
            {matchingJobs &&
              matchingJobs.map((jobDetail) => {
                return (
                  <>
                  <Header personName={personName}></Header>
                  <Row className="" key={jobDetail.jobId}>
                    <Col
                      md={12}
                      className = "job-info"
                    >
                      <CompanyDetails
                        companyInfo={jobDetail.company}
                        jobInfo={jobDetail.jobTitle}
                        milesToTravel={jobDetail.milesToTravel}
                        requirements={jobDetail.requirements}
                        wagesPerHour={jobDetail.wagePerHourInCents}
                        shiftDates={jobDetail.shifts[0]}
                      />
                      <WorkerOptions workerId={workerId} jobId={jobDetail.jobId}/>
                    </Col>
                  </Row>
                  </>
                );
              })}
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div>...Loading </div>;
  }
}

export default WorkerProfile;
