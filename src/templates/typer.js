import React from "react";
import { Link } from "gatsby";

export default ({ pageContext: { typer } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>Velg type</h1>
    <ul style={{ padding: 0 }}>
      {typer.map(type => (
        <li
          key={type.kode}
          style={{
            textAlign: "center",
            listStyle: "none",
            display: "inline-block"
          }}
        >
          <Link to={`/nin/${type.path}`}>
            <img src={type.bilde} alt={type.navn} />
            <p>{type.navn}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
