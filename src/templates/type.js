import React from "react";
import path from "path";
import Seo from "../components/Seo";
import Swatch from "./Nin/Swatch";

export default props => {
  const {
    pageContext: { type }
  } = props;
  //  const parent = path.dirname(props["*"]);
  return (
    <div>
      <Seo pageMeta={type} />
      <div style={{ width: 960, margin: "1rem auto" }}>
        <Bilde
          {...type.foto.forside}
          alt={"Foto av " + type.tittel.nb.toLowerCase()}
        />
        <h1>{type.tittel.nb}</h1>
        <DelAv overordnede={type.overordnet} />
        <div>
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        <Statistikk tittel={type.tittel.nb} {...type.stats} />
        <Barna barn={type.barn} />
        <Relasjoner relasjoner={type.graf} />
        <Kartformater kartformater={type.kartformat} />
      </div>
    </div>
  );
};

const arealFastland = 385180000000;
const Statistikk = ({
  tittel,
  areal,
  geometrier,
  arealPrefix,
  geometrierPrefix
}) => (
  <div>
    <h3>Statistikk</h3>
    <div>
      {tittel} areal:&nbsp;
      {tilArealString(areal)} ({((areal / arealFastland) * 100).toFixed(1)}% av
      datasettet)
      <p />
      Datasettet dekker med {tilArealString(arealPrefix)}{" "}
      {((arealPrefix / arealFastland) * 100).toFixed(1)}% av Fastlands-Norge.
    </div>
  </div>
);

function tilArealString(areal) {
  if (areal < 50000) return areal.toFixed(0) + " m²";
  areal /= 1000000;
  return areal.toFixed(0) + " km²";
}

const projections = {
  3857: {
    url:
      "http://spatialreference.org/ref/sr-org/epsg3857-wgs84-web-mercator-auxiliary-sphere/"
  },
  4326: { url: "http://spatialreference.org/ref/epsg/4326/" }
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

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};

const Kartformater = ({ kartformater }) => {
  const formater = [
    {
      tittel: "Spatialite database",
      størrelse: 32563233,
      filnavn: "vector.spatialite.4326.sqlite",
      filtype: "sqlite",
      oppdatertDato: new Date(),
      format: "asdfff",
      projeksjon: 3857,
      beskrivelse: ""
    },
    {
      tittel: "Mapbox Vector tiles (MVT)",
      størrelse: 42321233,
      filnavn: "vector.4326.mbtiles",
      filtype: "mbtiles",
      oppdatertDato: new Date(),
      format: "asdfff",
      projeksjon: 4326,
      beskrivelse: zoomToDescription([0, 13])
    },
    {
      tittel: "GeoJSON",
      størrelse: 552234,
      filnavn: "vector.4326.geojson",
      filtype: "geojson",
      oppdatertDato: new Date(),
      format: "asdfff",
      projeksjon: 4326,
      beskrivelse: "Egenskaper: name, code, areal, index"
    }
  ];

  return (
    <div>
      <h3>Last ned</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "max-content max-content max-content max-content max-content max-content",
          gridGap: "0.3em",
          alignItems: "center"
        }}
      >
        <div style={{}}>Tittel</div>
        <div style={{}}>Filending</div>
        <div style={{}}>Størrelse</div>
        <div style={{}}>Sist oppdatert</div>
        <div style={{}}>Projeksjon</div>
        <div style={{}}>Beskrivelse</div>
        {formater.map(e => (
          <Kartformat {...e} />
        ))}
        {kartformater.map(e => (
          <Kartformat {...e} />
        ))}
      </div>
    </div>
  );
};

function ext(type, format) {
  const fs = type + "." + format;
  switch (fs) {
    case "vector.pbf":
      return "mbtiles";
  }
  return "XXXXXX";
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
  projeksjon,
  beskrivelse,
  format
}) => (
  <React.Fragment>
    <div style={{}}>
      <a href={filnavn}>{tittel}</a>
    </div>
    <div style={{}}>{filtype}</div>
    <div style={{ textAlign: "right" }}>{mksize(størrelse)}</div>
    <div style={{}}>{mkdate(oppdatertDato)}</div>
    {false && <div style={{}}>{mktittel(type, format, projeksjon)}</div>}{" "}
    {false && <div style={{}}>{type}</div>}
    <Projeksjon epsg={projeksjon} />
    <div style={{}}>{beskrivelse}</div>
  </React.Fragment>
);

const Tag = ({ children }) => (
  <div
    style={{
      display: "flex",
      borderRadius: 16,
      margin: 0,
      height: 32,
      color: "rgba(0,0,0,0.7)",
      alignItems: "center",
      whiteSpace: "nowrap",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.2)"
    }}
  >
    <div style={{ paddingLeft: 12, paddingRight: 12 }}>{children}</div>
  </div>
);
const Projeksjon = ({ epsg }) => (
  <a href={projections[epsg].url}>EPSG:{epsg}</a>
);

const Relasjoner = ({ relasjoner }) => (
  <div>
    <h3>Har forhold til</h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content max-content max-content",
        gridGap: "0.3em",
        alignItems: "center"
      }}
    >
      {relasjoner.map(e => (
        <Relasjon {...e} />
      ))}
    </div>
  </div>
);

const Relasjon = ({ relasjon, kode, tittel, farge }) => (
  <React.Fragment>
    <Swatch farge={farge} />
    <div style={{}}>{tittel.nb}</div>
    <div style={{}}>{`(${relasjon})`}</div>
    <Tag>{kode}</Tag>
  </React.Fragment>
);

const DelAv = ({ overordnede }) => (
  <div>
    En del av
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content max-content",
        gridGap: "0.3em",
        alignItems: "center"
      }}
    >
      {overordnede.map(e => (
        <Overordnet {...e} />
      ))}
    </div>
  </div>
);

const Overordnet = ({ kode, tittel, farge }) => (
  <React.Fragment>
    <Swatch farge={farge} />
    <div style={{}}>{tittel.nb}</div>
    <Tag>{kode}</Tag>
  </React.Fragment>
);

const Bilde = ({ url, alt, lisens, opphav, utgiver }) => (
  <div
    style={{
      margin: "1rem",
      display: "float",
      float: "right",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.33)"
    }}
  >
    <img src={url} alt={alt} />
  </div>
);

const Barna = ({ barn }) => (
  <div>
    <h3>Deles inn i</h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content max-content",
        gridGap: "0.3em",
        alignItems: "center"
      }}
    >
      {barn.map(e => (
        <Barn {...e} />
      ))}
    </div>
  </div>
);

const Barn = ({ kode, tittel, farge }) => (
  <React.Fragment>
    <Swatch farge={farge} />
    <a href={"./" + tittel.nb}>
      <div style={{}}>{tittel.nb}</div>
    </a>
    <Tag>{kode}</Tag>
  </React.Fragment>
);
