import React from "react";

const Bilde = ({ url, alt, lisens, opphav, utgiver }) => (
  <div
    style={{
      marginBottom: 12,
      display: "inline-block",
      boxShadow: "hsla(0, 0%, 0%, 0.14) 0px 2px 14px 0px"
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
