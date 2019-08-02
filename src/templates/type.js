import { useWindowScroll } from "react-use";
import WebLinks from "../components/DataTables/WebLinks";
import React from "react";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Geografi from "./Geografi";
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
  const updateTime = preval`module.exports = new Date().toISOString()`;
  const { x, y } = useWindowScroll();

  return (
    <div className="page_padding">
      <Header title={y > 120 && tittel} />
      <Seo pageMeta={type} tittel={tittel} />
      <div>
        <h1>
          {tittel}
          <img
            src={"/" + type.url + "/logo_48.png"}
            style={{
              verticalAlign: "middle",
              filter: "saturate(0%)",
              paddingLeft: 12
            }}
          />
        </h1>
        <div className="contentContainer">
          <div className="sideContent">
            <Sidebar type={type} tittel={tittel} />
          </div>
          <div className="mainContent">
            {type.bilde.banner && (
              <div>
                <Bilde
                  {...type.bilde.banner}
                  alt={"Foto av " + tittel.toLowerCase()}
                />
                {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
              </div>
            )}
            {type.ingress}
            <h2>Kart</h2>
            <OpenApi
              tittel={tittel}
              kode={type.kode}
              url={type.url}
              files={type.files}
            />
            <h2>Lenker</h2>
            <WebLinks
              api={type.api}
              tittel={type.tittel}
              kode={type.kode}
              url={type.url}
              lenke={type.lenke}
            />
            <br />
            {type.files["thumbnail.32633.blur.png"] && (
              <Geografi url={type.url}>
                <Statistikk tittel={tittel} {...type.stats} />
              </Geografi>
            )}
            {type.datakilde && type.datakilde.length > 0 && (
              <>
                <h2>Datakilde</h2>
                <Kilder kilder={type.datakilde} />
                <p>
                  <small>
                    Oppdatert {updateTime} -{" "}
                    <a href="https://github.com/Artsdatabanken/data.artsdatabanken.no">
                      Bidra
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
