import React from "react";
import HeaderView from "./HeaderView";

const Header = ({ title }) => {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 5 }}>
      <HeaderView title={title} />
      <div
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          color: "#4c4a48",
          zIndex: 5,
          right: 12,
          top: 9,
          paddingLeft: 8,
          paddingRight: 8,
          width: 392
        }}
      >
      </div>
    </div>
  );
};

export default Header;
