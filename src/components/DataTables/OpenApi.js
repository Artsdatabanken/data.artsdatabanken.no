import React, { Component } from "react";
import Projeksjon from "../../templates/Projeksjon";

const arter = [
  {
    tittel: "Artskart: Observasjoner",
    url:
      "https://artskart.artsdatabanken.no/appapi/api/data/SearchLocations?&TaxonIds%5B%5D=%ID%&TaxonGroupIds%5B%5D=&IncludeSubTaxonIds=true&Months%5B%5D=&Categories%5B%5D=&BasisOfRecords%5B%5D=&Behaviors%5B%5D=&InstitutionIds%5B%5D=&CollectionIds%5B%5D=&Img%5B%5D=&Found%5B%5D=&NotRecovered%5B%5D=&Valid%5B%5D=&UnsureId%5B%5D=&Spontan%5B%5D=&CenterPoints=false&EpsgCode=32633&LocationId=0&GroupBy=0&Style=1&YearFrom=0&YearTo=0&CoordinatePrecisionFrom=0&CoordinatePrecisionTo=0&BoundingBox=",
    protokoll: "REST JSON",
    beskrivelse: "Lokaliteter hvor arten er observert"
  },
  {
    tittel: "Artskart: søk takson",
    url:
      "https://artskart.artsdatabanken.no/appapi/api/data/SearchTaxons?maxCount=15&name=%TITTEL%",
    protokoll: "REST XML",
    beskrivelse: "Om artsnavnet"
  }
];

const opendata = [
  {
    tittel: "Kart: Vector tiles",
    url: "polygon.3857.mbtiles/",
    downloadUrl: "polygon.3857.mbtiles",
    projeksjon: 3857,
    protokoll: "XYZ PBF",
    beskrivelse: "Kartfliser i vektorformat for bruk i web-løsninger."
  },
  {
    tittel: "Kart: Raster tiles",
    url: "gradient.3857.mbtiles/",
    downloadUrl: "gradient.3857.mbtiles",
    projeksjon: 3857,
    protokoll: "XYZ PNG",
    beskrivelse: "Kartfliser i rasterformat for bruk i web-løsninger."
  },
  {
    tittel: "Kart: Spatialite database",
    downloadUrl: "polygon.spatialite.4326.sqlite",
    projeksjon: 4326,
    protokoll: "SQLITE",
    beskrivelse: "Vektorkart i sqlite romlig database"
  },
  {
    tittel: "Kart: OGC WMS",
    url:
      "https://wms.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    projeksjon: 32633,
    protokoll: "WMS",
    beskrivelse: "Web Map Service"
  },
  {
    tittel: "Kart: OGC WFS",
    url:
      "https://nintest.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    projeksjon: 32633,
    protokoll: "WFS",
    beskrivelse: "Web Feature Service"
  },
  {
    tittel: "Statistikk",
    url: "https://romlig.artsdatabanken.no/%URL%",
    protokoll: "REST JSON",
    beskrivelse: "Frekvens"
  },
  {
    tittel: "Egenskaper",
    downloadUrl: "metadata.json",
    protokoll: "REST JSON",
    projeksjon: "4326",
    beskrivelse: `Oppsummering av tilgjengelige egenskapsdata`
  }
];

class OpenApi extends Component {
  render() {
    const { kode, url, tittel } = this.props;
    const art = url.startsWith("Biota");
    return (
      <React.Fragment>
        <table className="open_api">
          <thead>
            <tr>
              <th>Tittel</th>
              <th>Projeksjon</th>

              <th>Beskrivelse</th>
              <th>Format</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {opendata.map(e => (
              <Api
                key={e.tittel}
                {...e}
                kode={kode}
                sidetittel={tittel}
                relUrl={url}
              />
            ))}
            {art &&
              arter.map(e => (
                <Api
                  key={e.tittel}
                  {...e}
                  kode={kode}
                  sidetittel={tittel}
                  relUrl={url}
                />
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const Api = ({
  protokoll,
  tittel,
  sidetittel,
  url,
  downloadUrl,
  relUrl,
  projeksjon,
  kode,
  beskrivelse
}) => {
  let fullUrl = fixUrl(url, kode, relUrl, sidetittel);
  let fullDownloadUrl = fixUrl(downloadUrl, kode, relUrl, sidetittel);
  return (
    <tr>
      <td>
        <a href={fullUrl}>{tittel}</a>
      </td>
      <td>{projeksjon && <Projeksjon epsg={projeksjon} />}</td>
      <td>{beskrivelse} </td>
      <td> {protokoll}</td>
      <td>{fullUrl && <a href={fullUrl}>API</a>} </td>
      <td>{fullDownloadUrl && <a href={fullDownloadUrl}>Last ned</a>}</td>
    </tr>
  );
};
export default OpenApi;

const fixUrl = (url, kode, relUrl, tittel) =>
  (url || "")
    .replace("%ID%", kode.split("-")[1])
    .replace("%KODE%", kode)
    .replace("%URL%", relUrl)
    .replace("%TITTEL%", tittel);
