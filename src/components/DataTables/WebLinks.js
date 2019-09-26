import React, { Component } from "react";

const arter = [
  {
    tittel: "Artskart",
    url:
      "https://artskart.artsdatabanken.no/app/#map/427864,7623020/3/background/NiB/filter/%7B%22TaxonIds%22%3A%5B%ID%%5D%2C%22IncludeSubTaxonIds%22%3Atrue%2C%22Style%22%3A1%7D",
    beskrivelse: "Observasjoner",
    host: "Artsdatabanken"
  },
  {
    tittel: "GBIF",
    url: "https://www.gbif.org/occurrence/map?q=%TITTEL_SN%",
    beskrivelse: "Observasjoner, Arter, Datasett",
    host: "Global Biodiversity Information Facility"
  },
  {
    tittel: "Wikipedia: Artikkel",
    url: "https://no.wikipedia.org/wiki/%TITTEL_NO%",
    beskrivelse: "Arter",
    host: "Wikimedia Foundation"
  }
];

const links = [
  {
    tittel: "Natur i Norge: App",
    url: "https://nin.artsdatabanken.no/%URL%",
    host: "Artsdatabanken"
  },
  {
    tittel: "Metadata: %TITTEL%",
    url: "/%URL%/metadata.json",
    beskrivelse: `Oppsummering av tilgjengelige egenskapsdata`,
    host: "Artsdatabanken"
  }
];

//https://lovdata.no/for/lf/mv/xv-         2006 06 30-0830.html
//https://lovdata.no/dokument/LF/forskrift/2006-06-30- 830
const lenketyper = {
  faktaark: { navn: "Naturbase faktaark", host: "Miljødirektoratet" },
  iucn: {
    navn: "IUCN protected areas category",
    host: "IUCN"
  },
  offisiell: {
    navn: "Offisiell webside"
  },
  verneforskrift: { navn: "Verneforskrift", host: "Lovdata" },
  wikidata: { navn: "Wikidata", host: "Wikidata" },
  wikipedia: { navn: "Wikipedia", host: "Wikipedia" }
};

class WebLinks extends Component {
  render() {
    const { kode, lenke, url, tittel } = this.props;
    const art = url.startsWith("Biota");
    return (
      <table className="open_api">
        <thead>
          <tr>
            <th>Tittel</th>
            <th>Beskrivelse</th>
            <th>Organisasjon</th>
          </tr>
        </thead>
        <tbody>
          {links.map(e => (
            <WebLink
              key={e.tittel}
              {...e}
              kode={kode}
              metanavn={tittel}
              relUrl={url}
            />
          ))}
          {lenke &&
            Object.keys(lenke).map(key => {
              const meta = lenke[key];
              if (!meta) {
                throw new Error(key);
              }
              return (
                <WebLink
                  key={key}
                  kode={kode}
                  tittel={meta.navn}
                  metanavn={{}}
                  host={meta.host}
                  beskrivelse={meta.beskrivelse}
                  url={lenke[key]}
                />
              );
            })}
          {art &&
            arter.map(e => (
              <WebLink
                key={e.tittel}
                {...e}
                kode={kode}
                metanavn={tittel}
                relUrl={url}
              />
            ))}
        </tbody>
      </table>
    );
  }
}

const WebLink = ({
  metanavn,
  tittel,
  url,
  relUrl,
  host,
  kode,
  beskrivelse
}) => {
  if (!kode) throw new Error(kode + "_" + tittel);
  console.log(tittel, kode);
  let fullUrl = expandVars(url, kode, relUrl, metanavn);
  let fullTittel = expandVars(tittel, kode, relUrl, metanavn);
  return (
    <tr>
      <td>
        <a href={fullUrl}>{fullTittel}</a>
      </td>
      <td>{beskrivelse}</td>
      <td>{host}</td>
    </tr>
  );
};
export default WebLinks;

const padLeft = (s, i) => {
  while (s.length < i) s = "0" + s;
  return s;
};

const expandVars = (url, kode, relUrl, metanavn) => {
  const a = (url || "").replace(
    "%VV%",
    "VV" + padLeft(kode.substring(3), 8) // 00002885
  );
  return a
    .replace("%KODE%", kode)
    .replace("%ID%", kode.split("-")[1])
    .replace("%URL%", relUrl)
    .replace("%TITTEL%", metanavn.nb || metanavn.sn)
    .replace("%TITTEL_NO%", metanavn.nb)
    .replace("%TITTEL_SN%", metanavn.sn);
};
