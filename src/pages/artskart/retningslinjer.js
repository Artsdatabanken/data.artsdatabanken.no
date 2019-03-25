import React, { Component } from "react";
import SidebarForStaticPage from "../../components/SidebarForStaticPage";
import Header from "../../components/Header";

class FrontPage extends Component {
  render() {

    return (
        <div className="page_padding">
        <Header/>
        <div>
          <h1>Retningslinjer for bruk og sitering</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage/>
            </div>
            <div className="mainContent">
            <p>
                <b>
               All data i Artskart, med unntak av noen bilder, har åpen lisens og kan dermed brukes fritt så lange du aksepterer lisensvilkårene om sitering (og eventuelle tilleggskrav som kan være knyttet til bildebruk). Artsdatabanken oppfordrer alle til å benytte en standardisert praksis for sitering, som beskrevet nedenfor. Slik anerkjenner man originalkilden til informasjonen og hjelper andre å finne kilden til dataene.
               </b>
            </p>

            <h2 id="233438">Eksempel på sitering (eksport)</h2><p>Hvis du velger å eksportere resultatet ditt som Excel-fil, vil den inneholde forslag til sitering. Vi anbefaler å benytt følgende format ved sitering av data som er hentet fra Artskart:</p>
            <p>Artskart.artsdatabanken.no DD.MM.ÅÅÅÅ. Funndata fra: [liste over dataleverandører]. Nedlastet gjennom Artskart.</p>
            <p>For eksempel:</p>
            <p>Artskart.artsdatabanken.no 21.02.2017. Funndata fra: Bergen museum, UiB, Naturhistorisk museum UiO, Tromsø museum UiT, NTNU Vitenskapsmuseet. Nedlastet gjennom Artskart.</p>

            <h2 id="233439">Sitering av enkeltfunn</h2><p>Ved sitering eller henvisning til enkeltfunn: oppgi: a) vitenskapelig artsnavn, b) institusjon, c) samling, d) katalognummer. Til sammen utgjør b), c) og d) en «triplett» som er unike for alle observasjoner. Tripletten kan også erstattes med ocurrenceID hvor det finnes. For eksempel: Artskart.artsdatabanken.no 21.02.2017. Funndata for <em>Tussilago farfara</em> L. fra Norsk botanisk forening, so2- vascular, katalognummer: 17303977</p>

            <h2 id="233440">Henvisning til søkeresultat</h2><p>På kartsiden i Artskart er det en funksjon for å dele lenke til søket. Merk at lenken kun reproduserer søket, og evt. filter som er brukt og at resultatet fra søket kan endre seg etter hvert som nye funn gjøres tilgjengelig for Artskart</p>


            <div class="attachment clearfix ">
                    
            <h2 id="237313">Sitering av skjermbilder</h2><p>Hvis du vil bruke skjermbilder av visning av funn med et bakgrunnskartlag, skal du sitere både eier av bakgrunnskartet og eiere av biodiversitetsdatasett(-ene) som blir vist. Du kan finne ut hvem som eier bakgrunnskartlaget du ser på ved å klikke på "i" ikonet nederst til høyre i kartvinduet. Der finnes det også en lenke til eieren og informasjon om sitering. Kartverket er eier av de fleste bakgrunnskart og har åpen lisens. Mer informasjon og eksempler på siteringsformat finner du hos <a href="https://kartverket.no/Kart/illustrasjonskart/">Kartverket</a>.</p>
            </div>
            <h2 id="233441">Historikk</h2><p>Per i dag tar ikke Artsdatabanken vare på eksportene som genereres i Artskart. I framtiden vil vi kunne ta vare eksporter og etablere permanente lenker (for eksempel vha. DOI) til disse eksportene. En saksbehandler da kunne bruke den permanente lenken for å dokumentere datagrunnlaget som var tilgjengelig i Artskart basert på det utvalget vedkommende gjorde på det aktuelle tidspunktet. </p>




            </div>
  
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
