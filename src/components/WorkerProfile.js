import React,{useContext} from 'react'
import {JobDetailsContext} from '../context/JobContext'
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container, Card, Button, Media } from "react-bootstrap";
import { CalendarFill,GeoAlt, Gear, PersonCircle } from 'react-bootstrap-icons';
import job from '../images/job.jpeg'
function WorkerProfile() {
   const state = useContext(JobDetailsContext)
   if(state.state.length > 0 ){
        const {personName,matchingJobs} = state.state[0]
   }
    return (
            
      <Container fluid>
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <Row>
        <Col
            
            style={{
              backgroundColor: "black",
              color:'white'
            }}

            className='text-start'
          >
           <h3>swipe jobs</h3>
          </Col>
          <Col
            
            style={{
              backgroundColor: "black",
              color:'white'
            }}

            className='text-end'
          >
           <h3>Jim Rose</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{padding:'15px',backgroundColor:'lightblue'}}>
            <Row>
          <Col md={12}>
            <Card >
              { <Card.Img variant="top" src={job} width={170} height={100} /> }
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

<Row className="mb-3 g-0 p-1" style={{backgroundColor:'green'}}>
  <Col className=''>
  <div>
              <p className="mb-0">Distance</p>
              <h4 className="mb-0">5.6 miles</h4>
          </div>
  </Col>
  <Col className='' >
 <div className = "text-end">
              <p className="mb-0">Hourly rate</p>
              <h4 className="mb-0">$13.50</h4>
          </div>
  </Col>
</Row>


        <Row className="mb-3">
          <Col md={12}>
        <div className="d-flex">
  <CalendarFill size={25} className="align-self-center me-3"/>
  <div>
    <h5 className="fw-bold mb-0">
      Shift Dates
    </h5>
    <p className="mb-0">APR 7, WED 8:00 AM - 10:00 PM PDT</p>
                <p className="mb-0">APR 7, WED 8:00 AM - 10:00 PM PDT</p>
  </div>
</div>
</Col>
          
        </Row>

        <Row className="mb-3">
          <Col md={12}>
        <div className="d-flex">
  <GeoAlt size={25} className="align-self-center me-3"/>
  <div>
    <h5 className="fw-bold mb-0">
      Location
    </h5>
    <p className="mb-0">
              123 Main Street Tacome
    </p>
    <p className="mb-0">
      5.62 miles from your Job Search Location
    </p>
  </div>
</div>
</Col>
          
        </Row>

        
        <Row className="mb-3">
          <Col md={12}>
        <div className="d-flex">
  <Gear size={25} className="align-self-center me-3"/>
  <div>
    <h5 className="fw-bold mb-0">
      Requirements
    </h5>
    <p className="mb-0">
      - Safety Vest
    </p>
    <p className="mb-0">
      - Hard Hat
    </p>
  </div>
</div>
</Col>
          
        </Row>

        <Row className="mb-3">
          <Col md={12}>
        <div className="d-flex">
  <PersonCircle size={25} className="align-self-center me-3"/>
  <div>
    <h5 className="fw-bold">
      Report To
    </h5>
    <p className="mb-0">
            Dave(123) 456 789s
    </p>
    
  </div>
</div>
</Col>
          
        </Row>



        <Row className="mb-3 g-1">
         
          <Col >
            <Button style={{width:'100%'}} variant="secondary">No thanks</Button>
          </Col>

          <Col >
            <Button style={{width:'100%'}} variant="dark">I will take it</Button>
          </Col>
    
        </Row>
      






         



          </Col>
        </Row>


        </Col>



        </Row>
</Container>
    
    )
}

export default WorkerProfile
