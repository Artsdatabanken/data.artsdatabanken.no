import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header_background">
        <div className="header_padding">
          <img
            src="/logo.png"
            className="top_image"
            alt="artsdatabanken logo"
          />
          <h1 className="header_title">Artsdatabankens åpne data </h1>
        </div>
      </div>
    );
  }
}

export default Header;
