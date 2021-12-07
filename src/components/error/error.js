import React from "react";

const Error = (props) => {
  let { errorContent } = props;

  return (
    <>
      <div className="col-12 col-md-2"></div>
      <div className="error-element col-12 col-md-8">
        <span id="error-text">Error: {errorContent}</span>
      </div>
      <div className="col-12 col-md-2"></div>
    </>
  );
};

export default Error;
