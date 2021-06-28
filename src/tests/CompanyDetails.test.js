import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import CompanyDetails from "../components/CompanyDetails";

describe("<CompanyDetails />", () => {
  test("Company Details rendered ", () => {
    let companyInfo = {
      name: "cd bane",
      address: { formattedAddress: "chicago" },
      reportTo: { name: "eric", phone: "3322222" },
    };
    let jobInfo = {
      name: "Helper",
      imageUrl: "https://imgs.swipejobs.com/js/job-category/construction-1.jpg",
    };
    let requirements = ["Head Gear", "Shoes"];
    let wagesPerHour = 2000;
    let shiftDates = [
      { startDate: "2019-09-04T21:00:00Z", endDate: "2019-09-05T05:00:00Z" },
    ];

    const component = render(
      <CompanyDetails
        companyInfo={companyInfo}
        jobInfo={jobInfo}
        milesToTravel={11.56}
        requirements={[requirements]}
        wagesPerHour={wagesPerHour}
        shiftDates={[shiftDates]}
      />
    );

    expect(component.getByTestId(/jobname/i).textContent).toBe(jobInfo.name);
    expect(component.getByTestId(/companyname/i).textContent).toBe(
      companyInfo.name
    );
    expect(component.getByTestId(/reportingperson/i).textContent).toMatch(
      `${companyInfo.reportTo.name} ${companyInfo.reportTo.phone}`
    );
    expect(component.getByTestId(/milesToTravel/i).textContent).toMatch(
      "11.56"
    );
  });

  test("Passing No Props", () => {
    const component = render(<CompanyDetails />);
    expect(component.getByText('No Data found')).toBeInTheDocument()
  });
});
