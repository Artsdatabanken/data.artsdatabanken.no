import React, { Component } from "react";
import SidebarStaticElements from "./SidebarStaticElements";

const Link = ({ url, children }) => (
  <a href={url}>
    <li className="sidebar_link">{children}</li>
  </a>
);

class SidebarForStaticPage extends Component {
  render() {
    const { tittel } = this.props;
    return (
      <ul className="sibebar_link_menu">
        <Link url="/">Hovedsiden</Link>
        {false && <Link url="/Biota">Arter</Link>}
        <Link url="/Natur_i_Norge">Natur i Norge</Link>
        <Link url="/Naturvernområde">Naturvernområde</Link>
        <Link url="/Administrativ_grense">Administrativ grense</Link>
        <SidebarStaticElements tittel={tittel} />
      </ul>
    );
  }
}

export default SidebarForStaticPage;
