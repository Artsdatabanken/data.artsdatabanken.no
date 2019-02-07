import React from "react";

const Bilde = ({ url, alt, lisens, opphav, utgiver }) => (
  <div
    style={{
      display: "block",
      float: "right"
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
