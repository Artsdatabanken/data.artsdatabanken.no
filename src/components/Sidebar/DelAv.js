import React from "react";

const DelAv = ({ overordnede }) => {
  if (overordnede.length <= 0) return null;
  return (
    <React.Fragment>
      <Overordnet tittel={{ nb: "Hovedside" }} url="/" />
      {overordnede.map(e => <Overordnet key={e.kode} {...e} />).reverse()}
    </React.Fragment>
  );
};

const Overordnet = ({ kode, tittel, url, farge }) => {
  var tekst = tittel.nb || tittel.sn;
  return (
    <a href={url}>
      <li className="sidebar_link">{tekst}</li>
    </a>
  );
};

export default DelAv;
