import React, { Component } from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";
import Swatch from "./Nin/Swatch";

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

export default Barna;
