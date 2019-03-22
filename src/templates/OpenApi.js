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
        protokoll: "WMS",
        beskrivelse: "Web Map Service"
      },
      {
        tittel: "OGC WFS",
        url:
          "https://nintest.artsdatabanken.no/?map=/maps/%KODE%.map&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
        projeksjon: 32633,
        protokoll: "WFS",
        beskrivelse: "Web Feature Service"
      },
      {
        tittel: "Vector tiles",
        url: "./polygon.3857/",
        projeksjon: 3857,
        protokoll: "XYZ",
        beskrivelse:
          "Kartfliser i vektorformat for bruk i web-løsninger. Attributter: navn, kode & areal"
      },
      {
        tittel: "Raster tiles",
        url: "./gradient.3857/",
        projeksjon: 3857,
        protokoll: "XYZ",
        beskrivelse:
          "Kartfliser i rasterformat for bruk i web-løsninger. Attributter: navn, kode & areal"
      },

    ];

    return (
      <div class="table">
        <h2> {tittel} data </h2>
        <h3>Tilgjengelige formater</h3>
        <div>
          Datagrunnlaget er bearbeidet av artsdatabanken, og kan benyttes etter lisensene (lisens).
       </div>
       <h4>API</h4>
        <table>
          <thead>
            <tr>
            <th>Format</th>
              <th>Tittel</th>
              <th>Projeksjon</th>
              
              <th>Beskrivelse</th>
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
  protokoll,
  tittel,
  url,
  projeksjon,
  
  beskrivelse
}) => {
  return (
    <tr>
      <td >{protokoll}</td>
      <td >
        <a href={url}>{tittel}</a>
      </td>
      <td>
        <Projeksjon epsg={projeksjon} />
      </td>
      
      <td >{beskrivelse}</td>
    </tr>
  );
};
export default OpenApi;
