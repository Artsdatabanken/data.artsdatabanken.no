import React from "react";
import { Link } from "gatsby";
import path from "path";
import Seo from "../components/Seo";

export default props => {
  const {
    pageContext: { type }
  } = props;
  const parent = path.dirname(props["*"]);
  //  console.error("props", props);
  console.log(type.barn);
  return (
    <div>
      <Seo pageMeta={type} />
      <div style={{ width: 960, margin: "1rem auto" }}>
        <Bilde {...type.foto.forside} alt={type.navn} />
        <h1>{type.tittel.nb}</h1>
        <div>{type.ingress}</div>
        <Link to={parent}>Naviger opp</Link>
        <div>{JSON.stringify(props)}</div>
        <Barna barn={type.barn} />
      </div>
    </div>
  );
};

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
    <div style={{}}>{tittel.nb}</div>
    <div style={{}}>{kode}</div>
  </React.Fragment>
);
