import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
//import "./table.css";
//import "./style.css";

class FrontPage extends Component {
  render() {

    return (
        <div className="page_padding">
        <Header/>
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
    );
  }
}

export default FrontPage;
