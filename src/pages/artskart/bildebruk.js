import React, { Component } from "react";
import SidebarForStaticPage from "../../components/SidebarForStaticPage";
import Header from "../../components/Header";

class FrontPage extends Component {
  render() {

    return (
        <div className="page_padding">
        <Header/>
        <div>
          <h1>Artskart</h1>
          <div className="contentContainer">
            <div className="sideContent">
            <SidebarForStaticPage  tittel="artskart"/>
            </div>
            <div className="mainContent">
            <h2>Kort om bruk av bilder</h2>

            <p>
              <b>
                Alle bilder som har en åpen lisens kan fritt brukes under forutsetning av at fotograf navngis og lisens oppgis. I tillegg <em>må</em> dine endringer av originalen dokumenteres, og det <em>bør</em> være synlig hvor bildet er hentet fra (ved hjelp av lenke), og hva originaltittelen var. Enkleste er bare å vise til originalen.
              </b>
            </p>
 
            <p><p>De ulike typene åpne lisenser kan kort beskrives slik:</p>
            <ul><li>Creative Commons (CC) BY: Du kan gjøre hva du vil, men du må oppgi eier, lisens og hva du har endret. <a href="https://creativecommons.org/licenses/by/4.0/deed.no">Les mer om CC BY 4.0</a>.<br />
              </li>
            <li>Creative Commons (CC) BY-SA: Du kan gjøre hva du vil, men du må oppgi eier, lisens og hva du har endret. Hvis du bruker det til å skape noe nytt må det du skaper få samme lisens. <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.no">Les mer om CC BY-SA 4.0</a>.<br />
              </li>
            <li>CC0, PD og andre public domain: ingen eier bildet, eller eieren har frasagt seg alle rettigheter. Vi behandler det likevel som CC BY 4.0, men oppgir selvfølgelig riktig lisens.<br />
              </li>
            <li>NLOD: Norsk lisens for offentlige data. Kompatibel med CC BY 4.0.</li>
            </ul><p><a href="http://www.artsdatabanken.no/Pages/229610">Les mer om lisenser og bruk av bilder</a>.</p>
            </p>









<h2 id="233468">Bilder uten lisens og copyright</h2><p>Hvis fotograf ikke har oppgitt lisens på bildet, antar vi at bildet har copyright/opphavsrett. Da gjelder samme regler som for bilder med copyright (c).</p>
<p>Les mer om Artsdatabankens policy for åpne lisenser, retningslinjer fordeling av data.</p>





            </div>
  
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
