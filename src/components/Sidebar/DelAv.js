import React from "react";

const DelAv = ({ overordnede }) => {
  if (overordnede.length <= 0) return null;
  return (
    <React.Fragment>
      {overordnede.map(e => <Overordnet key={e.kode} {...e} />).reverse()}
    </React.Fragment>
  );
};

const Overordnet = ({ kode, tittel, url, farge }) => {
  var tittel1 = Object.values(tittel)[0];
  if (tittel1 === "Katalog") {
    tittel1 = "Hovedsiden";
  }
  return (
    <React.Fragment>
      <a href={url === "Katalog" ? "/" : `${url}`}>
        <li className="sidebar_link">{tittel1}</li>
      </a>
    </React.Fragment>
  );
};

export default DelAv;
