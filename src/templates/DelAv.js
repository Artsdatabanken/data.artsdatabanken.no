import React from "react";
import Tag from "./Tag";
import Swatch from "./Nin/Swatch";

const DelAv = ({ overordnede }) => (
  <div>
    <h3>Inngår i</h3>
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
  </div>
);

const Overordnet = ({ kode, tittel, url, farge }) => {
  return (
    <React.Fragment>
      <Swatch farge={farge} />
      <a href={"/" + url}>
        <div style={{}}>{tittel.nb}</div>
      </a>
      {kode.length > 1 ? <Tag>{kode.split("-").pop()}</Tag> : <div />}
    </React.Fragment>
  );
};

export default DelAv;
