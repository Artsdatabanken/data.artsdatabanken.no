import React, { Component } from "react";
import Barna from "../templates/Barna";
import type from "../templates/type";
import SidebarStaticElements from "./SidebarStaticElements";

class Sidebar extends Component {
  render() {
    return (
        <ul className="sibebar_link_menu">
          
            {/*
                <DelAv overordnede={type.overordnet} />
                <Barna barn={this.props.type.barn}/>
                <Relasjoner relasjoner={type.graf} />
                
            */}
            <SidebarStaticElements/>
            
                
        </ul>
    );
  } 
}

export default Sidebar;
