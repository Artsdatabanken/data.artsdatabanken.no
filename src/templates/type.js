import React from "react";
import Seo from "../components/Seo";
import Kart from "./Nin/Kart";
import OpenData from "./OpenData";
import OpenApi from "./OpenApi";
import Barna from "./Barna";
import Bilde from "./Bilde";
import DelAv from "./DelAv";
import Relasjoner from "./Relasjoner";
import Statistikk from "./Statistikk";
import "./table.css";

export default props => {
  const {
    pageContext: { type }
  } = props;
  return (
    <div>
      <Seo pageMeta={type} />
      <div style={{ margin: "1rem" }}>
        <Bilde
          {...type.foto.forside}
          alt={"Foto av " + type.tittel.nb.toLowerCase()}
        />
        <img
          style={{ display: "block" }}
          src="https://maps.artsdatabanken.no/Datakilde/Artsdatabanken/logo.png"
        />
        <small>Oppdatert {new Date().toISOString()}</small>
        <h2>Åpne data: {type.tittel.nb}</h2>
        <div>
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <DelAv overordnede={type.overordnet} />
          <Barna barn={type.barn} />
          <Relasjoner relasjoner={type.graf} />
        </div>
        <OpenApi api={type.api} tittel={type.tittel.nb} />
        <OpenData kartformater={type.kartformat} tittel={type.tittel.nb} />
        <Kart url={type.url}>
          <Statistikk tittel={type.tittel.nb} {...type.stats} />
        </Kart>
      </div>
    </div>
  );
};

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};
