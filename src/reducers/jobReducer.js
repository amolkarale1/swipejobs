const initialstate = [];
export function jobReducer(state = initialstate, action) {

  switch (action.type) {
    case "SET_WORKER_PROFILE":
      const prevState = [...state];

      let workerDetails = {
        workerId: action.payload.workerId,
        personName: `${action.payload.firstName} ${action.payload.lastName}`,
        matchingJobs: [],
        message:''
      };

      return [...prevState, workerDetails];

    case "SET_MATCHING_JOBS":
      const workerPrevState = [...state];
      workerPrevState[0].matchingJobs = action.payload;
      return workerPrevState;

    case "ACCEPT_JOB" :
      console.log(action.payload)
      const prevData = [...state]
      let matchingJobs = prevData[0].matchingJobs;
      matchingJobs = matchingJobs.map((value)=>{
        if( value.jobId == action.payload.jobId ){
          value.is_accepted = 1
        } else {
          value.is_accepeted = 0
        }
        return value;
      })
      prevData[0].matchingJobs = matchingJobs;
      return prevData;

      case "REJECT_JOB" :
      console.log(action.payload)
      break;
  }
  return state;
}
