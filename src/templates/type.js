import React from "react";
import Seo from "../components/Seo";
import Swatch from "./Nin/Swatch";
import Kart from "./Nin/Kart";
import OpenData from "./OpenData";
import OpenApi from "./OpenApi";
import Barna from "./Barna";
import Tag from "./Tag";

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
        <h2>{type.tittel.nb} - åpne data</h2>
        <div>
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        <DelAv overordnede={type.overordnet} />
        <Barna barn={type.barn} />
        <OpenApi api={type.api} tittel={type.tittel.nb} />
        <OpenData kartformater={type.kartformat} tittel={type.tittel.nb} />
        <RelasjonerSeksjon relasjoner={type.graf} />
        <Kart url={type.url}>
          <Statistikk tittel={type.tittel.nb} {...type.stats} />
        </Kart>
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

function capitalize(str) {
  if (str.length < 1) return str;
  return str[0].toUpperCase() + str.substring(1);
}
