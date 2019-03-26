import React from "react";
import Barna from "../../templates/Barna";

const Søsken = ({ søsken,nåværende,barn }) => {
  if (søsken.length <= 0) return null;
  return (
    <React.Fragment>
        {søsken.reverse().map(e => (
          <Søskne nåværende={nåværende} barn={barn} key={e.kode} {...e} />
        ))}
      </React.Fragment>
  );
};

const Søskne = ({ kode, tittel, url, farge,nåværende,barn }) => {
  var tittel1 = Object.values(tittel)[0];
  if(tittel1 ==="Katalog"){
    tittel1 = "Hovedsiden";
  }
  return (
    <React.Fragment>
        <a href={url === "Katalog" ? "/" : `/${url}/index.html`}>
        {tittel1!==nåværende &&
          <li className="sidebar_link sidebar_sister_child">
            {tittel1} 
          </li>
        }
        {tittel1===nåværende &&
          <React.Fragment>
            <li className="sidebar_link sidebar_active_child">
              {tittel1} 
            </li>
            <Barna barn={barn}/>
          </React.Fragment>
        }
         
              
        </a>
      
    </React.Fragment>
  );
};

export default Søsken;
