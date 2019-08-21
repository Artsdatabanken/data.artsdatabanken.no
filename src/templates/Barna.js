import React from "react";

const Barna = ({ barn }) => {
  if (barn.length <= 0) return null;
  return (
    <React.Fragment>
      {barn.map(e => (
        <Barn key={e.kode} {...e} />
      ))}
    </React.Fragment>
  );
};

const Barn = ({ kode, tittel, url, farge, intervall }) => {
  const tittel1 = tittel.nb || Object.values(tittel)[0];
  return (
    <React.Fragment>
      <a href={"/" + url}>
        <li className="sidebar_link sidebar_children">{tittel1}</li>
      </a>
      <div style={{ display: "flex" }}>
        <Intervaller intervall={intervall} />
      </div>
    </React.Fragment>
  );
};

const Intervaller = ({ intervall }) => {
  if (Array.isArray(intervall))
    return intervall.map(i => {
      return <Intervall {...i} key={i.min} />;
    });
  return <Intervall {...intervall} />;
};

const Intervall = ({ minTekst, maxTekst, måleenhet }) => {
  if (!minTekst && !maxTekst) return "";
  return (
    <div style={{ marginRight: 16 }}>
      {minTekst || "0"} - {maxTekst} {måleenhet}
    </div>
  );
};

export default Barna;
