import React,{useContext} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container, Card, Button, Media } from "react-bootstrap"
import { JobDetailsContext } from "../context/JobContext"
import {rejectJob,acceptJob} from "../utils/workerOptions.util"

function WorkerOptions({workerId,jobId}) {
  const jobContext = useContext(JobDetailsContext)

  return (
    <Row className="mb-3 g-1">
      <Col>
        <Button className="w-100" variant="secondary" data-testid="rejectjob" onClick={()=>rejectJob(workerId,jobId, jobContext)}>
          No thanks
        </Button>
      </Col>

      <Col>
        <Button className="w-100"  variant="dark" data-testid="acceptjob" onClick={()=>acceptJob(workerId,jobId, jobContext)}>
          I will take it
        </Button>
      </Col>
    </Row>
  );
}

export default WorkerOptions;
