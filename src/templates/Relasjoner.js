import React from "react";
import Blokk from "./Blokk";

const RelasjonerSeksjon = ({ relasjoner }) => {
  if (!relasjoner) return null;
  return relasjoner.map(e => {
    if (e.noder.length <= 0) return null;
    return (
      <Blokk tittel={capitalize(e.type)} key={e.type}>
        <Relasjoner noder={e.noder} />
      </Blokk>
    );
  });
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
    <a href={url}>
      <li className="sidebar_link">
        {tittel1}
        <div>{relasjon ? "(" + relasjon + ")" : ""}</div>
      </li>
    </a>
  );
};

function capitalize(str) {
  if (str.length < 1) return str;
  return str[0].toUpperCase() + str.substring(1);
}

export default RelasjonerSeksjon;
