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
  <React.Fragment>
    {noder.map(e => {
      return <RelasjonNode key={e.kode} {...e} />;
    })}
  </React.Fragment>
);

const RelasjonNode = ({ relasjon, kode, tittel, farge, url }) => {
  const tittel1 = Object.values(tittel)[0];
  return (
    <React.Fragment>
      <a href={"/" + url + "/index.html"}>
        <li className="sidebar_link">
          <Swatch farge={farge} /> {tittel1}
          <div>{relasjon ? "(" + relasjon + ")" : ""}</div>
          <Tag>{kode}</Tag>
        </li>
      </a>      
    </React.Fragment>
  );
};

function capitalize(str) {
  if (str.length < 1) return str;
  return str[0].toUpperCase() + str.substring(1);
}

export default RelasjonerSeksjon;
