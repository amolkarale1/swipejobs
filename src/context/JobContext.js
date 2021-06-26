import React, { useEffect, useReducer } from "react";
import { jobReducer } from "../reducers/jobReducer";
export const JobDetailsContext = React.createContext();

const initialstate = [];
export const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";
function JobContext({ children }) {
  const [state, dispatch] = useReducer(jobReducer, initialstate);
  useEffect(() => {
    getProfile();
  }, []);

  function getProfile() {
    fetch(`https://test.swipejobs.com/api/worker/${workerId}/profile`)
      .then((res) => {
        return res.json();
      })
      .then((data) => dispatch({ type: "SET_WORKER_PROFILE", payload: data }))
      .then(() => getMatchingJobs());
  }

  function getMatchingJobs() {
    fetch(`https://test.swipejobs.com/api/worker/${workerId}/matches`)
      .then((res) => {
        return res.json();
      })
      .then((data) => dispatch({ type: "SET_MATCHING_JOBS", payload: data }));
  }
  return (
    <JobDetailsContext.Provider value={{ state, dispatch }}>
      {children}
    </JobDetailsContext.Provider>
  );
}

export default JobContext;
