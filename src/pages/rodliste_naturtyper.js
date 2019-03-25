import React, { Component } from "react";
import SidebarForStaticPage from "../components/SidebarForStaticPage";
import Header from "../components/Header";

class FrontPage extends Component {
  render() {

    return (
        <div className="page_padding">
        <Header/>
        <div>
          <h1>Rødlistede naturtyper</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage/>
            </div>
            <div className="mainContent">
            <h2>Hent data om rødlistete arter</h2>
            <p>
              <b>
              Norsk rødliste for naturtyper 2018 viser hvilke naturtype som har risiko for å gå tapt fra Norge. Rødlista er utarbeidet av Artsdatabanken i samarbeid med fageksperter.            
              </b>
            </p>
             
              <h2>Lenke til datasett:&nbsp;</h2>

              <a href="https://www.artsdatabanken.no/rodlistefornaturtyper">
                Norsk rødliste for naturtyper 2018&nbsp;(brukergrensesnitt)
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
