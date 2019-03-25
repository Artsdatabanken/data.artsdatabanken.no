import React, { Component } from "react";
import Barna from "../templates/Barna";
import type from "../templates/type";
import SidebarStaticElements from "./SidebarStaticElements";

class SidebarForStaticPage extends Component {
  render() {
    return (
        <ul className="sibebar_link_menu">
            <a href="/">
                <li className="sidebar_link sidebar_active_child">Til hovedsiden</li>
            </a>
            <a href="/Datakilde">
                <li className="sidebar_link sidebar_active_child">Datakilde</li>
            </a>
            <a href="/Natur_i_Norge">
                <li className="sidebar_link sidebar_active_child">Natur i Norge</li>
            </a>
            <a href="/Naturvernområde">
                <li className="sidebar_link sidebar_active_child">Naturvernområde</li>
            </a>
            <a href="/Fylke">
                <li className="sidebar_link sidebar_active_child">Fylke</li>
            </a>
            <a href="/Truet_art_natur">
                <li className="sidebar_link sidebar_active_child">Truet art/natur</li>
            </a>
            <a href="/Biota">
                <li className="sidebar_link sidebar_active_child">Arter</li>
            </a>
            
            
            <SidebarStaticElements/>
                
        </ul>
    );
  } 
}

export default SidebarForStaticPage;