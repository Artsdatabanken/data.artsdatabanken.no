import React, { Component } from "react";
import SidebarForStaticPage from "../components/Sidebar/SidebarForStaticPage";
import Header from "../components/Header";

class FrontPage extends Component {
  render() {

    return (
        <div className="page_padding">
        <Header/>
        <div>
          <h1>Artsnavn</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage tittel="artsnavn"/>
            </div>
            <div className="mainContent">
            <h2>Om Artsnavn</h2>
            <p>
              <b>
              Artsdatabankens navneregister er en kilde til kvalitetssikret kunnskap om norske arters navn og deres systematiske tilhørighet.              
              </b>
            </p>

            <h2 id="165994">Søk informasjon om artsnavn</h2><p>I Artsdatabankens navneregister kan du søke frem informasjon om aksepterte vitenskapelige navn etter gjeldende internasjonale standarder og anbefalte norske navn på bokmål, nynorsk og for mange arter også nordsamisk. Du kan også se alternative (synonyme) navn som eksisterer for arten.</p>









<h2 id="165995">Eksporter artsnavn</h2><p>Du kan også laste ned lister med navn fra navneregisteret. Navn for alle grupper og arter under det nivået du har valgt vil bli eksportert til ønsket format.</p>









<h2 id="166011">Sammenlign egne lister mot navneregisteret</h2><p>I listesøket kan du laste opp en egen navneliste og sammenligne den med innholdet i Artsdatabankens navneregister. Her kan du få ut autor, klassifisering, populærnavn og ID’er og sortere ut navn som får feiltreff på vitenskapelig navn, autor, hierarki og/eller nærmest overordet takson og lignende.</p>









<h2 id="166012">Nett-tjenester på navn</h2><p>Det er etablert flere nett-tjenester på navn, dvs. tjenester som nett-baserte applikasjoner kan levere til hverandre.</p>
           

            </div>
  
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
