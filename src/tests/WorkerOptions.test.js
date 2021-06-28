import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import WorkerOptions from "../components/WorkerOptions";
import WorkerProfile from "../components/WorkerProfile";
import { JobDetailsContext } from "../context/JobContext";
import { rejectJob, acceptJob } from "../utils/workerOptions.util";
import axios from "axios";

jest.mock("axios");
const state = [
  {
    workerId: "7f90df6e-b832-44e2-b624-3143d428001f",
    personName: "Jim Rose",
    matchingJobs: [
      {
        jobId: "5775d8e18a488e6c5bb08333",
        jobTitle: {
          name: "Construction General Helper",
          imageUrl:
            "https://imgs.swipejobs.com/js/job-category/construction-1.jpg",
        },
        company: {
          name: "Steve Smith Construction",
          address: {
            formattedAddress: "430 Smith St, Chicago, IL 60654, USA",
            zoneId: "America/Chicago",
          },
          reportTo: {
            name: "Judy Smith",
            phone: "2130010012",
          },
        },
        wagePerHourInCents: 950,
        milesToTravel: 3.4,
        shifts: [
          {
            startDate: "2019-09-04T21:00:00Z",
            endDate: "2019-09-05T05:00:00Z",
          },
        ],
        branch: "Downtown",
        branchPhoneNumber: "2531233322",
        is_accepted: 1,
      },
      {
        jobId: "5775d8e18a488e6c5bb08c13",
        jobTitle: {
          name: "Driver",
          imageUrl:
            "https://imgs.swipejobs.com/js/job-category/driver-service-3.jpg",
        },
        company: {
          name: "C.D. Barnes and Associates",
          address: {
            formattedAddress: "123 Main Street, Chicago, IL 60654",
            zoneId: "America/Chicago",
          },
          reportTo: {
            name: "Steve Rogers",
          },
        },
        wagePerHourInCents: 1081.7,
        milesToTravel: 11.666,
        shifts: [
          {
            startDate: "2019-09-04T21:00:00Z",
            endDate: "2019-09-05T05:00:00Z",
          },
        ],
        branch: "Chicago",
        branchPhoneNumber: "2531233311",
        requirements: ["Safety Vest", "Hart Hat"],
        is_accepeted: 0,
      },
    ],
    message: "",
  },
];

describe("<WorkerOptions />", () => {
  test("Accept a Job", async () => {
    const component = render(
      <JobDetailsContext.Provider value={[{}]}>
        <WorkerOptions workerId={111} jobId={"dder333"} />
      </JobDetailsContext.Provider>
    );

    fireEvent.click(component.getByTestId("acceptjob"), {
      target: { value: "I will take it" },
    });
    const data = { success: true };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    const success = await acceptJob(
      "7f90df6e-b832-44e2-b624-3143d428001f",
      "5775d8e18a488e6c5bb08c13",
      JobDetailsContext
    );
    expect(success).toEqual(data.success);
  });

  test("On accept Job", () => {
    const handleOnReject = jest.fn();
    const component = render(
      <WorkerOptions
        workerId={"7f90df6e-b832-44e2-b624-3143d428001f"}
        jobId={"5775d8e18a488e6c5bb08c13"}
      />
    );
    const acceptJobBtnEl = component.getByTestId("acceptjob");
    fireEvent.click(acceptJobBtnEl);

    const jobDetails = render(
      <JobDetailsContext.Provider value={{ state }}>
        <WorkerProfile />
      </JobDetailsContext.Provider>
    );
    expect(
      jobDetails.getByText("Job Accepted Successfully")
    ).toBeInTheDocument();
  });
});
