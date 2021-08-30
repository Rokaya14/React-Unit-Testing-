import React from "react";
import { shallow } from "enzyme";
import Header from "./index.jsx";
import { findByTestArra } from "../../../Utills";
const setUp = (props = {}) => {
  return shallow(<Header />);
};

describe("header Component", () => {
  test("should render without error", () => {
    const component = setUp();

    // console.log(component.debug());
    const wrapper = findByTestArra(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
});
