import React from "react";

const HeaderView = ({ title }) => {
  return (
    <div className="header_background">
      <div className="header_padding">
        <img src="/logo.png" className="top_image" alt="artsdatabanken logo" />
        <h1 style={{ fontWeight: 500, color: "#eee" }} className="header_title">
          {title || "Åpne data"}
        </h1>
      </div>
    </div>
  );
};

export default HeaderView;
