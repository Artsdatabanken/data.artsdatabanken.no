import React, { Component } from "react";
import Projeksjon from "./Projeksjon";
const urllib = require("url");
const path = require("path");

class Kartformat extends Component {
  render() {
    const { url, størrelse, oppdatert, type, format } = this.props;
    if (!url) return null;
    var parsed = urllib.parse(url);
    const filnavn = path.basename(parsed.pathname);
    const filtype = path.extname(parsed.pathname);
    const projeksjon = finnProjeksjon(filnavn);
    const tittel = titler[filnavn] || filnavn;
    return (
      <tr>
        <td style={{}}>
          <a href={filnavn}>{tittel}</a>
        </td>
        <td style={{}}>{filtype}</td>
        <td style={{ textAlign: "right" }}>{mksize(størrelse)}</td>
        <td style={{}}>{mkdate(oppdatert)}</td>
        {false && <td style={{}}>{mktittel(type, format, projeksjon)}</td>}
        {false && <td style={{}}>{type}</td>}
        <td>
          <Projeksjon epsg={projeksjon} />
        </td>
        <td style={{}}>{beskrivelse(this.props)}</td>
      </tr>
    );
  }
}

function beskrivelse(props) {
  if (props.zoom) return zoomToDescription(props.zoom);
  return "abc";
}

function ext(type, format) {
  const fs = type + "." + format;
  switch (fs) {
    case "polygon.pbf":
      return "mbtiles";
    default:
      return "xx";
  }
}

function mktittel(type, format, projeksjon) {
  return `${type}.${format}.${projeksjon}.${ext(type, format)}`;
}

function mksize(size) {
  if (size < 1000) return toString(size);
  size /= 1024;
  if (size < 100) return size.toFixed(1) + " KB";
  if (size < 1000) return size.toFixed(0) + " KB";
  size /= 1024;
  if (size < 100) return size.toFixed(1) + " MB";
  if (size < 1000) return size.toFixed(0) + " MB";
  size /= 1024;
  return size.toFixed(1) + " GB";
}

function mkdate(date) {
  if (!date) return;
  return new Date(date).toISOString().substring(0, 10);
}

const titler = {
  "polygon.3857.geojson": "",
  "raster.32633.tif": "GeoTIFF med kontinuerlige data",
  "raster_gradient.3857.mbtiles":
    "Mapbox Raster tile set (MVT) med kontinuerlige data",
  "raster.indexed.3857.mbtiles":
    "Mapbox Raster tile set (MVT) med klassedelte data",
  "polygon.3857.mbtiles": "Mapbox Vector tile set (MVT) med klassedelte data"
};
const metersperPixelAtZoom = [
  156412,
  78206,
  39103,
  19551,
  9776,
  4888,
  2444,
  1222,
  611,
  305,
  152,
  76,
  38,
  19,
  9.5,
  4.77,
  2.39,
  1.19,
  0.6,
  0.3
];

function finnProjeksjon(filnavn) {
  const r = filnavn.match(/\.(\d*?)\./);
  return r ? r[1] : "";
}

function zoomToDescription(zoom) {
  return `Zoom-nivåer ${zoom[0]} - ${zoom[1]} (~${
    metersperPixelAtZoom[zoom[1]]
  } meter oppløsning)`;
}

export default Kartformat;
