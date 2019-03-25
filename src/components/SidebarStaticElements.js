import React, { Component } from "react";

class SidebarStaticelements extends Component {
  render() {
    const { tittel,type } = this.props;


    return (
        <React.Fragment>            
            <a href="/artskart">
                <li className={tittel==="artskart"&& "sidebar_link sidebar_active_parent"||"sidebar_link"} >Data fra artskart</li>
            </a>
            {tittel==="artskart"&&
                <ul className="sidebar_children artskart_children">
                    <a href="/artskart/retningslinjer">
                        <li className="sidebar_link">Retningslinjer</li>
                    </a>
                    <a href="/artskart/bidragsytere">
                        <li className="sidebar_link">Bidragsytere</li>
                    </a>
                    <a href="/artskart/bildebruk">
                        <li className="sidebar_link">Bildebruk</li>
                    </a>
                    <a href="/artskart/kvalitetssikring">
                        <li className="sidebar_link">Kvalitetssikring</li>
                    </a>
                    <a href="/artskart/dataformat_og_nedlasting">
                        <li className="sidebar_link">Dataformat og nedlasting</li>
                    </a>
                </ul>
            }

            <a href="/artsnavn">
                <li className="sidebar_link">Data fra artsnavn</li>
            </a>
            {tittel==="artsnavn"&&
            <ul className="sidebar_children artsnavn_children">
                <a href="http://www2.artsdatabanken.no/artsnavn/Contentpages/Sok.aspx">
                    <li className="sidebar_link">Søk etter navn på arter og artsgrupper</li>
                </a>
                <a href="http://www.artsportalen.artsdatabanken.no/#artstre">
                    <li className="sidebar_link">Let i slektskapstreet</li>
                </a>
                <a href="http://www2.artsdatabanken.no/artsnavn/Contentpages/Eksport.aspx">
                    <li className="sidebar_link">Eksporter lister med navn</li>
                </a>
                <a href="https://www.artsdatabanken.no/Pages/225532">
                    <li className="sidebar_link">Listesøk og Navnevask</li>
                </a>
                <a href="http://webtjenester.artsdatabanken.no/Artsnavnebase.asmx">
                    <li className="sidebar_link">Nett-tjenester på navn</li>
                </a>
                <a href="http://eksport.artsdatabanken.no/Artsnavnebase/">
                    <li className="sidebar_link">Nedlasting av hele Artsnavnebasen eller ett av rikene (CSV-format)</li>
                </a>

            </ul>
            }
            <a href="/rodlistearter">
                <li className="sidebar_link">Data om rødlistearter</li>
            </a>

            <a href="/rodliste_naturtyper">
                <li className="sidebar_link">Data om rødliste naturtyper</li>
            </a>

            <a href="/fremmedarter">
                <li className="sidebar_link">Data om fremmede arter</li>
            </a>
                
        </React.Fragment>
    );
  } 
}

export default SidebarStaticelements;
