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
              <h2>Kvalitetssikring og foredling av dataene</h2>

              <p>
                <b>
                  Alle data som blir høstet fra originalkildene til Artskart går
                  gjennom en standardiserings- og kvalitetssikringsrutine.
                  Formålet er at dataene skal presenteres på en mest mulig
                  enhetlig måte. Alle bilder som har en åpen lisens kan fritt
                  brukes under forutsetning av at fotograf navngis og lisens
                  oppgis. I tillegg <em>må</em> dine endringer av originalen
                  dokumenteres, og det <em>bør</em> være synlig hvor bildet er
                  hentet fra (ved hjelp av lenke), og hva originaltittelen var.
                  Enkleste er bare å vise til originalen.
                </b>
              </p>

              <p>
                Standardisering av dataene gjør at funnene kan filtreres på
                kommune, norsk navn, rødlistekategori med mer selv om dataeier
                ikke har oppgitt dette i sine datasett Det kan også forekomme
                skrivefeil som standardiseringen potensielt kan kompenserer for.
              </p>

              <h2 id="233742">Kvalitetssikring</h2>
              <p>
                I Artskart skjer det en begrenset kvalitetssikring av funn som
                rapporteres. Det er imidlertid viktig å være klar over at det er
                dataeier som er ansvarlig for kvaliteten på dataene.
              </p>
              <p>
                Når funn importeres fra originalkildene, kontrolleres det
                oppgitt vitenskapelig navn, autor og evt. høyere taksonomi mot
                Artsdatabankens navneregister. Hvis navnet som leveres til
                Artskart ikke er gyldig, med andre ord det er et synonym
                artsnavn ifølge navneregisteret, vil Artskart prøve å koble
                funnet til et gyldig vitenskapelig navn basert på et sett av
                regler. Det betyr at selv om flere vitenskapelige navn har blitt
                brukt om en art, vil du kunne se alle funn av arten i kartet ved
                å søke på anbefalt norsk navn eller gyldig vitenskapelig navn. I
                en eksport fra Artskart er det det gyldige navnet som blir
                brukt. Funn rapportert på vitenskapelige navn (gyldige eller
                synonyme) som ikke ligger i navneregisteret avvises.
              </p>
              <p>
                Ved import sjekker Artskart også oppgitt funndato og avviser
                poster som er fra før 1650 eller nyere enn dagens dato. Funn
                gjort utenfor Norges grenser blir også avvist.
              </p>
              <p>
                Det er viktig å være klar over at originaldataene, slik de var
                før datasettene gikk gjennom standardiserings- og
                kvalitetssikringsrutiner, alltid beholdes i systemet slik at de
                kan lastes ned fra Artskart.&nbsp;
              </p>

              <h2 id="233744">Oppdatering av taksonomien</h2>
              <p>
                Den taksonomiske oversikten i Artskart sjekkes mot
                Artsdatabankens{" "}
                <a href="http://www2.artsdatabanken.no/artsnavn/Contentpages/Sok.aspx">
                  navneregister
                </a>{" "}
                hver natt og endringer i Artsnavnebasen vil reflekteres i
                Artskart. Navneregisteret blir utarbeidet og vedlikeholdt av{" "}
                <a href="http://www.artsdatabanken.no/navn/nyenorskenavn">
                  navnekomiteer og navneredaktører
                </a>
                . Registeret inneholder en oversikt over vitenskapelige og
                norske navn på arter og organismegrupper kjent fra Norge. Per
                desember 2016 kjenner vi over 44 000 arter i Norge og totalt
                inneholder navneregisteret 150 000 vitenskapelige navn og over
                28 000 trivialnavn (norske navn). Registeret er dynamisk, og nye
                navnedata blir stadig blir lagt inn. Ved taksonomiske revisjoner
                kan også arter endre vitenskapelig navn, og arter kan splittes
                og slås sammen eller de kan endre taksonomisk rank, f.eks. fra
                underart til art.
              </p>
              <p>
                Funn av arter som er nye for vitenskapen kan bli rapportert som
                sp. nov. (ined.) eller som cf. eller aff. den art som de er mest
                lik. Men når arten har fått et vitenskapelig navn må dataeier
                selv oppdatere sine databaser slik at funnet får rett navn.
              </p>

              <h2 id="233745">Rødliste- eller fremmedartslistekategorier</h2>
              <p>
                Artskart knytter gjeldene rødliste- eller
                fremmedartslistekategori til funn, basert på det vitenskapelige
                navnet brukt på funnet.
              </p>
              <p>
                Om lag tre fjerdedeler av artene kjent fra Norge er behandlet
                for{" "}
                <a
                  href="https://www.artsdatabanken.no/Rodliste"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Norsk rødliste for arter
                </a>{" "}
                eller{" "}
                <a
                  href="https://www.artsdatabanken.no/fremmedartslista2018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fremmedartslista
                </a>
                , og har derfor en eller annen kategori. For alle artsgrupper
                unntatt karplanter er det kun det taksonomiske nivået art som er
                vurdert. Hvis det er registrert et funn på et lavere taksonomisk
                nivå enn art, f.eks. underart, vil underarten "arve" kategorien
                til arten, dvs. underarten får samme kategori som arten.
              </p>
              <p>
                For enkelte artsgrupper er det gjort separate vurderinger for
                fastlandsdelen av Norge og Svalbard. En art kan derfor ha to
                ulike kategorier. Artskart tildeler kategori basert på om funnet
                er gjort på eller utenfor Svalbard. En art som kun er vurdert
                for Svalbard, f.eks. isbjørn, vil også få rødlistekategorien for
                Svalbard knyttet til funn gjort utenfor Svalbard. I
                detaljinformasjonen for funnet er det oppgitt om kategorien er
                for Svalbard eller Norge for øvrig.
              </p>

              <h2 id="233746">Skjerming av sensitive funnopplysninger</h2>
              <p>
                I tilfeller hvor innsyn i informasjonen kan lette gjennomføring
                av straffbare handlinger, eller lette handlinger som kan skader
                sårbar natur, er tilgangen til stedfestet informasjon om arter
                begrenset.
              </p>
              <p>
                Miljødirektoratet har derfor utarbeidet&nbsp;
                <a href="http://www.miljodirektoratet.no/Documents/publikasjoner/M606/M606.pdf">
                  retningslinjer
                </a>
                &nbsp;for håndtering av stedfestet informasjon om sensitive
                arter. For disse artene er dataeier pliktig til å generalisert
                stedfestingen til kommunemidtpunkt, eller presisjonen i
                kartinnsynet begrenses av en maskeringsrute hvor størrelse på
                ruten er definert i retningslinjene. Navnet på lokaliteten er
                også gjort utilgjengelig.
              </p>
              <p>
                I utgangspunktet er det dataeier som er ansvarlig for å skjerme
                slike data. Artsdatabanken har ikke tilgang til den detaljerte
                informasjonen i de dataene som institusjonene velger å skjerme.
                Forespørsler om innsyn i disse dataene rettes til{" "}
                <a
                  href="https://sensitive-artsdata.miljodirektoratet.no/Contentpages/Forsiden.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miljødirektoratet
                </a>
                .
              </p>
              <p>
                Følgende 23 arter og funnkategorier er definert som sensitive:
              </p>
              <p>
                <strong>Laver</strong>&nbsp;(voksested): trønderlav
              </p>
              <p>
                <strong>Fugler&nbsp;</strong>(hekkelokaliteter): hubro, snøugle,
                lappugle, slagugle, lappfiskand, vepsevåk, fjellvåk, myrhauk,
                hønsehauk, sivhauk, kongeørn, fiskeørn, havørn, lerkefalk,
                jaktfalk, vandrefalk
              </p>
              <p>
                <strong>Fugler</strong>&nbsp;(hekke og mytelokaliteter):
                dverggås
              </p>
              <p>
                <strong>Pattedyr</strong>&nbsp;(ynglehi mm.): fjellrev, ulv,
                jerv, brunbjørn, gaupe
              </p>
              <p>
                Noen dataeiere skjermer alle funn av disse artene, ikke bare hi
                eller hekkelokaliteter. I tillegg til disse artene har Tromsø
                Museum valgt å skjule den nøyaktige posisjonen&nbsp;på noen
                funnlokaliteter for noen flere arter.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
