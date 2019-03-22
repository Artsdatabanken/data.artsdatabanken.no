import React from "react";

const Tag = ({ children }) => (
  <div className="tag">
    <div style={{ paddingLeft: 12, paddingRight: 12 }}>
      {children.split("-").pop()}
    </div>
  </div>
);

export default Tag;
