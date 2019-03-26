import React from "react";
import Kartformat from "../../templates/Kartformat";

const OpenData = ({ kartformater }) => {
  if (!kartformater || Object.entries(kartformater).length <= 0) return null;
  return (
    <div class="table">
      <h3>Direkte nedlastbare data</h3>
      <table className="open_data">
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
