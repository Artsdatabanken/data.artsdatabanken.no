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
import "./style.css";

export default props => {
  const {
    pageContext: { type }
  } = props;
  const tittel = Object.values(type.tittel)[0];
  return (
    <div className="page_padding">
      <div className="header_background">
        <div className="header_padding">
          <img src="https://artsdatabanken.no/Files/7809" className="top_image"/>
          <h1 className="header_title">Artsdatabankens åpne data </h1>
      </div>
    </div>
      <Seo pageMeta={type} tittel={tittel} />
      <div>
        {/*<img
          style={{ display: "block", float: "right", width: 204 }}
          src="https://data.artsdatabanken.no/Datakilde/Artsdatabanken/logo_med_navn_408.png"
        />*/}
        <h1>{tittel}</h1>
        <div >
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        
        <Bilde {...type.foto.forside} alt={"Foto av " + tittel.toLowerCase()} />
        <Statistikk tittel={tittel} {...type.stats} />
        <div>
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
