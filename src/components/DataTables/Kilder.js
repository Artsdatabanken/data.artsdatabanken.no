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
        className="source_container"
        style={{ display: "grid", backgroundColor: "#f8f8f8" }}
      >
        <div className="source_item">
          <div style={{ float: "left", width: "80%" }}>
            <a href={"/" + url} style={{ textDecoration: "none" }}>
              <img
                style={{ paddingRight: 8, display: "block", float: "left" }}
                src={"https://data.artsdatabanken.no/" + url + "/avatar_40.png"}
              />
              <span style={{ fontSize: 16, fontWeight: 500, color: "#4c4a48" }}>
                {tittel && tittel.nb}
              </span>
            </a>
            <div className="_licences_container">
              {geonorgeurl ? (
                <>
                  <span>
                    <a href={geonorgeurl}>Datasett</a>
                  </span>
                  &nbsp; (
                  <Lisens kode={lisenskode} />)
                </>
              ) : (
                <Lisens kode={lisenskode} />
              )}
            </div>
          </div>
          <div style={{ position: "relative" }} />
        </div>
      </div>
    );
  }
}

const Lisens = ({ kode }) => <a href={lisenser[kode]}>{kode}</a>;

const lisenser = {
  "CC BY SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  NLOD: "https://data.norge.no/nlod/no/2.0"
};

export default Kilder;
