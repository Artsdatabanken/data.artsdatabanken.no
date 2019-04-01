import React, { Component } from "react";

const Kilder = ({ kilder }) => (
  <div className="services_container">
    <div className="_sources_container" style={{ paddingBottom: 48 }}>
      {(kilder || []).map(k => (
        <Kilde key={k.kode} {...k} />
      ))}
    </div>
  </div>
);

class Kilde extends Component {
  render() {
    const { tittel, url, lisenskode, geonorgeurl } = this.props;

    return (
      <div
        className="_source_container"
        style={{ _display: "grid", backgroundColor: "#f8f8f8" }}
      >
        <div className="_source_item" style={{ textAlign: "left" }}>
          <div style={{ _float: "left", width: "80%" }}>
            <a href={"/" + url}>
              {false && (
                <img
                  style={{ _width: 100, display: "block", float: "left" }}
                  src={
                    "https://data.artsdatabanken.no/" + url + "/forside_408.png"
                  }
                />
              )}
              <span style={{ fontSize: 22 }}>{tittel && tittel.nb}</span>
            </a>
            <div className="_licences_container">
              Lisens: <a href={lisenser[lisenskode]}>{lisenskode}</a>
            </div>
            {geonorgeurl && (
              <div className="_licences_container">
                <a href={geonorgeurl}>Datasett på Geonorge</a>
              </div>
            )}
          </div>
          <div style={{ position: "relative", _float: "right" }} />
        </div>
      </div>
    );
  }
}

const lisenser = {
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  NLOD: "https://data.norge.no/nlod/no/2.0"
};

export default Kilder;
