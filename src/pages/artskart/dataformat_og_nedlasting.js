import React, { Component } from "react";
import SidebarForStaticPage from "../../components/Sidebar/SidebarForStaticPage";
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
            <h2>Dataformat og nedlasting</h2>

            <p>
              <b>
              Funndataene som er tilgjengelig i Artskart distribueres på en åpen standard for deling av informasjon om biodiversitet som kalles Darwin Core. Standarden er utviklet og vedlikeholdes av TDWG.                </b>
            </p>
            <p>
            Darwin Core er primært laget for&nbsp;å kunne utveksle stedfestet informasjon om arter og andre taksa. Standarden inkludere et sett parametere med tilhørende vokabular. En introduksjon til Darwin Core er gitt på TDWGs&nbsp;<a href="http://rs.tdwg.org/dwc/terms/index.htm">Quick Reference Guide</a>. GBIF har beskrevet&nbsp;<a href="https://www.gbif.org/data-quality-requirements">her</a>&nbsp;hvilke felter som er påkrevd.&nbsp;Artsdatabanken tilbyr en <a href="https://www.artsdatabanken.no/Files/20609" target="_blank">Excel importmal</a>&nbsp;som viser hvilke felter er påkrevd eller valgfri.&nbsp;Det er også mulig å levere data til Artskart på en standard som kalles&nbsp;<a href="https://github.com/gbif/ipt/wiki/samplingEventData">Sampling Event Data</a>&nbsp;som er tilpasset overvåkningsdata.
            </p>


<p>
  Mange av feltene/parametrene i Darwin Core er fritekstfelt. For at vi skal kunne sorter og filtrere på slike data har vi laget noen regler for gruppering av data. «Aktivitet» er et slik felt hvor det er laget regler for gruppering av egenskaper. I Artskart slås&nbsp;mange ulike aktiviteter som rapporteres til Artsobservasjoner&nbsp;sammen til et sett aktivitetskategorier. For eksempel blir aktivitetene "reir med egg" og "reirbygging" slått sammen til aktivitetskategorien "sikker reproduksjon".&nbsp;
</p>





<h2 id="239707">Koordinater</h2><p>Når du laster ned data fra Artskart, blir koordinatene for stedfesting av artsfunn inkludert i to formater. Breddegrad (Latitude) og Lengdegrad (Longitude), og 'Øst' og 'Nord'. Disse siste to felt gir koordinatene i UTM zone 33 - euref89. Merk at sone 33 blir brukt til hele Norge, også til lokaliteter som er i sone 32, 34, 35 eller 36.</p>









<h2 id="233747">Laste ned data</h2><p>WMS/WFS er åpne kart/GIS standarder som gjør at data fra tjenesten kan benyttes direkte i kart/GIS-verktøy. Data på rødlistede arter i Artskart eksporteres hver natt til en tjeneste for WMS/WFS publisering av disse dataene.&nbsp;Utvalget representerer arter i rødlistekategoriene RE, CR, EN, VU, DD og NT, med en oppgitt geografisk presisjon bedre enn 1 km eller geografisk presisjon ikke oppgitt (0 m). Merk at disse tjenestene henter data i Artskart 1,6 databasen.</p>
<p>Tilsvarende tjeneste er tilgjengelig for fremmede arter, med basisurl:&nbsp;<a href="http://kart.artsdatabanken.no/WMS/artskartfa.aspx?version=1.3.0&amp;service=WMS&amp;REQUEST=GetCapabilities">http://kart.artsdatabanken.no/WMS/artskartfa.aspx?version=1.3.0&amp;service=WMS&amp;REQUEST=GetCapabilities</a></p>
<p>Shapefiler med alle data knytt til denne tjenesten er tilgjengelig her (oppdateres hver natt):&nbsp;<a href="http://kart.artsdatabanken.no/WMS/kartdata/artskart/artskart.zip" target="_blank">http://kart.artsdatabanken.no/WMS/kartdata/artskart/artskart.zip</a></p>
<p>Tjenesten er tilgjengelig via url:&nbsp;<a href="http://kart.artsdatabanken.no/WMS/artskart.aspx?version=1.3.0&amp;service=WMS&amp;REQUEST=GetCapabilities">http://kart.artsdatabanken.no/WMS/artskart.aspx?version=1.3.0&amp;service=WMS&amp;REQUEST=GetCapabilities</a></p>
<p>For tjenesteinfo knyttet til WFS:&nbsp;<a href="http://kart.artsdatabanken.no/WMS/artskart.aspx?version=1.0.0&amp;service=WFS&amp;REQUEST=GetCapabilities">http://kart.artsdatabanken.no/WMS/artskart.aspx?version=1.3.0&amp;service=WFS&amp;REQUEST=GetCapabilities</a></p>









<h2 id="233749">API-tjenesten</h2><p>Artsdatabanken har utviklet en API-tjeneste for maskin til maskin kommunikasjon. En API-tjeneste gjør det f.eks. mulig for andre brukere av artsdata å lage egne kartløsninger med data fra Artskart. Les mer API-tjenesten&nbsp;<a href="http://artsdatabanken.no/Pages/180954">her</a>.</p>









<h2 id="233750">Hent data&nbsp;med R</h2><p>R er et mye brukt statistikkverktøy som også gjør det mulig å søke og hente data fra GBIF globalt.&nbsp;<a href="https://cran.r-project.org/web/packages/rgbif/index.html">rgbif&nbsp;</a>er en R-pakke som henter data og informasjon fra GBIF-API-et. Med rgbif er det bl.a. mulig å:</p>
<ul><li>hente data om enkeltfunn</li>
<li>hente mange poster/funn</li>
<li>søke etter artsnavn</li>
<li>lage forekomstkart</li>
<li>filtrere&nbsp;data</li>
</ul><p>Funksjonaliteten er beskrevet på&nbsp;<a href="https://ropensci.org/tutorials/rgbif_tutorial.html">hjelpesiden</a>.</p>
<p>Det er verdt å merke seg at det vil være forskjeller mellom Artskart og GBIF, f.eks. knyttet til taksonomi. Artskart har også noen kvalitetsfiltre som avviser noe flere poster enn GBIF. I Artskart knytter vi også rødliste- eller fremmedartskategori til funnene, norsk artsnavn, taksonomi i samsvar med Artsnavnebasen og fylke og kommune der hvor det ikke er oppgitt.&nbsp;</p>







          {/*'***************************************************'*/}
          </div>
  
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
