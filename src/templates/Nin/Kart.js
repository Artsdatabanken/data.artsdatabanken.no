import React, { Component } from "react";

class Kart extends Component {
  render() {
    const url = `https://maps.artsdatabanken.no/${
      this.props.url
    }/grid_liten.png`;
    return (
      <div class="table" style={{}}>
        <h4>Dekningsområde</h4>
        <div
          style={{
            margin: "1em",
            marginLeft: "1em",
            display: "inline-block",
            boxShadow: "hsla(0, 0%, 0%, 0.14) 0px 2px 14px 0px"
          }}
        >
          <div style={{ display: "block" }}>{this.props.children}</div>
          <a href={"http://nin.artsdatabanken.no/" + this.props.url}>
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
                      stdDeviation="1.0"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="0.682353 0.682353 0.682353 0 0.5  0.07451 0.07451 0.07451 0 0.07451  0 0 0 0 0.239216  1 1 1 0 0.01"
                      result="fg"
                    />
                    <feBlend in="bg" in2="fg" mode="multiply" />
                  </filter>
                </defs>
              </svg>
            </div>
          </a>
        </div>
      </div>
    );
  } /* 174 19 61   0.682353 0.07451 0.239216 */
}

export default Kart;
