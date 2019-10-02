import React from "react";
import Barna from "../../templates/Barna";

const AlleBarna = ({ søsken, nåværende, barn }) => {
  if (!søsken) return null;
  return (
    <React.Fragment>
      {søsken.map(e => (
        <EttBarn nåværende={nåværende} barn={barn} key={e.kode} {...e} />
      ))}
    </React.Fragment>
  );
};

const EttBarn = ({ tittel, url, farge, nåværende, barn }) => {
  var tittel1 = tittel.nb || tittel.sn;
  return (
    <React.Fragment>
      <a href={url === "Katalog" ? "/" : `${url}`}>
        {tittel1 !== nåværende && (
          <li className="sidebar_link sidebar_sister_child">{tittel1}</li>
        )}
      </a>
      {tittel1 === nåværende && (
        <React.Fragment>
          <li className="sidebar_link sidebar_active_child">{tittel1}</li>
          <Barna barn={barn} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

function sorter(søsken) {
  return søsken.sort((a, b) => (tittel(a) > tittel(b) ? 1 : -1));
}

const tittel = tittel => tittel.nb || tittel.la;

export default AlleBarna;
