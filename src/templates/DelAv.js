import React from "react";
import Tag from "./Tag";
import Swatch from "./Nin/Swatch";
import Blokk from "./Blokk";

const DelAv = ({ overordnede }) => {
  if (overordnede.length <= 0) return null;
  return (
    <Blokk tittel="Inngår i">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "max-content max-content max-content",
          gridGap: "0.3em",
          alignItems: "center"
        }}
      >
        {overordnede.reverse().map(e => (
          <Overordnet key={e.kode} {...e} />
        ))}
      </div>
    </Blokk>
  );
};

const Overordnet = ({ kode, tittel, url, farge }) => {
  return (
    <React.Fragment>
      <Swatch farge={farge} />
      <a href={"/" + url + "/index.html"}>
        <div style={{}}>{tittel.nb}</div>
      </a>
      {kode.length > 1 ? <Tag>{kode.split("-").pop()}</Tag> : <div />}
    </React.Fragment>
  );
};

export default DelAv;
