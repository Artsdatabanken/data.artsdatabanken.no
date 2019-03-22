import React, { Component } from "react";
import Barna from "../templates/Barna";
import type from "../templates/type";

class Sidebar extends Component {
  render() {
    return (
        <ul className="sibebar_link_menu">
            {/*<DelAv overordnede={type.overordnet} />*/}
            <li className="sidebar_link sidebar_active_child">Åpne Data</li>
            <Barna barn={this.props.type.barn}/>
            {/*<Relasjoner relasjoner={type.graf} />*/}
            <a href="https://artsdatabanken.no/Pages/233748?Key=1435226523">
                <li className="sidebar_link">Data fra artskart</li>
            </a>

            <a href="https://www.artsdatabanken.no/navn/sokhentnavn">
                <li className="sidebar_link">Data fra artsnavn</li>
            </a>

            <a href="https://www.artsdatabanken.no/hentdata/rodlistetearter">
                <li className="sidebar_link">Data om rødlistete arter</li>
            </a>

            <a href="https://www.artsdatabanken.no/Article/Article/133529">
                <li className="sidebar_link">Data om rødlistete naturtyper</li>
            </a>

            <a href="https://www.artsdatabanken.no/hentdata/fremmedearter">
                <li className="sidebar_link">Data om fremmede arter</li>
            </a>
                
        </ul>
    );
  } 
}

export default Sidebar;
