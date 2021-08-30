/* eslint-disable react/forbid-foreign-prop-types */
import { checkPropTypes } from "prop-types";

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsError;
};
export const findByTestArra = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
