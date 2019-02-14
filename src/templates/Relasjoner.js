import Swatch from "./Nin/Swatch";
import Tag from "./Tag";
import React from "react";
import Blokk from "./Blokk";

const RelasjonerSeksjon = ({ relasjoner }) => {
  if (!relasjoner) return null;
  return relasjoner.map(e => (
    <Blokk tittel={capitalize(e.type)} key={e.type}>
      <Relasjoner noder={e.noder} />
    </Blokk>
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
      <a href={"/" + url + "/index.html"}>
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
