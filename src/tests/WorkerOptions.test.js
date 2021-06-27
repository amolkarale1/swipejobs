import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import WorkerOptions from '../components/WorkerOptions'
import { JobDetailsContext } from "../context/JobContext"
import {rejectJob,acceptJob} from "../utils/workerOptions.util"
import axios from 'axios';
 import jobReducer from '../reducers/jobReducer';
 
jest.mock('axios');

describe("<WorkerOptions />", () => {
  test("Accept a Job", async () => {
      const component = render (
      <JobDetailsContext.Provider value={[{}]}>
        <WorkerOptions workerId={111} jobId={'dder333'}/>
      </JobDetailsContext.Provider>
      )

      fireEvent.click(component.getByTestId('acceptjob'), {
        target: { value: 'I will take it' },
      });
      const data = { success:true };
 
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      const success = await acceptJob("7f90df6e-b832-44e2-b624-3143d428001f", "5775d8e18a488e6c5bb08c13",JobDetailsContext);
      expect(success).toEqual(data.success);
  });
});