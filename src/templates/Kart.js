import React from "react";

const Kart = ({ url, children }) => {
  if (!url) return null;
  const previewUrl = `https://data.artsdatabanken.no/${url}/thumbnail.32633.blur.png`;
  return (
    <div class="table" style={{}}>
      <h4>Dekningsområde for kartdata</h4>

      {children}
      <div className="imagecontainer">
        <a href={"http://nin.artsdatabanken.no/" + url}>
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

export default Kart;
