import axios from 'axios'

export async function acceptJob(workerId, jobId, jobContext) {
  const data = await axios(
    `https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/accept`
  );

  data && jobContext.dispatch({ type: "ACCEPT_JOB", payload: { workerId, jobId } });
  return true;
}

export async function rejectJob(workerId, jobId, jobContext) {
  const data = await axios(
    `https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/reject`
  );
  data && jobContext.dispatch({ type: "REJECT_JOB", payload: { workerId, jobId } });
}
