import React from "react";
import Kartformat from "./Kartformat";

const OpenData = ({ kartformater }) => {
  if (!kartformater || Object.entries(kartformater).length <= 0) return null;
  return (
    <div class="table">
      <h4>Åpne data</h4>
      <table>
        <thead>
          <tr>
            <th style={{}}>Tittel</th>
            <th style={{}}>Filending</th>
            <th style={{}}>Størrelse</th>
            <th style={{}}>Sist oppdatert</th>
            <th style={{}}>Projeksjon</th>
            <th style={{}}>Beskrivelse</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(kartformater).map(e => {
            return <Kartformat key={e} type={e} {...kartformater[e]} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OpenData;
