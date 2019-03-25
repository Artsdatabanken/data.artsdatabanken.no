import React, { Component } from "react";
import Barna from "../templates/Barna";
import type from "../templates/type";
import SidebarStaticElements from "./SidebarStaticElements";

class SidebarForStaticPage extends Component {
  render() {
    const { tittel } = this.props;
    return (
        <ul className="sibebar_link_menu">
            <a href="/">
                <li className="sidebar_link">Hovedsiden</li>
            </a>
            <a href="/Datakilde">
                <li className="sidebar_link">Datakilde</li>
            </a>
            <a href="/Natur_i_Norge">
                <li className="sidebar_link">Natur i Norge</li>
            </a>
            <a href="/Naturvernområde">
                <li className="sidebar_link">Naturvernområde</li>
            </a>
            <a href="/Fylke">
                <li className="sidebar_link">Fylke</li>
            </a>
            <a href="/Truet_art_natur">
                <li className="sidebar_link">Truet art/natur</li>
            </a>
            <a href="/Biota">
                <li className="sidebar_link">Arter</li>
            </a>
            
            
            <SidebarStaticElements tittel={tittel}/>
                
        </ul>
    );
  } 
}

export default SidebarForStaticPage;