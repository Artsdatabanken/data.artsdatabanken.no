import React from "react";
import { Link } from "gatsby";

export default ({ pageContext: { type } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>{type.navn}</h1>
    <img src={type.bilde} alt={type.navn} />
    <Link to={`/nin/`}>Back to list</Link>
  </div>
);
