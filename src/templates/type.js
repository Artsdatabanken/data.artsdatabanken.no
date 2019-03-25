import React from "react";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Kart from "./Nin/Kart";
import OpenData from "./OpenData";
import OpenApi from "./OpenApi";
import OpenEgenskap from "./OpenEgenskap";

import Bilde from "./Bilde";

import Statistikk from "./Statistikk";
import DataBlokk from "./DataBlokk";
import Sidebar from "../components/Sidebar";
import "./table.css";
import "./style.css";

export default props => {
  const {
    pageContext: { type }
  } = props;
  const tittel = Object.values(type.tittel)[0];
  return (
    <div className="page_padding">
      <Header/>
      <Seo pageMeta={type} tittel={tittel} />
      <div>
        <h1>{tittel}</h1>
        <div className="contentContainer">
          <div className="sideContent">
           
            <div>
              
              <Sidebar type={type} tittel={tittel}/>
              
            </div>
          </div>
          <div className="mainContent">
           
            <div>
              <Bilde {...type.foto.forside} alt={"Foto av " + tittel.toLowerCase()} />
              <Statistikk tittel={tittel} {...type.stats} />
                {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
            </div>

            <OpenApi api={type.api} tittel={tittel} />
            <DataBlokk api={type.api} tittel={tittel} kartformater={type.kartformat} />

            <OpenEgenskap api={type.api} tittel={tittel} />
            <DataBlokk api={type.api} tittel={tittel} kartformater={type.kartformat} />


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
      </div>
    </div>
  );
};

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};
