import React, { Component } from "react";
import Projeksjon from "../../templates/Projeksjon";
import { CloudDownload } from "@material-ui/icons";
import filmeta from "./filtype";

const arter = [
  {
    tittel: "Artskart",
    url:
      "https://artskart.artsdatabanken.no/appapi/api/data/SearchLocations?&TaxonIds%5B%5D=%ID%&IncludeSubTaxonIds=true",
    protokoll: "REST JSON",
    beskrivelse: "Lokaliteter hvor arten er observert"
  },
  {
    tittel: "Artssøk takson",
    url:
      "https://artskart.artsdatabanken.no/appapi/api/data/SearchTaxons?maxCount=15&name=%TITTEL%",
    protokoll: "REST XML",
    beskrivelse: "Om artsnavnet"
  }
];

const opendata = [
  {
    tittel: "OGC WMS",
    url:
      "https://wms.artsdatabanken.no/?map=/maps/mapfiles/la.map&?&request=GetCapabilities&service=WMS&version=1.1.1&", // %KODE%
    projeksjon: 32633,
    protokoll: "WMS",
    beskrivelse: "Web Map Service"
  }
  /*  {
    tittel: "OGC WFS",
    url:
      "https://wms.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
    projeksjon: 32633,
    protokoll: "WFS",
    beskrivelse: "Web Feature Service"
  },*/
  /*  {
    tittel: "Statistikk",
    url: "https://romlig.artsdatabanken.no/%URL%",
    protokoll: "REST JSON",
    beskrivelse: "Frekvens"
  },*/
];

class OpenApi extends Component {
  render() {
    const { kode, url, tittel, files } = this.props;
    if (!files) return null;
    const art = url.startsWith("Biota");
    const data = opendata;
    return (
      <table className="open_api">
        <thead>
          <tr>
            <th>Tittel</th>
            <th>Projeksjon</th>

            <th>Oppdatert</th>
            <th>Format</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {files &&
            Object.keys(files).map(key => {
              const e = files[key];
              return (
                <Download
                  key={key}
                  relUrl={url}
                  filename={key}
                  size={e.size}
                  modified={e.mtime}
                />
              );
            })}
          {data.map(e => (
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
    );
  }
}

const prettySize = size => {
  if (size < 2048) return size + " B";
  if (size < 1024 * 1024) return Math.round(size / 1024) + " kB";
  if (size < 1024 * 1024 * 1024) return Math.round(size / 1024 / 1024) + " MB";
  return Math.round(size / 1024 / 1024 / 1024) + " GB";
};

const prettyDate = date => {
  return new Date(date).toISOString().substring(0, 10);
};

const finnProjeksjon = fil => {
  if (fil.indexOf("3857") > 0) return 3857;
  if (fil.indexOf("25833") > 0) return 25833;
  if (fil.indexOf("32633") > 0) return 32633;
  if (fil.indexOf("4326") > 0) return 4326;
  return null;
};

const Download = ({ relUrl, filename, size, modified }) => {
  const { beskrivelse, filtype, obsolete, kategori } = filmeta[filename] || {};
  if (obsolete) return null;
  if (!filtype) {
    console.warn("OpenApi: Ukjent fil: " + filename);
    return null;
  }
  if (kategori && kategori !== "kart") return null; // Ikke kart
  const projeksjon = finnProjeksjon(filename);
  const fullUrl =
    filename.indexOf("mbtiles") > 0 ? relUrl + "/" + filename + "/" : null;
  const fullDownloadUrl = relUrl + "/" + filename;
  return (
    <tr>
      <td>{beskrivelse}</td>
      <td>{projeksjon && <Projeksjon epsg={projeksjon} />}</td>
      <td>{prettyDate(modified)}</td>
      <td>{filtype}</td>
      <td>{fullUrl && <a href={fullUrl}>API</a>} </td>
      <td>
        {fullDownloadUrl && (
          <a href={fullDownloadUrl} style={{ display: "flex" }}>
            <CloudDownload
              style={{
                top: -3,
                position: "relative",
                width: 24
              }}
            />
            &nbsp;{prettySize(size)}
          </a>
        )}
      </td>
    </tr>
  );
};

const Api = ({
  protokoll,
  tittel,
  sidetittel,
  url,
  downloadUrl,
  relUrl,
  projeksjon,
  kode
}) => {
  let fullUrl = fixUrl(url, kode, relUrl, sidetittel);
  let fullDownloadUrl = fixUrl(downloadUrl, kode, relUrl, sidetittel);
  return (
    <tr>
      <td>{tittel}</td>
      <td>{projeksjon && <Projeksjon epsg={projeksjon} />}</td>
      <td />
      <td>{protokoll}</td>
      <td>{fullUrl && <a href={fullUrl}>API</a>} </td>
      <td>
        {fullDownloadUrl && (
          <a href={fullDownloadUrl}>
            <CloudDownload
              style={{
                top: -3,
                position: "relative",
                width: 24
              }}
            />
          </a>
        )}
      </td>
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
