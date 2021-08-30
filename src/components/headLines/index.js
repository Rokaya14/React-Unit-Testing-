import React from "react";
import PropTypes from "prop-types";

const HeadLine = ({ header, desc, temArr }) => {
  return (
    <div data-test="HeadLineComponent">
      <h1 data-test="header"> {header}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
};
HeadLine.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  temArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onLineStatus: PropTypes.bool,
    })
  ),
};
export default HeadLine;
