import React from "react";

function harFornuftigKart(url) {
  const urlparts = (url || "").split("/");
  if (urlparts.length < 1) return null;
  if (urlparts.length > 2) return true;
  switch (urlparts[0]) {
    case "Fylke":
    case "Naturvernområde":
      return true;
    default:
      return false;
  }
}

const Kart = ({ url, children }) => {
  if (!harFornuftigKart(url)) return null;
  const previewUrl = `https://data.artsdatabanken.no/${url}/thumbnail.32633.blur.png`;
  return (
    <div className="table" style={{}}>
      <h4>Utbredelse</h4>
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
