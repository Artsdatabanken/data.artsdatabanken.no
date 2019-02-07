import React, { Component } from "react";
import PropTypes from "prop-types";

const Bilde = ({ url, alt, lisens, opphav, utgiver }) => (
  <div
    style={{
      display: "block",
      xmargin: "1rem",
      xdisplay: "float",
      float: "right",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.33)"
    }}
  >
    <img src={url} alt={alt} />
  </div>
);

export default Bilde;
