import React from "react";

const Swatch = ({ farge }) => (
  <div
    style={{
      width: 22,
      height: 22,
      backgroundColor: farge,
      borderStyle: "solid",
      borderWidth: 1,
      marginRight: 4,
      boxShadow: "hsla(0, 0%, 0%, 0.3) 1px 1px 5px 0px",
      borderColor: "rgba(0,0,0,0.33)"
    }}
  />
);

export default Swatch;
