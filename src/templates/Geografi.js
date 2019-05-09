import React from "react";

const Geografi = ({ url, utbredelse, children }) => {
  if (!utbredelse) return null;
  const previewUrl = `https://data.artsdatabanken.no/${url}/thumbnail.32633.blur.png`;
  return (
    <div className="table" style={{}}>
      <h2>Geografi</h2>
      {children}
      <h4>Utbredelse</h4>
      <div className="imagecontainer">
        <a href={"https://nin.artsdatabanken.no/" + url}>
          <img
            src="https://data.artsdatabanken.no/Basiskart/NaturalEarth/bak_liten_grå.32633.png"
            alt="bakgrunnskart"
          />
          <img src={previewUrl} className="imageFilter" alt="dekningskart" />
        </a>
      </div>
    </div>
  );
};

export default Geografi;
