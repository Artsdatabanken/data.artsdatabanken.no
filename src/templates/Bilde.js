import React from "react";

const Bilde = ({ url, alt, lisens, opphav, utgiver }) => (
  <div
    style={{
      display: "block",
      float: "right",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.33)"
    }}
  >
    <img
      src={url}
      alt={alt}
      onError={e => {
        e.target.style.display = "none";
      }}
    />
  </div>
);

export default Bilde;
