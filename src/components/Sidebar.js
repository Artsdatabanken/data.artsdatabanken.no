import React, { Component } from "react";
import Barna from "../templates/Barna";
import type from "../templates/type";
import DelAv from "../templates//DelAv";
import Relasjoner from "../templates//Relasjoner";
import SidebarStaticElements from "./SidebarStaticElements";

class Sidebar extends Component {

  render() {
    const { tittel,type } = this.props;

    return (
        <ul className="sibebar_link_menu">
          <DelAv overordnede={type.overordnet} />
            <li className="sidebar_link sidebar_active_child">{tittel}</li>
            <Barna barn={type.barn}/>
            <Relasjoner relasjoner={type.graf} />
  
        <SidebarStaticElements/>
            
                
        </ul>
    );
  } 
}

export default Sidebar;
