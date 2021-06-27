import React,{useContext} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container, Card, Button, Media } from "react-bootstrap";
import { JobDetailsContext } from "../context/JobContext";
function WorkerOptions({workerId,jobId}) {
  console.log(workerId)
  console.log(jobId)

  const jobContext = useContext(JobDetailsContext)

  async function acceptJob(workerId, jobId){
    console.log('in accept job')
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/accept`)
    const data = await res.json();
    data && jobContext.dispatch({type:'ACCEPT_JOB',payload:{workerId,jobId}})
    
  }

  async function rejectJob(workerId, jobId){
    console.log('in reject job')
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/reject`)
    const data = await res.json()
    data && jobContext.dispatch({type:'REJECT_JOB',payload:{workerId,jobId}})
  }

  return (
    <Row className="mb-3 g-1">
      <Col>
        <Button className="w-100" variant="secondary" onClick={()=>rejectJob(workerId,jobId)}>
          No thanks
        </Button>
      </Col>

      <Col>
        <Button className="w-100"  variant="dark" onClick={()=>acceptJob(workerId,jobId)}>
          I will take it
        </Button>
      </Col>
    </Row>
  );
}

export default WorkerOptions;
