import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container, Card, Button, Media } from "react-bootstrap";
import {
  CalendarFill,
  GeoAlt,
  Gear,
  PersonCircle,
} from "react-bootstrap-icons";
import job from "../images/job.jpeg";
function CompanyDetails(props) {
  const {
    companyInfo,
    jobInfo,
    milesToTravel,
    requirements,
    wagesPerHour,
    shiftDates,
  } = props;

  return (
    <>
      <Row>
        <Col md={12}>
          <Card>
            {
              <Card.Img
                variant="top"
                src={jobInfo.imageUrl}
                width={170}
                height={100}
              />
            }
            <Card.Body>
              <Card.Title>{jobInfo.name}</Card.Title>
              <Card.Text>{companyInfo.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3 g-0 p-1 company-location">
        <Col className="">
          <div>
            <p className="mb-0">Distance</p>
            <h4 className="mb-0">{milesToTravel.toFixed(1)} miles</h4>
          </div>
        </Col>
        <Col className="">
          <div className="text-end">
            <p className="mb-0">Hourly rate</p>
            <h4 className="mb-0">${(wagesPerHour / 100).toFixed(2)}</h4>
          </div>
        </Col>
      </Row>

      <Row className="company-info g-0">
        <Col md={12}>
          <div className="d-flex">
            <CalendarFill size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Shift Dates</h6>
              <p className="mb-0">{shiftDates.startDate}</p>
              <p className="mb-0">{shiftDates.endDate}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="company-info g-0">
        <Col md={12}>
          <div className="d-flex">
            <GeoAlt size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Location</h6>
              <p className="mb-0">{companyInfo.address.formattedAddress}</p>
              <p className="mb-0">
                {milesToTravel} miles from your Job Search Location
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="company-info g-0">
        <Col md={12}>
          <div className="d-flex">
            <Gear size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Requirements</h6>
              {requirements &&
                requirements.map((requirement) => {
                  return <p className="mb-0">- {requirement}</p>;
                })}
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3 company-info g-0">
        <Col md={12}>
          <div className="d-flex">
            <PersonCircle size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Report To</h6>
              <p className="mb-0">
                {companyInfo.reportTo.name} {companyInfo.reportTo.phone}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CompanyDetails;
