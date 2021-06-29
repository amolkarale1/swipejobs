import React, { useContext } from "react";
import { JobDetailsContext } from "../context/JobContext";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container,Carousel } from "react-bootstrap";
import Header from "./Header";
import CompanyDetails from "./CompanyDetails";
import WorkerOptions from "./WorkerOptions";

function WorkerProfile() {
  const state = useContext(JobDetailsContext);
  if (state.state.length > 0) {
    const { personName, workerId, matchingJobs } = state.state[0];
    return (
      <Container fluid>
        {state.state[0].message}
        <Row>
        
          <Col md={{ span: 4, offset: 4 }}>
          <Carousel interval={null} slide={false}>
            {matchingJobs &&
              matchingJobs.map((jobDetail) => {
             
                return (
                  <Carousel.Item interval={0} key={jobDetail.jobId}>
                  <div  className="d-block w-100 mt-2">
                    {jobDetail.is_accepted && (
                       <div className="alert alert-success" role="alert">
                       Job Accepted Successfully
                     </div>
                    )}

                    <Header personName={personName}></Header>
                    <Row className="">
                      <Col md={12} className="job-info">
                        <CompanyDetails
                          companyInfo={jobDetail.company}
                          jobInfo={jobDetail.jobTitle}
                          milesToTravel={jobDetail.milesToTravel}
                          requirements={jobDetail.requirements}
                          wagesPerHour={jobDetail.wagePerHourInCents}
                          shiftDates={jobDetail.shifts[0]}
                        />
                        <WorkerOptions
                          workerId={workerId}
                          jobId={jobDetail.jobId}
                        />
                      </Col>
                    </Row>
                  </div>
                  </Carousel.Item>
                );
              })}
                </Carousel>
          </Col>
        
        </Row>
      </Container>
    );
  } else {
    return <div>...Loading </div>;
  }
}

export default WorkerProfile;
