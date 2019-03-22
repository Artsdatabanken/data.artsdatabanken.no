import React, { Component } from "react";
import Projeksjon from "./Projeksjon";

class OpenEgenskap extends Component {
  render() {
    const { tittel } = this.props;
    const formater = [
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
      <div class="table">
        <h2> Egenskaper API </h2>
        <div>
          Datagrunnlaget for APIet er bearbeidet av artsdatabanken, og kan benyttes etter lisensene (lisens).
          <br/><br/>
        </div>
        <table>
          <thead>
            <tr>
              <th>Format</th>
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
  url,
  projeksjon,
  beskrivelse
}) => {
  return (
    <tr>
      <td ><a href={url}>{protokoll}</a></td>
      <td>
        <Projeksjon epsg={projeksjon} />
      </td>
      <td >{beskrivelse}</td>
    </tr>
  );
};
export default OpenEgenskap;
