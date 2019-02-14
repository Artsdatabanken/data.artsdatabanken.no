import React from "react";
import Tag from "./Tag";
import Swatch from "./Nin/Swatch";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import Blokk from "./Blokk";

const Barna = ({ barn }) => {
  if (barn.length <= 0) return null;
  return (
    <Blokk tittel="Inndelt i">
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "max-content max-content max-content max-content",
          gridGap: "0.3em",
          alignItems: "center"
        }}
      >
        {barn.map(e => (
          <Barn key={e.kode} {...e} />
        ))}
      </div>
    </Blokk>
  );
};

const Barn = ({ kode, tittel, url, farge, intervall }) => (
  <React.Fragment>
    <Swatch farge={farge} />
    <a href={"/" + url + "/index.html"}>
      <div>{tittel.nb}</div>
    </a>
    <Tag>{kode}</Tag>
    <div style={{ display: "flex" }}>
      <Intervaller intervall={intervall} />
    </div>
  </React.Fragment>
);

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
