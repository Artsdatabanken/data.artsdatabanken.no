import React from "react";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Kart from "./Kart";
import OpenData from "../components/DataTables/OpenData";
import OpenApi from "../components/DataTables/OpenApi";
import OpenEgenskap from "../components/DataTables/OpenEgenskap";
import Bilde from "./Bilde";
import Statistikk from "./Statistikk";
import Sidebar from "../components/Sidebar/Sidebar";
import "../style/table.css";
import "../style/graphic-profile.css";
import "../style/map.css";
import "../style/sidebar.css";
import "../style/style.css";

export default props => {
  const { pageContext: type } = props;
  const tittel = Object.values(type.tittel)[0];
  return (
    <div className="page_padding">
      <Header />
      <Seo pageMeta={type} tittel={tittel} />
      <div>
        <h1>{tittel}</h1>
        <div className="contentContainer">
          <div className="sideContent">
            <div>
              <Sidebar type={type} tittel={tittel} />
            </div>
          </div>
          <div className="mainContent">
            <div>
              <Bilde
                {...type.foto.banner}
                alt={"Foto av " + tittel.toLowerCase()}
              />
              {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
            </div>

            {/* Currently working on this:
            <Kilder api={type.api} tittel={tittel} kartformater={type.kartformat} />*/}

            <h2>Tilgjengelige dataformater</h2>
            <OpenApi api={type.api} tittel={tittel} />
            {type.kart && <OpenData kartformater={type.kart.format} />}
            <OpenEgenskap api={type.api} tittel={tittel} />

            <br />
            <Kart url={type.url}>
              <Statistikk tittel={tittel} {...type.stats} />
            </Kart>

            <h2> {tittel} dataleverandører </h2>
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
