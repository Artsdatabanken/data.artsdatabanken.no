import React from "react";

const DelAv = ({ overordnede }) => {
  if (overordnede.length <= 0) return null;
  return (
    <React.Fragment>
      {overordnede.map(e => <Overordnet key={e.url} {...e} />).reverse()}
    </React.Fragment>
  );
};

const Overordnet = ({ tittel, url }) => {
  var tekst = tittel.nb || tittel.sn;
  return (
    <a href={url}>
      <li className="sidebar_link">{tekst}</li>
    </a>
  );
};

export default DelAv;
