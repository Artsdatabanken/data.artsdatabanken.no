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
    url: "https://www.gbif.org/search?q=%TITTEL%",
    beskrivelse: "Observasjoner, Arter, Datasett",
    host: "Global Biodiversity Information Facility"
  },
  {
    tittel: "Wikipedia: Artikkel",
    url: "https://no.wikipedia.org/wiki/%TITTEL%",
    beskrivelse: "Arter",
    host: "Wikimedia Foundation"
  }
];

const vern = [
  {
    tittel: "Verneområde: Faktaark",
    url: "https://faktaark.naturbase.no/?id=%VV%",
    protokoll: "REST XML",
    host: "Miljødirektoratet"
  }
];

const links = [
  {
    tittel: "Kart: Innsynsløsning",
    url: "https://nin.artsdatabanken.no/%URL%",
    host: "Artsdatabanken"
  },
  {
    tittel: "Artsdatabanken",
    url: "https://artsdatabanken.no/Databank/Content/237662?q=%TITTEL%",
    beskrivelse: "Artikler",
    host: "Artsdatabanken"
  }
];
class WebLinks extends Component {
  render() {
    const { kode, url, tittel } = this.props;
    const art = url.startsWith("Biota");
    const vv = url.startsWith("Naturvernområde");
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
              sidetittel={tittel}
              relUrl={url}
            />
          ))}
          {vv &&
            vern.map(e => (
              <WebLink
                key={e.tittel}
                {...e}
                kode={kode}
                sidetittel={tittel}
                relUrl={url}
              />
            ))}
          {art &&
            arter.map(e => (
              <WebLink
                key={e.tittel}
                {...e}
                kode={kode}
                sidetittel={tittel}
                relUrl={url}
              />
            ))}
        </tbody>
      </table>
    );
  }
}

const WebLink = ({
  tittel,
  sidetittel,
  url,
  relUrl,
  host,
  kode,
  beskrivelse
}) => {
  let fullUrl = fixUrl(url, kode, relUrl, sidetittel);
  return (
    <tr>
      <td>
        <a href={fullUrl}>{tittel}</a>
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

const fixUrl = (url, kode, relUrl, tittel) => {
  const a = (url || "").replace(
    "%VV%",
    "VV" + padLeft(kode.substring(3), 8) // 00002885
  );
  return a
    .replace("%KODE%", kode)
    .replace("%ID%", kode.split("-")[1])
    .replace("%URL%", relUrl)
    .replace("%TITTEL%", tittel);
};
