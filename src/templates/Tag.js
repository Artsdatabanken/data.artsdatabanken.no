import React, { Component } from "react";
import PropTypes from "prop-types";

const Tag = ({ children }) => (
  <div
    style={{
      display: "flex",
      borderRadius: 16,
      margin: 0,
      height: 26,
      color: "rgba(0,0,0,0.7)",
      alignItems: "center",
      whiteSpace: "nowrap",
      justifyContent: "center",
      marginLeft: 8,
      backgroundColor: "rgba(0,0,0,0.1)"
    }}
  >
    <div style={{ paddingLeft: 12, paddingRight: 12 }}>
      {children.split("-").pop()}
    </div>
  </div>
);

export default Tag;
