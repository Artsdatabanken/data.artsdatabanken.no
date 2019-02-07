import Swatch from "./Nin/Swatch";
import Tag from "./Tag";
import React from "react";

const RelasjonerSeksjon = ({ relasjoner }) => {
  if (!relasjoner) return null;
  return relasjoner.map(e => (
    <div key={e.type}>
      <h3>{capitalize(e.type)}</h3>
      <Relasjoner noder={e.noder} />
    </div>
  ));
};

const Relasjoner = ({ noder }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "max-content max-content max-content max-content",
      gridGap: "0.3em",
      alignItems: "center"
    }}
  >
    {noder.map(e => {
      return <RelasjonNode key={e.kode} {...e} />;
    })}
  </div>
);

const RelasjonNode = ({ relasjon, kode, tittel, farge, url }) => {
  return (
    <React.Fragment>
      <Swatch farge={farge} />
      <a href={"/" + url}>
        <div style={{}}>{tittel.nb}</div>
      </a>
      <div style={{}}>{relasjon ? "(" + relasjon + ")" : ""}</div>
      <div style={{ float: "right" }}>
        <Tag>{kode}</Tag>
      </div>
    </React.Fragment>
  );
};

function capitalize(str) {
  if (str.length < 1) return str;
  return str[0].toUpperCase() + str.substring(1);
}

export default RelasjonerSeksjon;
