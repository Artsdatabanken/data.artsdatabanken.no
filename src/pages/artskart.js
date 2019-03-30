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
          <h1>Artskart</h1>
          <div className="contentContainer">
            <div className="sideContent">
              <SidebarForStaticPage tittel="artskart" />
            </div>
            <div className="mainContent">
              <h2>Om Artskart</h2>
              <p>
                <b>
                  Artskart er en tjeneste som viser funn og observasjoner av
                  arter på kart. Du kan blant annet se hvor arter er funnet, og
                  du kan se hva som er rapportert innenfor et område som en
                  kommune eller et verneområde.
                </b>
              </p>
              <p>
                Informasjonen i Artskart kommer fra ulike biologiske fagmiljøer
                og frivillige rapportører, som vi gjerne kaller dataeiere.
                Tjenesten er gjort mulig gjennom et samarbeid mellom
                Artsdatabanken, <a href="http://www.gbif.no/">GBIF-Norge</a> og{" "}
                <a href="http://artsdatabanken.no/artskart/bidragsytere?Key=1435226523">
                  dataeierne
                </a>
                .
              </p>

              <h2 id="225541">Organisering av tjenesten</h2>
              <p>
                Tjenesten er organisert slik at de fleste dataeierne gjør data
                fra sine primærdatabaser tilgjengelig for GBIF Norge. Artskart
                henter deretter dataene fra GBIF. Noen dataeiere leverer
                imidlertid data direkte til Artskart uten å gå via GBIF.{" "}
              </p>
              <p>
                Funndataene leveres vanligvis i samsvar med den internasjonale
                kodestandarden for utveksling av artsdata kalt{" "}
                <a href="http://rs.tdwg.org/dwc/terms/index.htm">Darwin Core</a>
                . Artskart sjekker alle databasene for oppdateringer og
                endringer hver natt, slik at endringer og nye funn blir
                tilgjengelig senest én dag etter at de er publisert.{" "}
              </p>
              <p>
                Det kan være verd å merke seg at når dataene blir gjort
                tilgjengelig i GBIF-Norge, blir de samtidig også tilgjengelig i
                det internasjonale GBIF-nettverket og dermed synlige i{" "}
                <a href="http://www.gbif.org/">GBIFs globale kartløsning</a>.{" "}
              </p>

              <h2 id="225536">Ufullstendighet og kvalitet</h2>
              <p>
                Foreløpig er om lag 81 % av artene som er kjent fra Norge
                dokumentert med funn i Artskart. De fleste arter er imidlertid
                ufullstendige kartlagt, og ikke alle områder er like godt
                undersøkt. Institusjonene har heller ikke hatt kapasitet eller
                finansiering til å tilrettelegge og kvalitetssikre alle sine
                samlinger. At det ikke er dokumentert funn av en art på et
                område behøver derfor ikke bety at arten ikke finnes der.
                Manglende funn kan skyldes at området ikke er undersøkt eller at
                artsfunnene ikke er digitalisert og gjort tilgjengelig. <br />
                Noen artsfunn er gamle og arten kan være forsvunnet fra
                lokaliteten. Slike opplysninger er i liten grad dokumentert i
                denne tjenesten, men enkelte funn kan være rapportert som «ikke
                funnet» eller «ikke gjenfunnet».
                <br />
                Det er dataeier som er ansvarlig for kvaliteten på dataene. Hvis
                du mener du har funnet feil ved et funn kan du kontakte
                dataeieren direkte. En liste med e-postadresser til
                samlingsansvarlig finner du på{" "}
                <a href="http://artsdatabanken.no/artskart/bidragsytere?Key=1435226523">
                  siden som lister opp bidragsytere
                </a>
                .
              </p>

              <h2 id="225619">Rapporter funn</h2>
              <p>
                Det er ikke mulig å rapportere funn direkte til Artskart.
                Artsdatabanken har heller ingen mulighet for å ta imot data og
                publisere disse i Artskart. Det er likevel relativt enkelt å
                gjøre dine funn tilgjengelig for Artskart. For privatpersoner
                anbefaler vi å bruke{" "}
                <a href="http://www.artsobservasjoner.no/">Artsobservasjoner</a>
                .{" "}
              </p>
              <p>
                Institusjoner som ønsker å publisere sine data til GBIF og
                Artskart kan for eksempel gjøre dette ved hjelp av GBIFs{" "}
                <a href="http://www.gbif.org/ipt">IPT-tjeneste</a>. Har du
                spørsmål om hvordan din institusjon kan dele data, vennligst ta
                kontakt med GBIF-Norge på{" "}
                <a href="mailto:gbif-drift@nhm.uio.no">e-post</a>.
              </p>

              <h2 id="225547">Kontakt</h2>
              <p>
                Det er Artsdatabanken som har utviklet Artskart. Har du innspill
                eller spørsmål til selve karttjenesten kan du ta kontakt via{" "}
                <a href="mailto:artskart@artsdatabanken.no">e-post</a>. Om du
                har spørsmål knyttet til konkrete funn kan du også ta kontakt
                direkte med{" "}
                <a href="http://artsdatabanken.no/artskart/bidragsytere?Key=1435226523">
                  institusjonen som står som eier
                </a>{" "}
                av funnet. Hvis du oppgir intern-nummeret/katalognummeret til
                funnet i tillegg til artsnavnet blir det enklere å finne rett
                post.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
