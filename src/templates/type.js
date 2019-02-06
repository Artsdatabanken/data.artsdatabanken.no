import React from "react";
import Seo from "../components/Seo";
import Swatch from "./Nin/Swatch";
import Kart from "./Nin/Kart";
import OpenData from "./OpenData";
import OpenApi from "./OpenApi";

export default props => {
  const {
    pageContext: { type }
  } = props;
  return (
    <div>
      <Seo pageMeta={type} />
      <div style={{ margin: "1rem" }}>
        <Bilde
          {...type.foto.forside}
          alt={"Foto av " + type.tittel.nb.toLowerCase()}
        />
        <h1>Åpne data fra Artsdatabanken</h1>
        <h2>{type.tittel.nb}</h2>
        <div>
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        <OpenApi api={type.api} />
        <OpenData kartformater={type.kartformat} />
        <Statistikk tittel={type.tittel.nb} {...type.stats} />
        <DelAv overordnede={type.overordnet} />
        <Barna barn={type.barn} />
        <RelasjonerSeksjon relasjoner={type.graf} />
        <Kart url={type.url} />
        <hr />
        Oppdatert {new Date().toISOString()} - Artsdatabanken
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

const formatInfo = {
  mvt: "https://docs.mapbox.com/vector-tiles/specification/"
};

const RelasjonerSeksjon = ({ relasjoner }) => {
  return relasjoner.map(e => (
    <div key={e.type}>
      <h3>{capitalize(e.type)}</h3>
      <Relasjoner noder={e.noder} />
    </div>
  ));
};

const Relasjoner = ({ noder }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "max-content max-content max-content max-content",
      gridGap: "0.3em",
      alignItems: "center"
    }}
  >
    {noder.map(e => {
      return <RelasjonNode key={e.kode} {...e} />;
    })}
  </div>
);

const RelasjonNode = ({ relasjon, kode, tittel, farge }) => {
  return (
    <React.Fragment>
      <Swatch farge={farge} />
      <a href={"./" + tittel.nb}>
        <div style={{}}>{tittel.nb}</div>
      </a>
      <div style={{}}>{relasjon ? "(" + relasjon + ")" : ""}</div>
      <div style={{ float: "right" }}>
        <Tag>{kode}</Tag>
      </div>
    </React.Fragment>
  );
};

const DelAv = ({ overordnede }) => (
  <div>
    <h3>Inngår i</h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content max-content",
        gridGap: "0.3em",
        alignItems: "center"
      }}
    >
      {overordnede.reverse().map(e => (
        <Overordnet key={e.kode} {...e} />
      ))}
    </div>
  </div>
);

const Overordnet = ({ kode, tittel, url, farge }) => {
  return (
    <React.Fragment>
      <Swatch farge={farge} />
      <a href={"/" + url}>
        <div style={{}}>{tittel.nb}</div>
      </a>
      {kode.length > 1 ? <Tag>{kode.split("-").pop()}</Tag> : <div />}
    </React.Fragment>
  );
};

const Bilde = ({ url, alt, lisens, opphav, utgiver }) => (
  <div
    style={{
      display: "block",
      xmargin: "1rem",
      xdisplay: "float",
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
    <h3>Inndelt i</h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content max-content max-content",
        gridGap: "0.3em",
        alignItems: "center"
      }}
    >
      {barn.map(e => (
        <Barn key={e.kode} {...e} />
      ))}
    </div>
  </div>
);

const Barn = ({ kode, tittel, farge }) => (
  <React.Fragment>
    <Swatch farge={farge} />
    <a href={"./" + tittel.nb}>
      <div>{tittel.nb}</div>
    </a>
    <Tag>{kode}</Tag>
  </React.Fragment>
);

const Tag = ({ children }) => (
  <div
    style={{
      display: "flex",
      borderRadius: 16,
      margin: 0,
      height: 26,
      color: "rgba(0,0,0,0.7)",
      alignItems: "center",
      whiteSpace: "nowrap",
      justifyContent: "center",
      marginLeft: 8,
      backgroundColor: "rgba(0,0,0,0.1)"
    }}
  >
    <div style={{ paddingLeft: 12, paddingRight: 12 }}>
      {children.split("-").pop()}
    </div>
  </div>
);

function capitalize(str) {
  if (str.length < 1) return str;
  return str[0].toUpperCase() + str.substring(1);
}
