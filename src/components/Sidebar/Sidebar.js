import React, { Component } from "react";
import Søsken from "./Søsken";
import DelAv from "./DelAv";
import Relasjoner from "../../templates/Relasjoner";
import SidebarStaticElements from "./SidebarStaticElements";

class Sidebar extends Component {

  render() {
    const { tittel,type } = this.props;

    return (
        <ul className="sibebar_link_menu">
            <DelAv overordnede={type.overordnet} />           
            <Søsken søsken={type.søsken} nåværende={tittel} barn={type.barn}/>
           {/* skjules inntil vider plan eksisterer
           <Relasjoner relasjoner={type.graf} />*/}
            <SidebarStaticElements tittel={ tittel} type={type}/> 
        </ul>
    );
  } 
}

export default Sidebar;
