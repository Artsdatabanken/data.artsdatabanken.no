import React, { Component } from "react";
import SidebarForStaticPage from "../../components/Sidebar/SidebarForStaticPage";
import Header from "../../components/Header";

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
              <h2>Bidragsytere</h2>

              <p>
                <b>
                  Artsdatabanken og GBIF-Norge arbeider systematisk med å gjøre
                  stadig flere datasett tilgjengelig etterhvert som de
                  kvalitetssikres hos dataeier. Artskart bygger på prinsippene i
                  Norge Digitalt. Hver dataeier publiserer sine data fra
                  primærdatabasene gjennom det standardiserte formatet Darwin
                  Core. Artskart leser dataene fra hver enkelt datakilde og gjør
                  dem tilgjengelig på kart fra alle datakildene samtidig.
                </b>
              </p>
              <p>
                Hvis du finner feil ved en post/funn kan du gi tilbakemelding
                til dataeier. For at det skal bli enklere for dataeier å finne
                den aktuelle posten, er det viktig at du gir presis informasjon
                om funnet. Oppgi navnet på institusjonen, navnet på samlingen og
                katalognummeret når du gir tilbakemelding. I tillegg kan det
                være til god hjelp å oppgi vitenskapelig artsnavn og funndato.
                Du kan også bruke funksjonen i Artskart for å gi tilbakemelding.
                Den finner du under "Detaljer".
              </p>

              <h2 id="225550">
                Naturmuseum og botanisk hage, Universitet i Agder
              </h2>
              <p>
                Hjemmeside:{" "}
                <a href="https://www.uia.no/eksterne-nettsider/naturmuseum">
                  https://www.uia.no/eksterne-nettsider/naturmuseum
                </a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Naturmuseum,
                kontakt Per Åsen,{" "}
                <a href="mailto:per.arvid.aasen@uia.no">
                  per.arvid.aasen@uia.no
                </a>
              </p>

              <h2 id="225551">Arkeologisk museum, Universitetet i Stavanger</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://am.uis.no/?lang=en_GB">http://am.uis.no/</a>
              </p>

              <h2 id="237155">Asplan Viak AS</h2>
              <p>
                Hjemmeside:{" "}
                <a href="https://www.asplanviak.no/">
                  https://www.asplanviak.no/
                </a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Asplan Viak,
                kontakt Per Gerhard Ihlen,{" "}
                <a href="mailto:Per.Ihlen@asplanviak.no">
                  Per.Ihlen@asplanviak.no
                </a>
              </p>

              <h2 id="225549">BioFokus</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.biofokus.no/">http://www.biofokus.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra BioFokus,
                kontakt Terje Blindheim,{" "}
                <a href="mailto:terje@biofokus.no">terje@biofokus.no</a>
              </p>

              <h2 id="225552">Bioforsk</h2>
              <p>
                Bioforsk ble en del av{" "}
                <a
                  href="https://nibio.no"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIBIO
                </a>{" "}
                fra 1. juli 2015.{" "}
              </p>

              <h2 id="225553">CBS</h2>

              <h2 id="225598">Ecofact</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.ecofact.no/">http://www.ecofact.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra EcoFact,
                kontakt Geir Arnesen,{" "}
                <a href="mailto:geir@ecofact.no">geir@ecofact.no</a>
              </p>

              <h2 id="225555">Ento Consulting</h2>

              <h2 id="225556">Faun Naturforvaltning AS</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.fnat.no/">http://www.fnat.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Faun, kontakt
                Helge Kiland,{" "}
                <a href="mailto:helge.kiland@fnat.no">helge.kiland@fnat.no</a>
              </p>

              <h2 id="225557">Havforskningsinstituttet</h2>
              <p>
                Hjemmeside: <a href="http://www.imr.no/">http://www.imr.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra
                Havforskningsinstituttet, kontakt Arfinn Morvik,{" "}
                <a href="mailto:arnfinn.morvik@imr.no">arnfinn.morvik@imr.no</a>
              </p>

              <h2 id="225560">JBJordal</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.jbjordal.no/">http://www.jbjordal.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra JBJordal,
                kontakt John Bjarne Jordal{" "}
                <a href="mailto:john.bjarne.jordal@sunndals.net">
                  john.bjarne.jordal@sunndals.net
                </a>
              </p>

              <h2 id="225562">Miljødirektoratet</h2>
              <p>
                For å gi til tilbakemelding på konkrete funn fra
                Miljødirektoratet, kontakt:{" "}
                <a href="mailto:naturbase@miljodir.no">naturbase@miljodir.no</a>
                .
              </p>

              <h2 id="225561">Miljøfaglig utredning</h2>
              <p>
                Hjemmeside: <a href="http://www.mfu.no/">http://www.mfu.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Miljøfaglig
                utredning, kontakt Geir Gaarder{" "}
                <a href="mailto:gaarder@mfu.no">gaarder@mfu.no</a>
              </p>

              <h2 id="225563">Miljølære</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://miljolare.no/">http://miljolare.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Miljølære,
                kontakt <a href="mailto:post@miljolare.no">post@miljolare.no</a>
              </p>

              <h2 id="225564">Molltax</h2>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Molltax,
                kontakt GBIF Norge{" "}
                <a href="mailto:gbif-drift@nhm.uio.no">gbif-drift@nhm.uio.no</a>
              </p>

              <h2 id="244839">Multiconsult ASA</h2>
              <p>
                Hjemmeside:{" "}
                <a
                  href="http://www.multiconsult.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.multiconsult.no/
                </a>
              </p>

              <h2 id="225565">MUST</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.museumstavanger.no/hjem/">
                  http://www.museumstavanger.no/hjem/
                </a>
              </p>

              <h2 id="225566">Naturhistorisk Museum - UiO</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.nhm.uio.no/">http://www.nhm.uio.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra NHM, kontakt:
              </p>
              <ul>
                <li>Katriina Bendiksen - samlingsansvarlig sopp</li>
                <li>Einar Timdal - samlingsansvarlig lav</li>
                <li>Charlotte Sletten Bjorå - samlingsansvarlig karplanter</li>
                <li>Øystein Wiig - samlingsansvarlig pattedyr</li>
                <li>Jan T. Lifjell - samlingsansvarlig fugler</li>
                <li>Åge Brabrand - samlingsansvarlig fisk</li>
                <li>Geir Søli - samlingsansvarlig insekter</li>
                <li>Lutx Bachmann - samlingsansvarlig krepsdyr</li>
                <li>Phil Harris - samlingsansvarlig bløtdyr</li>
                <li>
                  Torsten H. Struck - samlingsansvarlig Protozoer og Metazoer
                </li>
              </ul>

              <h2 id="225567">NINA-FM </h2>
              <p>
                Hjemmeside til Elvemuslingdatabasen:{" "}
                <a href="http://gint.no/fmnt/elvemusling/">
                  http://gint.no/fmnt/elvemusling/
                </a>
              </p>
              <p>Kontaktpersoner: </p>
              <ul>
                <li>
                  Fylkesmannen i Nord-Trøndelag, Miljøvernavdelingen, Kristian
                  Julien
                </li>
                <li>
                  Norsk institutt for naturforskning, Bjørn Mejdell Larsen{" "}
                </li>
              </ul>

              <h2 id="225568">NOF-NINA-DN</h2>
              <p>
                For å gi tilbakemelding på Norsk hekkefuglatlas, kontakt Norsk
                Ornitologisk Forening{" "}
                <a href="mailto:nof@birdlife.no">nof@birdlife.no</a>
              </p>

              <h2 id="225548">Norsk institutt for naturforskning</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.nina.no/">http://www.nina.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra NINA, kontakt
                Roald Vang{" "}
                <a href="mailto:roald.vang@nina.no">roald.vang@nina.no</a>
              </p>

              <h2 id="225604">Norsk institutt for vannforskning</h2>
              <p>
                Hjemmeside: <a href="http://www.niva.no">http://www.niva.no</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra NIVA, kontakt
                Jan Karud{" "}
                <a href="mailto:jan.karud@niva.no">jan.karud@niva.no</a>
              </p>

              <h2 id="225600">Norges fiskerihøgskole, UiT</h2>
              <p>
                Hjemmeside:{" "}
                <a href="https://uit.no/om/enhet/forsiden?p_dimension_id=88166">
                  https://uit.no/om/enhet/forsiden?p_dimension_id=88166
                </a>
              </p>

              <h2 id="225615">
                Norges miljø- og biovitenskapelige universitet
              </h2>
              <p>
                Hjemmeside:{" "}
                <a href="https://www.nmbu.no/">https://www.nmbu.no/</a>
              </p>

              <h2 id="225601">Norges sopp- og nyttevekstforbund</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.soppognyttevekster.no/">
                  http://www.soppognyttevekster.no/
                </a>
              </p>

              <h2 id="225602">Norsk botanisk forening</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.botaniskforening.no/">
                  http://www.botaniskforening.no/
                </a>
              </p>

              <h2 id="225603">Norsk Entomologisk Forening</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.entomologi.no/">
                  http://www.entomologi.no/
                </a>
              </p>

              <h2 id="233735">Norsk Natur Informasjon (NNI)</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.nni.no/index.html">
                  http://www.nni.no/index.html
                </a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra NNI, kontakt;
                Arnold Håland, <a href="mailto:arnold@nni.no">arnold@nni.no</a>
              </p>

              <h2 id="225605">Norsk Ornitologisk Forening</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.birdlife.no/">http://www.birdlife.no/</a>
              </p>

              <h2 id="225606">Norsk Polarinstitutt</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.npolar.no">http://www.npolar.no</a>
              </p>

              <h2 id="225607">Norsk zoologisk forening</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.zoologi.no/">http://www.zoologi.no/</a>
              </p>

              <h2 id="225608">NTNU-Vitenskapsmuseet</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.ntnu.no/vitenskapsmuseet">
                  http://www.ntnu.no/vitenskapsmuseet
                </a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra
                Vitenskapsmuseet, kontakt:
              </p>
              <ul>
                <li>Anders G. Finstad – medlem av GBIFs vitenskapskomité</li>
                <li>Torkild Bakken – samlingsansvarlig zoologi</li>
                <li>Kristian Hassel – samlingsansvarlig botanikk</li>
                <li>Karstein Hårsaker – databasekoordinator zoologi</li>
                <li>Tommy Prestø – databasekoordinator botanikk</li>
                <li>Marc Daverdin – drift av Zootron</li>
              </ul>
              <h2 id="225609">Rådgivende Biologer AS</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.radgivende-biologer.no/">
                  http://www.radgivende-biologer.no/
                </a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Rådgivende
                biologer, kontakt{" "}
                <a href="mailto:post@radgivende-biologer.no">
                  post@radgivende-biologer.no
                </a>
              </p>

              <h2 id="225610">Skog og Landskap</h2>
              <p>
                Norsk institutt for skog og landskap ble en del av NIBIO 1. juli
                2015
              </p>
              <p>
                Hjemmeside{" "}
                <a href="http://www.nibio.no/">http://www.nibio.no/</a>
              </p>

              <h2 id="225611">Svalbardflora</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://svalbardflora.no/">http://svalbardflora.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Svalbardflora,
                kontakt Inger Greve Alsos{" "}
                <a href="mailto:inger.g.alsos@uit.no">inger.g.alsos@uit.no</a>
              </p>

              <h2 id="225612">Sweco Norge AS</h2>
              <p>
                Hjemmeside:{" "}
                <a href="http://www.sweco.no/">http://www.sweco.no/</a>
              </p>

              <h2 id="225613">Tromsø museum - Universitetsmuseet</h2>
              <p>
                Hjemmeside: <a href="https://uit.no/tmu">https://uit.no/tmu</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra Tromsø museum,
                kontakt:
              </p>
              <ul>
                <li>Heini Emilia Rämä, samlingsansvarlig botanikk</li>
                <li>Håkon Dahlen, samlingsansvarlig zoologi vertebrater</li>
                <li>
                  Robert Bergersen, samlingsansvarlig zoologi invertebrater
                </li>
              </ul>

              <h2 id="225614">UiO</h2>
              <p>
                Hjemmeside: <a href="http://www.uio.no/">http://www.uio.no/</a>
              </p>
              <p>
                For å gi til tilbakemelding på konkrete funn fra UiO, kontakt
                GBIF Norge{" "}
                <a href="mailto:gbif-drift@nhm.uio.no">gbif-drift@nhm.uio.no</a>
              </p>

              <h2 id="225616">Universitetsmuseet i Bergen, UiB</h2>
              <p>
                For å gi til tilbakemelding på konkrete funn fra
                Universitetsmuseet i Bergen,{" "}
                <a href="http://www.uib.no/dns">avdeling for naturhistorie</a>,
                kontakt:
              </p>
              <ul>
                <li>Bjarte Jordal - samlingsansvarlig entomologi</li>
                <li>
                  Manuel Malaquias - samlingsansvarlig evertebrater (marint)
                </li>
                <li>Endre Willassen - samlingsansvarlig evertebrater </li>
                <li>Jenny Smedmark - samlingsansvarlig karplanter</li>
                <li>Tor Tønsberg - samlingsansvarlig kryptogamer</li>
                <li>Per Djursvoll - databasekoordinator</li>
              </ul>

              <h2 id="225558">Helgeland Museum - Rana</h2>

              <div class="clearfix">
                <ul class="list-unstyled pull-left clearfix">
                  <li>
                    <a href="/Pages/195480">
                      <small class="text-muted" />
                      Helgeland museum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
