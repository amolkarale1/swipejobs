import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Header from '../components/Header'

describe("<Header />", () => {
  test("Header Component has rendered or not",  () => {
    const component = render (<Header personName={'Amol'}/>)
    const personName = component.getByTestId(/personname/i)
    expect(personName.textContent).toBe("Amol")
    expect(component.getByTestId(/websitename/i).textContent).toBe("swipe jobs")
  });

  test("Empty props to Header Component", () =>{
    const component = render (<Header/>)
    const personName = component.getByTestId(/personname/i)
    expect(personName.textContent).toBe('')
  });
});