import React, { Component } from "react";
import SidebarForStaticPage from "../components/Sidebar/SidebarForStaticPage";
import Header from "../components/Header";
import "../style/table.css";
import "../style/graphic-profile.css";
import "../style/map.css";
import "../style/sidebar.css";
import "../style/style.css";

class FrontPage extends Component {
  render() {
    return (
      <div className="page_padding">
        <Header />
        <div>
          <h1>Åpne data</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage />
            </div>
            <div className="mainContent">
              <h2>Hent data fra Artsdatabanken</h2>
              <p>
                <b>
                  Her finner du data om naturmangfoldet i Norge som fritt kan
                  lastes ned. Disse er levert av kunnskapsinstitusjoner,
                  frivillige organisasjoner, forvaltning, næringsliv og
                  privatpersoner.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
