import React, { Component } from "react";
import SidebarForStaticPage from "../components/Sidebar/SidebarForStaticPage";
import Header from "../components/Header";

class FrontPage extends Component {
  render() {

    return (
        <div className="page_padding">
        <Header/>
        <div>
          <h1>Fremmede arter</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage/>
            </div>
            <div className="mainContent">
            <h2>Hent data om fremmede arter</h2>
            <p>
              <b>
              Fremmedartslista 2018 viser hvilken risiko fremmede arter kan utgjøre for naturmangfoldet i Norge (økologisk risiko). Søk enkeltarter, eller gjøre et filtrert søk tilpasset dine behov.              </b>
            </p>
             



              <h2>Lenke til datasett:&nbsp;</h2>

              <a href="https://www.artsdatabanken.no/fremmedartslista2018"> 
              Fremmedartslista 2018&nbsp;(søkegrensesnitt med CSV-eksport)
              </a>

              <h2>Lisens:&nbsp;</h2>

              <a href="https://data.norge.no/nlod/no" target="_blank" title="data.norge.no/nlod/no">
              Norsk lisens for offentlige data (NLOD)
              </a>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
