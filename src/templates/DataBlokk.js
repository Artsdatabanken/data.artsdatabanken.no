import React, { Component } from "react";
import Projeksjon from "./Projeksjon";

class DataBlokk extends Component {
  render() {
    const { tittel } = this.props;

    return (
      <div className="services_container">     
        <div className="sources_container">
          <div className="source_container">
              <div className="source_item">
                Miljødirektoratet
                <div className="licences_container">
                  <img class="img-license" src="https://artsdatabanken.no/Content/Images/Lisenser/icons/cc.png" alt="Creative Commons"></img>
                  <img class="img-license" src="https://artsdatabanken.no//Content/Images/Lisenser/icons/by.png" alt="Attribution"></img>
                </div>
              </div>
              <div className="source_item">
                Kartverket
                <div className="licences_container">
                  <img class="img-license" src="https://artsdatabanken.no/Content/Images/Lisenser/icons/cc.png" alt="Creative Commons"></img>
                  <img class="img-license" src="https://artsdatabanken.no//Content/Images/Lisenser/icons/by.png" alt="Attribution"></img>
                </div>
              </div>
              <div className="source_item">
                Statistisk sentralbyrå
                <div className="licences_container">
                  <img class="img-license" src="https://artsdatabanken.no/Content/Images/Lisenser/icons/cc.png" alt="Creative Commons"></img>
                  <img class="img-license" src="https://artsdatabanken.no//Content/Images/Lisenser/icons/by.png" alt="Attribution"></img>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default DataBlokk;
