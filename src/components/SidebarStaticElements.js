import React, { Component } from "react";

class SidebarStaticelements extends Component {
  render() {
    return (
        <React.Fragment>

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
                
        </React.Fragment>
    );
  } 
}

export default SidebarStaticelements;
