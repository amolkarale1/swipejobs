const initialstate = [];
export function jobReducer(state = initialstate, action) {
  switch (action.type) {
    case "SET_WORKER_PROFILE":
      const newWorkerState = [...state];

      let workerDetails = {
        workerId: action.payload.workerId,
        personName: `${action.payload.firstName} ${action.payload.lastName}`,
        matchingJobs: [],
        message: "",
      };

      return [...newWorkerState, workerDetails];

    case "SET_MATCHING_JOBS":
      const newStateAfterMatchingJobs = [...state];
      newStateAfterMatchingJobs[0].matchingJobs = action.payload;
      return newStateAfterMatchingJobs;

    case "ACCEPT_JOB":
      console.log(action.payload);
      const prevData = [...state];
      let matchingJobs = prevData[0].matchingJobs;
      matchingJobs = matchingJobs.map((value) => {
        if (value.jobId == action.payload.jobId) {
          value.is_accepted = 1;
        } else {
          value.is_accepeted = 0;
        }
        return value;
      });
      prevData[0].matchingJobs = matchingJobs;
      return prevData;

    case "REJECT_JOB":
      const newStateAfterReject = [...state];
      let jobs = newStateAfterReject[0].matchingJobs;
      if (jobs != undefined && jobs.length > 0) {
        jobs = jobs.filter((value) => {
          return value.jobId != action.payload.jobId;
        });
        newStateAfterReject[0].matchingJobs = jobs;
      }
      return newStateAfterReject;
    default:
      return state;
  }
}
