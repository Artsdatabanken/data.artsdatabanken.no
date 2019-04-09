import WebLinks from "../components/DataTables/WebLinks";
import React from "react";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Kart from "./Kart";
import OpenData from "../components/DataTables/OpenData";
import OpenApi from "../components/DataTables/OpenApi";
import Bilde from "./Bilde";
import Statistikk from "./Statistikk";
import Sidebar from "../components/Sidebar/Sidebar";
import Kilder from "../components/DataTables/Kilder";
import "../style/table.css";
import "../style/graphic-profile.css";
import "../style/map.css";
import "../style/sidebar.css";
import "../style/style.css";

export default props => {
  const { pageContext: type } = props;
  const tittel = Object.values(type.tittel)[0];
  const foto = type.foto.banner || type.foto.forside;
  const updateTime = preval`module.exports = new Date().toISOString()`;
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
              <Bilde {...foto} alt={"Foto av " + tittel.toLowerCase()} />
              {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
            </div>

            {/* Currently working on this:
            <Kilder api={type.api} tittel={tittel} kartformater={type.kartformat} />*/}

            <h2>Tilgjengelige data</h2>
            <OpenApi
              api={type.api}
              tittel={tittel}
              kode={type.kode}
              url={type.url}
            />
            <h2>Aktuelle websider</h2>
            <WebLinks
              api={type.api}
              tittel={tittel}
              kode={type.kode}
              url={type.url}
            />
            {false && <OpenData kartformater={type.kart.format} />}

            <br />
            <Kart url={type.url}>
              <Statistikk tittel={tittel} {...type.stats} />
            </Kart>

            {type.datakilde && type.datakilde.length > 0 && (
              <>
                <h2>Dataleverandør</h2>
                <Kilder kilder={type.datakilde} />
                <p>
                  <small>
                    Oppdatert {updateTime} -{" "}
                    <a href="https://github.com/Artsdatabanken/adb-data-portal/">
                      Kildekode
                    </a>
                  </small>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
