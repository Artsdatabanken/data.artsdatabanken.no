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
        <h2>{type.tittel.nb} - åpne data</h2>
        <div>
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        <DelAv overordnede={type.overordnet} />
        <Barna barn={type.barn} />
        <OpenApi api={type.api} tittel={type.tittel.nb} />
        <OpenData kartformater={type.kartformat} tittel={type.tittel.nb} />
        <Relasjoner relasjoner={type.graf} />
        <Kart url={type.url}>
          <Statistikk tittel={type.tittel.nb} {...type.stats} />
        </Kart>
        <hr />
        Oppdatert {new Date().toISOString()} - Artsdatabanken
      </div>
    </div>
  );
};

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};
