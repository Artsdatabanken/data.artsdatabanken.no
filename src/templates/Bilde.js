import React from "react";

const Bilde = ({ url, alt, lisens, opphav, utgiver }) => {
  if (!url) return null;
  return (
    <div className="main_content_image_container">
      <img
        className="main_content_image"
        src={url}
        alt={alt}
        onError={e => (e.target.style.display = "none")}
      />
    </div>
  );
};

export default Bilde;
