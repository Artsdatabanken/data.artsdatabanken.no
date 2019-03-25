import React, { Component } from "react";
import Barna from "../templates/Barna";
import type from "../templates/type";

class Sidebar extends Component {
  render() {
    return (
        <ul className="sibebar_link_menu">
            
            <a href="/Katalog">
                <li className="sidebar_link sidebar_active_child">Åpne Data</li>
            </a>
            
           
            {/*<DelAv overordnede={type.overordnet} />
                 <Barna barn={this.props.type.barn}/>
                <Relasjoner relasjoner={type.graf} />
            */}
            <a href="/artskart">
                <li className="sidebar_link">Data fra artskart</li>
            </a>
            <ul className="sidebar_children">
            <a href="/artskart/retningslinjer">
                    <li className="sidebar_link">Retningslinjer</li>
                </a>
                <a href="/artskart/bidragsytere">
                    <li className="sidebar_link">Bidragsytere</li>
                </a>
                <a href="/artskart/bildebruk">
                    <li className="sidebar_link">Bildebruk</li>
                </a>
            </ul>

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
