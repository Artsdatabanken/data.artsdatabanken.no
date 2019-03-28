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
          <h1>Rødlistede naturtyper</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage />
            </div>
            <div className="mainContent">
              <h2>Hent data om rødlistete arter</h2>
              <p>
                <b>
                  Norsk rødliste for naturtyper 2018 viser hvilke naturtype som
                  har risiko for å gå tapt fra Norge. Rødlista er utarbeidet av
                  Artsdatabanken i samarbeid med fageksperter.
                </b>
              </p>

              <h2>Lenke til datasett:&nbsp;</h2>

              <a href="https://www.artsdatabanken.no/rodlistefornaturtyper">
                Norsk rødliste for naturtyper 2018&nbsp;(brukergrensesnitt)
              </a>
              <h2>Lisens:&nbsp;</h2>
              <a
                href="https://data.norge.no/nlod/no"
                target="_blank"
                rel="noopener noreferrer"
                title="data.norge.no/nlod/no"
              >
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
