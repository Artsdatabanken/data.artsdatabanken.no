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
          <h1>Rødlistearter</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage />
            </div>
            <div className="mainContent">
              <h2>Hent data om rødlistete arter</h2>
              <p>
                <b>
                  Rødlista for arter i Norge er en sortering av arter i grupper
                  etter graden av risiko for at de skal dø ut fra norsk natur.
                  Rødlista er utarbeidet av Artsdatabanken i samarbeid med
                  vitenskapelige institusjoner og frittstående enkeltpersoner
                  med spisskompetanse.{" "}
                </b>
              </p>

              <p>
                Vurderingen av artene er basert på kriterier utarbeidet av den
                internasjonale naturvernorganisasjonen (IUCN).
              </p>
              <h2>Hent data om rødlistete arter:&nbsp;</h2>

              <ul>
                <li>
                  <a href="http://artsdatabanken.no/Rodliste2015/sok?vurderings%u00e5r=2015">
                    Norsk rødliste for arter 2015 (brukergrensesnitt&nbsp;for
                    eksport)
                  </a>
                </li>
              </ul>

              <h2>Relevante lenker:&nbsp;</h2>
              <ul>
                <li>
                  <a href="http://www.artsdatabanken.no/Pages/201612">
                    Publikasjonen Norsk rødliste for arter 2015 (.pdf)
                  </a>
                </li>
              </ul>

              <h2>Lisens:&nbsp;</h2>
              <ul>
                <li>
                  <a
                    href="https://data.norge.no/nlod/no"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="data.norge.no/nlod/no"
                  >
                    Norsk lisens for offentlige data (NLOD)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
