import React from "react";
import Seo from "../components/Seo";
import Kart from "./Nin/Kart";
import OpenData from "./OpenData";
import OpenApi from "./OpenApi";
import OpenEgenskap from "./OpenEgenskap";
import Barna from "./Barna";
import Bilde from "./Bilde";
import DelAv from "./DelAv";
import DataBlokk from "./DataBlokk";
import Relasjoner from "./Relasjoner";
import Statistikk from "./Statistikk";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./table.css";
import "./style.css";

export default props => {
  const {
    pageContext: { type }
  } = props;
  //const tittel = Object.values(type.tittel)[0];
  console.log(props);
  return (
    <div className="page_padding">
      <div>
        <h1>Åpne data</h1>
        <div className="contentContainer">
          <div className="sideContent">
          
            <Sidebar/>
          </div>
          <div className="mainContent">
          <h2>Hent data fra Artsdatabanken</h2>
          <p>
            <b>
            Hos Artsdatabanken finnes mengder av data og informasjon om naturmangfoldet i Norge som du fritt kan laste ned. Disse er levert av kunnskapsinstitusjoner, frivillige organisasjoner, forvaltning, næringsliv og privatpersoner.
            </b>
          </p>
          <p>
            Dersom du ønsker å hente data fra Artsdatabanken finner du det du leter etter ved å søke i eller laste ned datasett. Våre data ligger per i dag i seks ulike databaser.
          </p> 

          </div>

        </div>
      </div>
    </div>

  )
};

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};
