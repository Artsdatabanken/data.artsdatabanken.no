import React, { Component } from "react";

class Kart extends Component {
  render() {
    const url = `https://maps.artsdatabanken.no/${
      this.props.url
    }/grid_liten.png`;
    return (
      <div
        style={{
          xxmargin: 8,
          xpadding: 8,
          xwidth: 639,
          xheight: 790,
          float: "right",
          borderRadius: 8,
          boxShadow: "hsla(0, 0%, 0%, 0.14) 0px 1px 4px 0px"
        }}
      >
        <a href="http://vg.no">
          <div
            style={{
              filter: "url(#kart)"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={639} height={790}>
              <defs>
                <filter id="kart">
                  <feImage
                    xlinkHref="https://maps.artsdatabanken.no/Bakgrunnskart/NaturalEarth/bak_liten.32633.png"
                    x={0}
                    y={0}
                    width={639}
                    height={790}
                    result="backg"
                  />
                  <feImage
                    xlinkHref={url}
                    x={0}
                    y={0}
                    width={639}
                    height={790}
                    result="coverage"
                  />
                  <feColorMatrix
                    in="backg"
                    mode="matrix"
                    values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0 1"
                    result="bg"
                  />
                  <feGaussianBlur
                    in="backg"
                    stdDeviation="0.0"
                    result="blurbg"
                  />
                  <feGaussianBlur
                    in="coverage"
                    stdDeviation="0.5"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="0 1 0 0 1  0 1.5 0 0 0.5  0 0.1 0 0 0  400 0 0 0 -0.01"
                    result="fg"
                  />
                  <feBlend in="bg" in2="fg" mode="multiply" />
                </filter>
              </defs>
            </svg>
          </div>
        </a>
      </div>
    );
  }
}

export default Kart;
