import React from "react";
import path from "path";
import Seo from "../components/Seo";

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
        <div>
          {type.ingress} <a href={type.infoUrl}>{type.infoUrl}</a>
        </div>
        <DelAv overordnede={type.overordnet} />
        <Barna barn={type.barn} />
      </div>
    </div>
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
    <div style={{}}>{kode}</div>
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
    <div style={{}}>{tittel.nb}</div>
    <div style={{}}>{kode}</div>
  </React.Fragment>
);

const Swatch = ({ farge }) => (
  <div
    style={{
      width: 24,
      height: 24,
      backgroundColor: farge,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.33)"
    }}
  />
);
