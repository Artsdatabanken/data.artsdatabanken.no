import React, { Component } from "react";
import Projeksjon from "./Projeksjon";

class OpenApi extends Component {
  render() {
    const { tittel } = this.props;
    const formater = [
      {
        tittel: "OGC WMS",
        url:
          "https://nintest.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
        projeksjon: 32633,
        attributter: "ingen",
        protokoll: "WMS",
        beskrivelse: "Web Map Service"
      },
      {
        tittel: "OGC WFS",
        url:
          "https://nintest.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
        projeksjon: 32633,
        attributter: "navn, kode & areal i m²",
        protokoll: "WFS",
        beskrivelse: "Web Feature Service"
      },
      {
        tittel: "Vector tiles",
        url: "./polygon.3857/",
        projeksjon: 3857,
        attributter: "navn, kode & areal i m²",
        protokoll: "XYZ",
        beskrivelse:
          "Kartfliser i vektorformat for bruk i web-løsninger. Attributter: navn, kode & areal"
      },
      {
        tittel: "Raster tiles",
        url: "./gradient.3857/",
        projeksjon: 3857,
        attributter: "ingen",
        protokoll: "XYZ",
        beskrivelse:
          "Kartfliser i rasterformat for bruk i web-løsninger. Attributter: navn, kode & areal"
      },
      {
        tittel: "Egenskaper",
        url: "metadata.json",
        protokoll: "JSON",
        attributter: "alle",
        projeksjon: "4326",
        beskrivelse: `Alle tilgjengelige egenskaper relatert til ${tittel}, i maskinlesbar form`
      }
    ];

    return (
      <div style={{}}>
        <h4>Åpne tjenester</h4>
        <table
          style={{
            gridGap: "0.3em",
            alignItems: "center"
          }}
        >
          <thead>
            <tr>
              <th style={{}}>Tittel</th>
              <th style={{}}>Projeksjon</th>
              <th style={{}}>Protokoll</th>
              <th style={{}}>Attributter</th>
              <th style={{}}>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            {formater.map(e => (
              <Api key={e.tittel} {...e} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const Api = ({
  tittel,
  url,
  projeksjon,
  protokoll,
  attributter,
  beskrivelse
}) => {
  return (
    <tr>
      <td style={{}}>
        <a href={url}>{tittel}</a>
      </td>
      <td>
        <Projeksjon epsg={projeksjon} />
      </td>
      <td style={{}}>{protokoll}</td>
      <td style={{}}>{attributter}</td>
      <td style={{}}>{beskrivelse}</td>
    </tr>
  );
};
export default OpenApi;
