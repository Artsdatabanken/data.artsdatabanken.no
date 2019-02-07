import React from "react";
import Tag from "./Tag";
import Swatch from "./Nin/Swatch";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

const Barna = ({ barn }) => {
  return (
    <div>
      <h3>Inndelt i</h3>
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
    </div>
  );
};

const Barn = ({ kode, tittel, farge, intervall }) => (
  <React.Fragment>
    <Swatch farge={farge} />
    <a href={"./" + tittel.nb}>
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
      {minTekst} - {maxTekst} {måleenhet}
    </div>
  );
};

export default Barna;
