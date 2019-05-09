import React from "react";

const Bilde = ({ url, kildeurl }) => {
  if (!url) return null;
  return (
    <div className="main_content_image_container">
      <img
        className="main_content_image"
        src={url}
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (kildeurl) window.location = kildeurl;
        }}
        onError={e => (e.target.style.display = "none")}
      />
    </div>
  );
};

export default Bilde;
