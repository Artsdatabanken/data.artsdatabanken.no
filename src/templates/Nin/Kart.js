import React, { Component } from "react";

class Kart extends Component {
  render() {
    const url = `https://data.artsdatabanken.no/${
      this.props.url
    }/grid_liten.png`;
    return (
      <div class="table" style={{}}>

        <h4>Dekningsområde for kartdata</h4>

        <div className="imagecontainer">
          <a href={"http://nin.artsdatabanken.no/" + this.props.url}>
          <img src="https://data.artsdatabanken.no/Basiskart/NaturalEarth/bak_liten.32633.png" />
          <img src={url} className="imageFilter"/>
          </a>
        </div>
      </div>
    );
  } /* 174 19 61   0.682353 0.07451 0.239216 */
}

export default Kart;
