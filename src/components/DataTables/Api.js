import React from "react";

import Projeksjon from "../../templates/Projeksjon";

const Api = ({
  protokoll,
  tittel,
  sidetittel,
  url,
  downloadUrl,
  relUrl,
  projeksjon,
  kode,
  beskrivelse,
  vilkår
}) => {
  if (vilkår && !vilkår({ url: relUrl })) return null;
  let fullUrl = fixUrl(url, kode, relUrl, sidetittel);
  let fullDownloadUrl = fixUrl(downloadUrl, kode, relUrl, sidetittel);
  return (
    <tr>
      <td>{tittel}</td>
      <td>{projeksjon && <Projeksjon epsg={projeksjon} />}</td>
      <td>{beskrivelse}</td>
      <td>{protokoll}</td>
      <td>{fullUrl && <a href={fullUrl}>API</a>} </td>
      <td>{fullDownloadUrl && <a href={fullDownloadUrl}>Last ned</a>}</td>
    </tr>
  );
};

const fixUrl = (url, kode, relUrl, tittel) =>
  (url || "")
    .replace("%ID%", kode.split("-")[1])
    .replace("%KODE%", kode)
    .replace("%URL%", relUrl)
    .replace("%TITTEL%", tittel);

export default Api;
