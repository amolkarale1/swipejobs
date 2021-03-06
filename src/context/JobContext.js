import React, { useEffect, useReducer } from "react"
import { jobReducer } from "../reducers/jobReducer"
import axios from 'axios'

export const JobDetailsContext = React.createContext()

const initialstate = [];
export const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";
function JobContext({ children }) {
  const [state, dispatch] = useReducer(jobReducer, initialstate);
  
  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const data = await axios(`https://test.swipejobs.com/api/worker/${workerId}/profile`)
    dispatch({ type: "SET_WORKER_PROFILE", payload: data.data })
    getMatchingJobs()
  }

  async function getMatchingJobs() {
    const data = await axios(`https://test.swipejobs.com/api/worker/${workerId}/matches`)
    dispatch({ type: "SET_MATCHING_JOBS", payload: data.data })
  }

  return (
    <JobDetailsContext.Provider value={{ state, dispatch }}>
      {children}
    </JobDetailsContext.Provider>
  );
}

export default JobContext;
