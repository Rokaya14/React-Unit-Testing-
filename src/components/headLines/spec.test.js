/* eslint-disable react/forbid-foreign-prop-types */
// eslint-disable-next-line react/forbid-foreign-prop-types
import React from "react";
import { shallow } from "enzyme";
import HeadLine from ".";
import { findByTestArra, checkProps } from "../../../Utills/index";

const setUp = (props = {}) => {
  return shallow(<HeadLine />);
};

describe("HeadLine Component", () => {
  test("render componennt without error", () => {
    const component = setUp();
    const wrapper = findByTestArra(component, "HeadLineComponent");
    expect(wrapper.length).toBe(1);
  });

  test("checking propTypes should not throw a warning", () => {
    const expectedProps = {
      header: "kmv,kmvm",
      desc: "kmvmkmv",
      temArr: {
        fName: "joeefef",
        lName: "Bdewfloggs",
        email: "joefeebloggs@gmail.com",
        age: 39,
        onLineStatus: false,
      },
    }; // mocking props !

    const propsError = checkProps(HeadLine, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
