import React from "react";

const Swatch = ({ farge }) => (
  <div
    style={{
      width: 22,
      height: 22,
      backgroundColor: farge,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.33)"
    }}
  />
);

export default Swatch;
