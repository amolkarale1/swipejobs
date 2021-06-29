import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import {
  CalendarFill,
  GeoAlt,
  Gear,
  PersonCircle,
} from "react-bootstrap-icons";
import moment from "moment";

function CompanyDetails(props) {
  if (Object.keys(props).length == 0) {
    return <div>No Data found</div>;
  }

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
              <Card.Title data-testid="jobname">{jobInfo.name}</Card.Title>
              <Card.Text data-testid="companyname">
                {companyInfo.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-0 p-1 company-location">
        <Col className="">
          <div className="ps-1">
            <p className="mb-0">Distance</p>
            <h4 className="mb-0"><span class="text-white">{milesToTravel.toFixed(1)} miles</span></h4>
          </div>
        </Col>
        <Col className="">
          <div className="text-end pe-1">
            <p className="mb-0">Hourly rate</p>
            <h4 className="mb-0"><span class="text-white">${(wagesPerHour / 100).toFixed(2)}</span></h4>
          </div>
        </Col>
      </Row>

      <Row className="company-info g-0">
        <Col md={12}>
          <div className="d-flex p-1">
            <CalendarFill size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Shift Dates</h6>
              <p className="mb-0">
                {moment(shiftDates.startDate).format("LLL")}
              </p>
              <p className="mb-0">{moment(shiftDates.endDate).format("LLL")}</p>
            </div>
          </div>

          <div className="outer">
            <div
            className="inner"
            ></div>
          </div>
        </Col>
      </Row>

      <Row className="company-info g-0">
        <Col md={12}>
          <div className="d-flex ">
            <GeoAlt size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Location</h6>
              <p className="mb-0">{companyInfo.address.formattedAddress}</p>
              <p className="mb-0" data-testid="milestotravel">
                <small>
                  {milesToTravel} miles from your Job Search Location
                </small>
              </p>
            </div>
          </div>
          <div className="outer">
            <div
            className="inner"
            ></div>
          </div>
        </Col>
      </Row>

      <Row className="company-info g-0">
        <Col md={12}>
          <div className="d-flex border-bottom-2 border-info">
            <Gear size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Requirements</h6>
              {requirements &&
                requirements.map((requirement) => {
                  return (
                    <p className="mb-0" key={Math.random() * 100}>
                      - {requirement}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="outer">
            <div
            className="inner"
            ></div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3 company-info g-0 pb-2">
        <Col md={12}>
          <div className="d-flex">
            <PersonCircle size={25} className="align-self-center me-3 ms-3" />
            <div>
              <h6 className="mb-0">Report To</h6>
              <p className="mb-0" data-testid="reportingperson">
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
