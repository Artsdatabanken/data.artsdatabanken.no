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
  const tittel = Object.values(type.tittel)[0];
  return (
    <div>
      <Seo pageMeta={type} tittel={tittel} />
      <div style={{ margin: "1rem" }}>
        <img
          style={{ display: "block", float: "right", width: 204 }}
          src="https://data.artsdatabanken.no/Datakilde/Artsdatabanken/logo_med_navn_408.png"
        />
        <h2>{tittel} - Åpne data</h2>
        <div style={{ paddingBottom: 12 }}>
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        <Bilde {...type.foto.forside} alt={"Foto av " + tittel.toLowerCase()} />
        <Statistikk tittel={tittel} {...type.stats} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <DelAv overordnede={type.overordnet} />
          <Barna barn={type.barn} />
          <Relasjoner relasjoner={type.graf} />
        </div>
        <OpenApi api={type.api} tittel={tittel} />
        <OpenData kartformater={type.kartformat} />
        <Kart url={type.url} />
        <small>
          Oppdatert {new Date().toISOString()} -{" "}
          <a href="https://github.com/Artsdatabanken/adb-data-portal/">
            Github
          </a>
        </small>
      </div>
    </div>
  );
};

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};
