import React from "react";

const Blokk = ({ tittel, children }) => {
  return (
    <div className="blokk">
      <h4 className="blokk">{tittel}</h4>
      {children}
    </div>
  );
};

export default Blokk;
