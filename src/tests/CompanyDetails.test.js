import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import CompanyDetails from "../components/CompanyDetails"

describe("<CompanyDetails />", () => {
  test("Company Details rendered ", () => {
    const component = render(<CompanyDetails
        companyInfo ={ }
        jobInfo= {}
        milesToTravel = {}
        requirements = {}
        wagesPerHour = {}
        shiftDates = {}

        />);
    component.debug()
  });
});
