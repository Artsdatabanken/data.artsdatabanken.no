import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div className="header_background">
            <div className="header_padding">
                <img src="https://artsdatabanken.no/Files/7809" className="top_image"/>
                <h1 className="header_title">Artsdatabankens åpne data </h1>
            </div>
        </div>
    );
  } 
}

export default Header;
