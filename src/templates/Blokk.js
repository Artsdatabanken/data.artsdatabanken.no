import React from "react";

const Blokk = ({ tittel, children }) => {
  return (
    <div class="blokk">
      <h4 class="blokk">{tittel}</h4>
      {children}
    </div>
  );
};

export default Blokk;
