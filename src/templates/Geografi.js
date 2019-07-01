import React from "react";

const Geografi = ({ url, children }) => {
  const previewUrl = `https://data.artsdatabanken.no/${url}/thumbnail.png`;
  return (
    <div className="table" style={{}}>
      <h2>Geografi</h2>
      {children}
      <h3>Forhåndsvisning</h3>
      <div className="imagecontainer">
        <a href={"https://nin.artsdatabanken.no/" + url}>
          <img src={previewUrl} alt="kartvisning" />
        </a>
      </div>
      {false && (
        <>
          <h3>Utbredelse</h3>
          <div className="imagecontainer">
            <a href={"https://nin.artsdatabanken.no/" + url}>
              <img
                src="https://data.artsdatabanken.no/Basiskart/NaturalEarth/bak_liten_grå.32633.png"
                alt="bakgrunnskart"
              />
              <img
                src={previewUrl}
                className="imageFilter"
                alt="dekningskart"
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Geografi;
