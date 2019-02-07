import React from "react";
import Projeksjon from "./Projeksjon";

const OpenData = ({ kartformater }) => {
  const formater = [
    {
      tittel: "Spatialite database",
      størrelse: 32563233,
      filnavn: "polygon.spatialite.4326.sqlite",
      filtype: "sqlite",
      oppdatertDato: new Date(),
      format: "asdfff",
      projeksjon: 4326,
      beskrivelse: ""
    },
    {
      tittel: "Mapbox Vector tile set (MVT)",
      størrelse: 42321233,
      filnavn: "polygon.3857.mbtiles",
      filtype: "mbtiles",
      oppdatertDato: new Date(),
      format: "asdfff",
      projeksjon: 3857,
      beskrivelse: zoomToDescription([0, 13])
    },
    {
      tittel: "GeoJSON",
      størrelse: 552234,
      filnavn: "polygon.4326.geojson",
      filtype: "geojson",
      oppdatertDato: new Date(),
      format: "asdfff",
      projeksjon: 4326,
      beskrivelse: "Kart i vektorformat"
    },
    {
      tittel: "Egenskaper",
      størrelse: 552234,
      filnavn: "metadata.json",
      filtype: "json",
      oppdatertDato: new Date(),
      format: "asdfff",
      projeksjon: "N/A",
      beskrivelse: "Egenskaper i maskinlesbar form"
    }
  ];

  return (
    <div>
      <h3>Åpne data</h3>
      <table>
        <thead>
          <tr>
            <th style={{}}>Tittel</th>
            <th style={{}}>Filending</th>
            <th style={{}}>Størrelse</th>
            <th style={{}}>Sist oppdatert</th>
            <th style={{}}>Projeksjon</th>
            <th style={{}}>Beskrivelse</th>
          </tr>
        </thead>
        <tbody>
          {false &&
            Object.keys(kartformater).map(e => {
              return <Kartformat key={e} type={e} {...kartformater[e]} />;
            })}
          {formater.map(e => (
            <Kartformat key={e.filnavn} {...e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

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
  return date.toISOString().substring(0, 10);
}

const Kartformat = ({
  tittel,
  filnavn,
  filtype,
  størrelse,
  oppdatertDato,
  type,
  beskrivelse,
  projeksjon,
  format
}) => {
  //  const projeksjon = finnProjeksjon(filnavn);
  return (
    <tr>
      <td style={{}}>
        <a href={filnavn}>{tittel}</a>
      </td>
      <td style={{}}>{filtype}</td>
      <td style={{ textAlign: "right" }}>{mksize(størrelse)}</td>
      <td style={{}}>{mkdate(oppdatertDato)}</td>
      {false && <td style={{}}>{mktittel(type, format, projeksjon)}</td>}
      {false && <td style={{}}>{type}</td>}
      <td>
        <Projeksjon epsg={projeksjon} />
      </td>
      <td style={{}}>{beskrivelse}</td>
    </tr>
  );
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

function zoomToDescription(zoom) {
  return `Zoomnivå ${zoom[0]} - ${zoom[1]} (~${
    metersperPixelAtZoom[zoom[1]]
  } meter oppløsning)`;
}

export default OpenData;
