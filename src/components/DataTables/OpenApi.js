import React, { Component } from "react";
import Projeksjon from "../../templates/Projeksjon";
import { CloudDownload } from "@material-ui/icons";

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
    tittel: "Vector tiles",
    url: "polygon.3857.mbtiles/",
    downloadUrl: "polygon.3857.mbtiles",
    projeksjon: 3857,
    protokoll: "XYZ PBF",
    beskrivelse: "Kartfliser i vektorformat for bruk i web-løsninger."
  },
  {
    tittel: "Raster tiles",
    url: "gradient.3857.mbtiles/",
    downloadUrl: "gradient.3857.mbtiles",
    projeksjon: 3857,
    protokoll: "XYZ PNG",
    beskrivelse: "Kartfliser i rasterformat for bruk i web-løsninger."
  },
  {
    tittel: "OGC WMS",
    url:
      "https://wms.artsdatabanken.no/?map=/maps/mapfiles/la.map&?&request=GetCapabilities&service=WMS&version=1.1.1&", // %KODE%
    projeksjon: 32633,
    protokoll: "WMS",
    beskrivelse: "Web Map Service"
  },
  {
    tittel: "Spatialite database",
    downloadUrl: "polygon.spatialite.4326.sqlite",
    projeksjon: 4326,
    protokoll: "SQLITE",
    beskrivelse: "Vektorkart i sqlite romlig database"
  },
  {
    tittel: "GeoJSON",
    downloadUrl: "polygon.4326.geojson",
    projeksjon: 4326,
    protokoll: "GeoJSON",
    beskrivelse: ""
  },
  {
    tittel: "GeoJSON",
    downloadUrl: "polygon.32633.geojson",
    projeksjon: 32633,
    protokoll: "GeoJSON",
    beskrivelse: ""
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

            <th>Beskrivelse</th>
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

const filmeta = {
  "avatar_40.jpg": { obsolete: true },
  "avatar_40.png": { obsolete: true },
  "forside_408.jpg": { obsolete: true },
  "forside_950.jpg": { obsolete: true },
  "forside_950.png": { obsolete: true },
  "foto_408.jpg": {
    beskrivelse: "Forsidefoto (408 px)",
    filtype: "JPEG",
    kategori: "media"
  },
  "logo.svg": {
    beskrivelse: "Logo (vektor)",
    filtype: "SVG",
    kategori: "media"
  },
  "logo_24.png": {
    beskrivelse: "Logo (24 px)",
    filtype: "PNG",
    kategori: "media"
  },
  "logo_48.png": {
    beskrivelse: "Logo (48 px)",
    filtype: "PNG",
    kategori: "media"
  },
  "metadata.json": {
    beskrivelse: "Egenskaper",
    filtype: "JSON",
    kategori: "meta"
  },
  "polygon.32633.geojson": {
    beskrivelse: "GeoJSON polygoner",
    filtype: "GeoJSON"
  },
  "polygon.4326.geojson": {
    beskrivelse: "GeoJSON polygoner",
    filtype: "GeoJSON"
  },
  "polygon.3857.mbtiles": {
    beskrivelse: "Vector tiles",
    filtype: "MBTiles"
  },
  "polygon.spatialite.4326.sqlite": {
    beskrivelse: "Spatialite database med vektordata",
    filtype: "Spatialite"
  },
  "raster_indexed.3857.mbtiles": {
    beskrivelse: "Raster tiles (data)",
    filtype: "MBTiles"
  },
  "raster_indexed_palette.png": {
    beskrivelse: "Raster tiles (data): Palettfil/LUT",
    filtype: "MBTiles"
  }
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
  const fullUrl = relUrl + "/" + filename + "/";
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
